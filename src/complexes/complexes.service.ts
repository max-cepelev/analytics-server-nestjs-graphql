import { Injectable } from '@nestjs/common';
import { Complex, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ComplexesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ComplexUncheckedCreateInput): Promise<Complex> {
    const complex = await this.prisma.complex.create({ data });
    return complex;
  }

  async findAll(
    groupId?: number,
    districtId?: number,
    cityId?: number,
  ): Promise<Complex[]> {
    const keys: Prisma.ComplexWhereInput[] = [];
    groupId && keys.push({ groupId });
    districtId && keys.push({ districtId });
    cityId && keys.push({ cityId });

    const complexes = await this.prisma.complex.findMany({
      where: { AND: keys },
      include: { city: true, group: true, district: true },
      orderBy: { name: 'asc' },
    });
    return complexes;
  }

  async findOne(id: number): Promise<Complex | null> {
    const complex = await this.prisma.complex.findUnique({ where: { id } });
    return complex;
  }

  async update(id: number, data: Prisma.ComplexUncheckedUpdateInput) {
    const complex = await this.prisma.complex.update({
      where: { id },
      data,
    });
    return complex;
  }

  async remove(id: number) {
    const response = await this.prisma.complex.delete({ where: { id } });
    return response;
  }
}
