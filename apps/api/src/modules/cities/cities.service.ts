import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class CitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    const cities = await this.prisma.city.findMany({
      orderBy: { name: 'asc' },
    });
    return cities.map((city) => this.toResponse(city));
  }

  async findById(id: string) {
    const city = await this.prisma.city.findUnique({
      where: { id },
      include: { neighborhoods: true },
    });

    if (!city) {
      throw new NotFoundException('City not found');
    }

    return city;
  }

  async getNeighborhoods(cityId: string) {
    const city = await this.prisma.city.findUnique({
      where: { id: cityId },
    });

    if (!city) {
      throw new NotFoundException('City not found');
    }

    const neighborhoods = await this.prisma.neighborhood.findMany({
      where: { cityId },
      orderBy: { name: 'asc' },
    });

    return neighborhoods.map((n) => ({
      id: n.id,
      name: n.name,
      cityId: n.cityId,
      quietnessScore: n.quietnessScore,
      safetyScore: n.safetyScore,
    }));
  }

  toResponse(city: { id: string; name: string; state: string; latitude: number; longitude: number }) {
    return {
      id: city.id,
      name: city.name,
      state: city.state,
      latitude: city.latitude,
      longitude: city.longitude,
    };
  }
}
