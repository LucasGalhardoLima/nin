import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { PropertySearchDto } from './dto';

@Injectable()
export class PropertiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const property = await this.prisma.property.findUnique({
      where: { id },
      include: {
        city: true,
        neighborhood: true,
        images: true,
      },
    });

    if (!property) {
      throw new NotFoundException('Property not found');
    }

    return property;
  }

  async search(dto: PropertySearchDto) {
    const {
      cityId,
      neighborhoodId,
      transactionType,
      propertyType,
      minPrice,
      maxPrice,
      minBedrooms,
      minBathrooms,
      page = 1,
      limit = 20,
    } = dto;

    const where = {
      isActive: true,
      ...(cityId && { cityId }),
      ...(neighborhoodId && { neighborhoodId }),
      ...(transactionType && { transactionType }),
      ...(propertyType && { propertyType }),
      ...(minPrice !== undefined && { price: { gte: minPrice } }),
      ...(maxPrice !== undefined && { price: { ...((minPrice !== undefined && { gte: minPrice }) || {}), lte: maxPrice } }),
      ...(minBedrooms !== undefined && { bedrooms: { gte: minBedrooms } }),
      ...(minBathrooms !== undefined && { bathrooms: { gte: minBathrooms } }),
    };

    const [properties, total] = await Promise.all([
      this.prisma.property.findMany({
        where,
        include: {
          city: true,
          neighborhood: true,
          images: true,
        },
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.property.count({ where }),
    ]);

    return {
      data: properties.map((p) => this.toResponse(p)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }

  async findAllActive() {
    return this.prisma.property.findMany({
      where: { isActive: true },
      include: {
        city: true,
        neighborhood: true,
        images: true,
      },
    });
  }

  toResponse(property: Awaited<ReturnType<typeof this.findById>>) {
    return {
      id: property.id,
      title: property.title,
      description: property.description,
      price: property.price,
      propertyType: property.propertyType,
      transactionType: property.transactionType,
      bedrooms: property.bedrooms,
      bathrooms: property.bathrooms,
      area: property.area,
      address: property.address,
      city: {
        id: property.city.id,
        name: property.city.name,
        state: property.city.state,
        latitude: property.city.latitude,
        longitude: property.city.longitude,
      },
      neighborhood: property.neighborhood
        ? {
            id: property.neighborhood.id,
            name: property.neighborhood.name,
            cityId: property.neighborhood.cityId,
            quietnessScore: property.neighborhood.quietnessScore,
            safetyScore: property.neighborhood.safetyScore,
          }
        : null,
      latitude: property.latitude,
      longitude: property.longitude,
      hasParking: property.hasParking,
      hasGarden: property.hasGarden,
      hasPool: property.hasPool,
      hasSecurity: property.hasSecurity,
      petFriendly: property.petFriendly,
      hasGym: property.hasGym,
      hasPlayground: property.hasPlayground,
      hasGreenArea: property.hasGreenArea,
      images: property.images.map((img) => ({
        id: img.id,
        url: img.url,
        isPrimary: img.isPrimary,
      })),
      sourceUrl: property.sourceUrl,
      sourceName: property.sourceName,
      lastScrapedAt: property.lastScrapedAt,
      lastSeenAt: property.lastSeenAt,
      createdAt: property.createdAt,
      updatedAt: property.updatedAt,
    };
  }
}
