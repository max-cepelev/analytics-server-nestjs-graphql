import { Injectable } from '@nestjs/common';
import { Developer, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class DevelopersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.DeveloperUncheckedCreateInput): Promise<Developer> {
    const developer = await this.prisma.developer.create({ data });
    return developer;
  }

  async findAll(groupId?: number) {
    const developers = await this.prisma.developer.findMany({
      where: groupId ? { groupId } : undefined,
      include: { group: true },
      orderBy: { name: 'asc' },
    });
    return developers;
  }

  async findOne(id: number) {
    const developer = await this.prisma.developer.findUnique({ where: { id } });
    return developer;
  }

  async update(id: number, data: Prisma.DeveloperUncheckedUpdateInput) {
    const developer = await this.prisma.developer.update({
      where: { id },
      data,
    });
    return developer;
  }

  async remove(id: number) {
    const response = await this.prisma.developer.delete({ where: { id } });
    return response;
  }
}
