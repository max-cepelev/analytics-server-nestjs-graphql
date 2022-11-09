import { Injectable } from '@nestjs/common';
import { District, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DistrictsService {
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<District | null> {
    return await this.prisma.district.findUnique({
      where: { id },
      include: { city: true },
    });
  }

  async findAll(cityId?: number): Promise<District[]> {
    return await this.prisma.district.findMany({
      where: Boolean(cityId) ? { cityId } : undefined,
      include: { city: true },
      orderBy: { name: 'asc' },
    });
  }

  async create(data: Prisma.DistrictUncheckedCreateInput): Promise<District> {
    return await this.prisma.district.create({ data });
  }

  async update(
    id: number,
    data: Prisma.DistrictUncheckedUpdateInput,
  ): Promise<District> {
    const { name, cityId } = data;
    return await this.prisma.district.update({
      data: { id, name, cityId },
      where: { id },
    });
  }

  async remove(id: number): Promise<District> {
    return await this.prisma.district.delete({ where: { id } });
  }
}
