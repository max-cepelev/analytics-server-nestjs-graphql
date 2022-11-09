import { Injectable } from '@nestjs/common';
import { City, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CitiesService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.CityUncheckedCreateInput): Promise<City> {
    return await this.prisma.city.create({ data });
  }

  async findAll(regionId?: number) {
    return await this.prisma.city.findMany({
      where: regionId ? { regionId } : undefined,
      include: { region: true },
      orderBy: { name: 'asc' },
    });
  }

  async findOne(id: number) {
    return await this.prisma.city.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.CityUncheckedUpdateInput) {
    return await this.prisma.city.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await this.prisma.city.delete({ where: { id } });
  }
}
