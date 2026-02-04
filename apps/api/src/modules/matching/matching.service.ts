import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { PropertiesService } from '../properties/properties.service';
import { PreferencesService } from '../preferences/preferences.service';
import { MatchListDto } from './dto';

export interface MatchScoreBreakdown {
  budget: number;
  space: number;
  location: number;
  lifestyle: number;
  amenities: number;
}

// Weights for each category (must sum to 100)
const WEIGHTS = {
  budget: 25,
  space: 20,
  location: 20,
  lifestyle: 20,
  amenities: 15,
};

@Injectable()
export class MatchingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly propertiesService: PropertiesService,
    private readonly preferencesService: PreferencesService,
  ) {}

  async getMatches(userId: string, dto: MatchListDto) {
    const preferences = await this.preferencesService.findByUserId(userId);
    if (!preferences) {
      throw new NotFoundException('User preferences not found. Please complete onboarding.');
    }

    // Get saved matches for this user
    const savedMatches = await this.prisma.savedMatch.findMany({
      where: { userId },
    });
    const savedMatchMap = new Map(savedMatches.map((m) => [m.propertyId, m]));

    return this.calculateMatchesWithPreferences(preferences, dto, savedMatchMap);
  }

  async getGuestMatches(preferencesDto: any, dto: MatchListDto) {
    // Transform raw DTO to internal format if needed
    // In this case, we'll assume the same structure as return of findByUserId for scoring
    const preferences = {
      ...preferencesDto,
      preferredNeighborhoods: preferencesDto.location?.preferredNeighborhoodIds?.map((id: string) => ({ neighborhoodId: id })) || [],
      targetCityId: preferencesDto.location?.targetCityId || null,
      ...preferencesDto.family,
      ...preferencesDto.budget,
      ...preferencesDto.lifestyle,
    };

    return this.calculateMatchesWithPreferences(preferences, dto);
  }

  private async calculateMatchesWithPreferences(
    preferences: any,
    dto: MatchListDto,
    savedMatchMap?: Map<string, any>,
  ) {
    // DB-level prefiltering for performance and quality
    const priceFilter: { gte?: number; lte?: number } = {};
    if (preferences.minPrice !== null && preferences.minPrice !== undefined) {
      priceFilter.gte = Math.floor(preferences.minPrice * 0.5);
    }
    if (preferences.maxPrice !== null && preferences.maxPrice !== undefined) {
      priceFilter.lte = Math.ceil(preferences.maxPrice * 1.5);
    }

    const where: any = {
      isActive: true,
      ...(preferences.targetCityId && { cityId: preferences.targetCityId }),
      ...(dto.neighborhoodId && { neighborhoodId: dto.neighborhoodId }),
      ...(preferences.transactionType && { transactionType: preferences.transactionType }),
      ...(Object.keys(priceFilter).length > 0 && { price: priceFilter }),
    };

    if (preferences.minBedrooms !== undefined) {
      where.AND = [
        ...(where.AND || []),
        {
          OR: [
            { bedrooms: { gte: preferences.minBedrooms } },
            { bedrooms: 0 }, // allow unknown bedrooms
          ],
        },
      ];
    }

    if (preferences.minBathrooms !== undefined) {
      where.AND = [
        ...(where.AND || []),
        {
          OR: [
            { bathrooms: { gte: preferences.minBathrooms } },
            { bathrooms: 0 }, // allow unknown bathrooms
          ],
        },
      ];
    }

    const properties = await this.prisma.property.findMany({
      where,
      include: {
        city: true,
        neighborhood: true,
        images: true,
      },
    });

    // Get POIs for lifestyle scoring
    const pois = await this.prisma.pointOfInterest.findMany({
      where: preferences.targetCityId ? { cityId: preferences.targetCityId } : {},
    });

    // Calculate scores for each property
    const matches = properties
      .map((property) => {
        const saved = savedMatchMap?.get(property.id);

        // Skip hidden properties
        if (saved?.isHidden) return null;

        const scoreBreakdown = this.calculateScore(property, preferences, pois);
        const totalScore =
          scoreBreakdown.budget * (WEIGHTS.budget / 100) +
          scoreBreakdown.space * (WEIGHTS.space / 100) +
          scoreBreakdown.location * (WEIGHTS.location / 100) +
          scoreBreakdown.lifestyle * (WEIGHTS.lifestyle / 100) +
          scoreBreakdown.amenities * (WEIGHTS.amenities / 100);
        const recencyBoost = this.calculateRecencyBoost(
          property.lastScrapedAt ?? property.createdAt,
        );
        const finalScore = Math.min(100, totalScore + recencyBoost);

        return {
          property: this.propertiesService.toResponse(property),
          matchScore: Math.round(finalScore * 10) / 10,
          scoreBreakdown,
          isFavorite: saved?.isFavorite ?? false,
          isHidden: false,
        };
      })
      .filter((m): m is NonNullable<typeof m> => m !== null);

    // Apply filters
    let filtered = matches;
    const minScore = dto.minScore ?? 40;
    if (minScore !== undefined) {
      filtered = filtered.filter((m) => m.matchScore >= minScore);
    }

    // Sort
    filtered.sort((a, b) => {
      const sortOrder = dto.sortOrder === 'asc' ? 1 : -1;
      
      switch (dto.sortBy) {
        case 'price':
          return (a.property.price - b.property.price) * (dto.sortOrder === 'asc' ? 1 : -1);
        case 'date':
          return (
            (new Date(b.property.lastScrapedAt || 0).getTime() -
              new Date(a.property.lastScrapedAt || 0).getTime()) *
            (dto.sortOrder === 'asc' ? -1 : 1)
          );
        case 'score':
        default:
          // b - a = descending (highest first)
          // a - b = ascending (lowest first)
          const multiplier = dto.sortOrder === 'asc' ? -1 : 1;
          return (b.matchScore - a.matchScore) * multiplier;
      }
    });

    // Paginate
    const page = dto.page ?? 1;
    const limit = dto.limit ?? 20;
    const start = (page - 1) * limit;
    const paginated = filtered.slice(start, start + limit);

    return {
      data: paginated,
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit),
    };
  }

  private calculateScore(
    property: Awaited<ReturnType<typeof this.propertiesService.findAllActive>>[0],
    preferences: NonNullable<Awaited<ReturnType<typeof this.preferencesService.findByUserId>>>,
    pois: Awaited<ReturnType<typeof this.prisma.pointOfInterest.findMany>>,
  ): MatchScoreBreakdown {
    return {
      budget: this.calculateBudgetScore(property, preferences),
      space: this.calculateSpaceScore(property, preferences),
      location: this.calculateLocationScore(property, preferences),
      lifestyle: this.calculateLifestyleScore(property, preferences, pois),
      amenities: this.calculateAmenityScore(property, preferences),
    };
  }

  private calculateBudgetScore(
    property: { price: number; transactionType: string },
    preferences: { minPrice: number | null; maxPrice: number | null; transactionType: string },
  ): number {
    // Transaction type mismatch = 0
    if (property.transactionType !== preferences.transactionType) {
      return 0;
    }

    const { minPrice, maxPrice } = preferences;
    const price = property.price;

    // No budget set = full score
    if (minPrice === null && maxPrice === null) {
      return 100;
    }

    // Within range = full score
    if (
      (minPrice === null || price >= minPrice) &&
      (maxPrice === null || price <= maxPrice)
    ) {
      return 100;
    }

    // Below minimum (rare case) - partial score
    if (minPrice !== null && price < minPrice) {
      const diff = (minPrice - price) / minPrice;
      return Math.max(0, 100 - diff * 50);
    }

    // Above maximum - penalty based on how much over
    if (maxPrice !== null && price > maxPrice) {
      const overPercent = ((price - maxPrice) / maxPrice) * 100;
      // 10% over = 80 score, 20% over = 60, 50% over = 0
      return Math.max(0, 100 - overPercent * 2);
    }

    return 100;
  }

  private calculateSpaceScore(
    property: { bedrooms: number; bathrooms: number },
    preferences: { minBedrooms: number; minBathrooms: number },
  ): number {
    let score = 100;

    // Bedrooms
    if (property.bedrooms < preferences.minBedrooms) {
      const diff = preferences.minBedrooms - property.bedrooms;
      score -= diff * 30; // -30 points per missing bedroom
    } else if (property.bedrooms > preferences.minBedrooms) {
      // Bonus for extra bedrooms (up to 10 points)
      score += Math.min(10, (property.bedrooms - preferences.minBedrooms) * 5);
    }

    // Bathrooms
    if (property.bathrooms < preferences.minBathrooms) {
      const diff = preferences.minBathrooms - property.bathrooms;
      score -= diff * 20; // -20 points per missing bathroom
    }

    // Penalize unknown values to avoid over-ranking incomplete listings
    if (property.bedrooms === 0) {
      score -= 15;
    }
    if (property.bathrooms === 0) {
      score -= 15;
    }

    return Math.max(0, Math.min(100, score));
  }

  private calculateLocationScore(
    property: { cityId: string; neighborhoodId: string | null },
    preferences: {
      targetCityId: string | null;
      preferredNeighborhoods: Array<{ neighborhoodId: string }>;
    },
  ): number {
    let score = 50; // Base score

    // City match
    if (preferences.targetCityId) {
      if (property.cityId === preferences.targetCityId) {
        score += 30;
      } else {
        return 20; // Wrong city, low score
      }
    } else {
      score += 30; // No city preference, give full city points
    }

    // Neighborhood bonus
    if (preferences.preferredNeighborhoods.length > 0 && property.neighborhoodId) {
      const isPreferred = preferences.preferredNeighborhoods.some(
        (pn) => pn.neighborhoodId === property.neighborhoodId,
      );
      if (isPreferred) {
        score += 20;
      }
    } else {
      score += 10; // No neighborhood preference, partial bonus
    }

    return Math.min(100, score);
  }

  private calculateLifestyleScore(
    property: {
      latitude: number | null;
      longitude: number | null;
      neighborhoodId: string | null;
      neighborhood?: { quietnessScore: number; safetyScore: number } | null;
    },
    preferences: {
      quietnessWeight: number;
      schoolProximityWeight: number;
      hospitalProximityWeight: number;
      commerceProximityWeight: number;
      safetyWeight: number;
      publicTransportWeight: number;
    },
    pois: Array<{ type: string; latitude: number; longitude: number }>,
  ): number {
    const poiWeights = {
      SCHOOL: preferences.schoolProximityWeight,
      HOSPITAL: preferences.hospitalProximityWeight,
      SUPERMARKET: preferences.commerceProximityWeight,
      BUS_STOP: preferences.publicTransportWeight,
    };

    const hasGeo = property.latitude !== null && property.longitude !== null;
    const hasNeighborhood = !!property.neighborhood;

    const totalWeight =
      (hasGeo ? Object.values(poiWeights).reduce((a, b) => a + b, 0) : 0) +
      (hasNeighborhood ? preferences.quietnessWeight + preferences.safetyWeight : 0);

    if (totalWeight === 0) return 50;

    let weightedScore = 0;

    // POI-based proximity scoring
    if (hasGeo) {
      for (const [poiType, weight] of Object.entries(poiWeights)) {
        const typePois = pois.filter((p) => p.type === poiType);
        if (typePois.length === 0 || weight === 0) continue;

        // Find nearest POI of this type
        const distances = typePois.map((poi) =>
          this.haversineDistance(
            property.latitude!,
            property.longitude!,
            poi.latitude,
            poi.longitude,
          ),
        );
        const nearestDistance = Math.min(...distances);

        // Score based on distance (0-2km = 100, 2-5km = gradual decrease, >5km = low)
        let proximityScore: number;
        if (nearestDistance <= 0.5) {
          proximityScore = 100;
        } else if (nearestDistance <= 1) {
          proximityScore = 90;
        } else if (nearestDistance <= 2) {
          proximityScore = 80;
        } else if (nearestDistance <= 3) {
          proximityScore = 60;
        } else if (nearestDistance <= 5) {
          proximityScore = 40;
        } else {
          proximityScore = 20;
        }

        weightedScore += proximityScore * (weight / totalWeight);
      }
    }

    // Quietness scoring using neighborhood data
    if (preferences.quietnessWeight > 0 && property.neighborhood) {
      const quietnessScore = property.neighborhood.quietnessScore * 10;
      weightedScore += quietnessScore * (preferences.quietnessWeight / totalWeight);
    }

    // Safety scoring using neighborhood data
    if (preferences.safetyWeight > 0 && property.neighborhood) {
      const safetyScore = property.neighborhood.safetyScore * 10;
      weightedScore += safetyScore * (preferences.safetyWeight / totalWeight);
    }

    return Math.min(100, weightedScore);
  }

  private calculateRecencyBoost(date: Date | null | undefined): number {
    if (!date) return 0;

    const now = new Date();
    const diffDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));

    if (diffDays <= 3) return 5;
    if (diffDays <= 7) return 3;
    if (diffDays <= 14) return 1;
    return 0;
  }

  private calculateAmenityScore(
    property: {
      hasParking: boolean;
      hasGarden: boolean;
      hasPool: boolean;
      hasSecurity: boolean;
      petFriendly: boolean;
    },
    preferences: {
      needsParking: boolean;
      needsGarden: boolean;
      needsPool: boolean;
      needsSecurity: boolean;
      hasPets: boolean;
    },
  ): number {
    let score = 100;
    let requiredCount = 0;
    let matchedCount = 0;

    const checks = [
      { needed: preferences.needsParking, has: property.hasParking },
      { needed: preferences.needsGarden, has: property.hasGarden },
      { needed: preferences.needsPool, has: property.hasPool },
      { needed: preferences.needsSecurity, has: property.hasSecurity },
      { needed: preferences.hasPets, has: property.petFriendly },
    ];

    for (const check of checks) {
      if (check.needed) {
        requiredCount++;
        if (check.has) {
          matchedCount++;
        }
      }
    }

    if (requiredCount === 0) {
      return 100; // No requirements, full score
    }

    // Score based on percentage of matched requirements
    score = (matchedCount / requiredCount) * 100;

    // Bonus points for extra amenities
    const extraAmenities = checks.filter((c) => !c.needed && c.has).length;
    score += extraAmenities * 5;

    return Math.min(100, score);
  }

  private haversineDistance(
    lat1: number,
    lon1: number,
    lat2: number,
    lon2: number,
  ): number {
    const R = 6371; // Earth's radius in km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
        Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  private toRad(deg: number): number {
    return deg * (Math.PI / 180);
  }

  async saveMatch(userId: string, propertyId: string) {
    const property = await this.prisma.property.findUnique({
      where: { id: propertyId },
    });
    if (!property) {
      throw new NotFoundException('Property not found');
    }

    const existing = await this.prisma.savedMatch.findUnique({
      where: { userId_propertyId: { userId, propertyId } },
    });

    if (existing) {
      return this.prisma.savedMatch.update({
        where: { id: existing.id },
        data: { isFavorite: true },
      });
    }

    return this.prisma.savedMatch.create({
      data: {
        userId,
        propertyId,
        matchScore: 0, // Will be recalculated
        scoreBreakdown: '{}',
        isFavorite: true,
      },
    });
  }

  async hideMatch(userId: string, propertyId: string) {
    const existing = await this.prisma.savedMatch.findUnique({
      where: { userId_propertyId: { userId, propertyId } },
    });

    if (existing) {
      return this.prisma.savedMatch.update({
        where: { id: existing.id },
        data: { isHidden: true },
      });
    }

    return this.prisma.savedMatch.create({
      data: {
        userId,
        propertyId,
        matchScore: 0,
        scoreBreakdown: '{}',
        isHidden: true,
      },
    });
  }
}
