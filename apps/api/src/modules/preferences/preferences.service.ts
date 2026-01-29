import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { UpdatePreferencesDto } from './dto';

@Injectable()
export class PreferencesService {
  constructor(private readonly prisma: PrismaService) {}

  async findByUserId(userId: string) {
    const preferences = await this.prisma.userPreferences.findUnique({
      where: { userId },
      include: {
        targetCity: true,
        preferredNeighborhoods: {
          include: { neighborhood: true },
        },
      },
    });
    return preferences;
  }

  async createOrUpdate(userId: string, dto: UpdatePreferencesDto) {
    const existing = await this.findByUserId(userId);

    const data = {
      // Family
      ...(dto.family && {
        adultsCount: dto.family.adultsCount,
        childrenCount: dto.family.childrenCount,
        minBedrooms: dto.family.minBedrooms,
        minBathrooms: dto.family.minBathrooms,
        hasPets: dto.family.hasPets,
      }),
      // Budget
      ...(dto.budget && {
        minPrice: dto.budget.minPrice,
        maxPrice: dto.budget.maxPrice,
        transactionType: dto.budget.transactionType,
      }),
      // Location
      ...(dto.location && {
        targetCityId: dto.location.targetCityId,
      }),
      // Lifestyle
      ...(dto.lifestyle && {
        quietnessWeight: dto.lifestyle.quietnessWeight,
        schoolProximityWeight: dto.lifestyle.schoolProximityWeight,
        hospitalProximityWeight: dto.lifestyle.hospitalProximityWeight,
        commerceProximityWeight: dto.lifestyle.commerceProximityWeight,
        safetyWeight: dto.lifestyle.safetyWeight,
        publicTransportWeight: dto.lifestyle.publicTransportWeight,
      }),
      // Amenities
      ...(dto.amenities && {
        needsParking: dto.amenities.needsParking,
        needsGarden: dto.amenities.needsGarden,
        needsPool: dto.amenities.needsPool,
        needsSecurity: dto.amenities.needsSecurity,
      }),
    };

    if (existing) {
      const updated = await this.prisma.userPreferences.update({
        where: { userId },
        data,
        include: {
          targetCity: true,
          preferredNeighborhoods: { include: { neighborhood: true } },
        },
      });

      // Handle preferred neighborhoods separately
      if (dto.location?.preferredNeighborhoodIds) {
        await this.updatePreferredNeighborhoods(
          updated.id,
          dto.location.preferredNeighborhoodIds,
        );
      }

      return this.findByUserId(userId);
    } else {
      const created = await this.prisma.userPreferences.create({
        data: {
          userId,
          ...data,
        },
        include: {
          targetCity: true,
          preferredNeighborhoods: { include: { neighborhood: true } },
        },
      });

      // Handle preferred neighborhoods separately
      if (dto.location?.preferredNeighborhoodIds) {
        await this.updatePreferredNeighborhoods(
          created.id,
          dto.location.preferredNeighborhoodIds,
        );
      }

      return this.findByUserId(userId);
    }
  }

  private async updatePreferredNeighborhoods(preferencesId: string, neighborhoodIds: string[]) {
    // Delete existing
    await this.prisma.preferredNeighborhood.deleteMany({
      where: { preferencesId },
    });

    // Create new
    if (neighborhoodIds.length > 0) {
      await this.prisma.preferredNeighborhood.createMany({
        data: neighborhoodIds.map((neighborhoodId) => ({
          preferencesId,
          neighborhoodId,
        })),
      });
    }
  }

  toResponse(preferences: Awaited<ReturnType<typeof this.findByUserId>>) {
    if (!preferences) {
      return null;
    }

    return {
      id: preferences.id,
      family: {
        adultsCount: preferences.adultsCount,
        childrenCount: preferences.childrenCount,
        minBedrooms: preferences.minBedrooms,
        minBathrooms: preferences.minBathrooms,
        hasPets: preferences.hasPets,
      },
      budget: {
        minPrice: preferences.minPrice,
        maxPrice: preferences.maxPrice,
        transactionType: preferences.transactionType,
      },
      location: {
        targetCityId: preferences.targetCityId,
        preferredNeighborhoodIds: preferences.preferredNeighborhoods.map(
          (pn) => pn.neighborhoodId,
        ),
      },
      lifestyle: {
        quietnessWeight: preferences.quietnessWeight,
        schoolProximityWeight: preferences.schoolProximityWeight,
        hospitalProximityWeight: preferences.hospitalProximityWeight,
        commerceProximityWeight: preferences.commerceProximityWeight,
        safetyWeight: preferences.safetyWeight,
        publicTransportWeight: preferences.publicTransportWeight,
      },
      amenities: {
        needsParking: preferences.needsParking,
        needsGarden: preferences.needsGarden,
        needsPool: preferences.needsPool,
        needsSecurity: preferences.needsSecurity,
      },
    };
  }
}
