import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';
import { User } from '@nin/database';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { email: string; name: string; passwordHash: string }) {
    return this.prisma.user.create({
      data,
      include: { preferences: true },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { preferences: true },
    });
  }

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { preferences: true },
    });
  }

  toResponse(user: User & { preferences?: unknown }) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      hasCompletedOnboarding: !!user.preferences,
    };
  }
}
