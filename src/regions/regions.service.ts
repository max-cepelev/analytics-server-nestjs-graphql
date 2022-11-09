import { Injectable } from '@nestjs/common';
import { Prisma, Region } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class RegionsService {
  constructor(private prisma: PrismaService) {}
  async create(data: Prisma.RegionUncheckedCreateInput) {
    return await this.prisma.region.create({ data });
  }

  async findAll(): Promise<Region[]> {
    return await this.prisma.region.findMany();
  }

  async findOne(id: number): Promise<Region> {
    return await this.prisma.region.findUnique({ where: { id } });
  }

  async update(
    id: number,
    data: Prisma.RegionUncheckedUpdateInput,
  ): Promise<Region> {
    return await this.prisma.region.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Region> {
    return await this.prisma.region.delete({ where: { id } });
  }
}
