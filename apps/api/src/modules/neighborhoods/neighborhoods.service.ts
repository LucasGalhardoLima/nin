import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class NeighborhoodsService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    const neighborhood = await this.prisma.neighborhood.findUnique({
      where: { id },
      include: { city: true },
    });

    if (!neighborhood) {
      throw new NotFoundException('Neighborhood not found');
    }

    return neighborhood;
  }

  toResponse(neighborhood: Awaited<ReturnType<typeof this.findById>>) {
    return {
      id: neighborhood.id,
      name: neighborhood.name,
      cityId: neighborhood.cityId,
      quietnessScore: neighborhood.quietnessScore,
      safetyScore: neighborhood.safetyScore,
      city: {
        id: neighborhood.city.id,
        name: neighborhood.city.name,
        state: neighborhood.city.state,
      },
    };
  }
}
