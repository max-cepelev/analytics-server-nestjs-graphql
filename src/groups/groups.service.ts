import { Injectable } from '@nestjs/common';
import { Prisma, PropertyType } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { PropertiesService } from 'src/properties/properties.service';
import { SalesService } from 'src/sales/sales.service';
import { GroupWithSalesResponse } from './dto/group-sales.response';

@Injectable()
export class GroupsService {
  constructor(
    private prisma: PrismaService,
    private propertiesService: PropertiesService,
    private salesService: SalesService,
  ) {}

  async create(data: Prisma.GroupUncheckedCreateInput) {
    const group = await this.prisma.group.create({ data });
    return group;
  }

  async findAll() {
    const groups = await this.prisma.group.findMany({
      orderBy: { name: 'asc' },
      include: { regions: true },
    });
    return groups;
  }

  async findAllWithAnalitics() {
    const data = await this.prisma.group
      .findMany({
        include: { buildings: { select: { id: true } } },
      })
      .then(async (groups) => {
        const groupsData = [];
        for (const group of groups) {
          const buildingIds = group.buildings.map((item) => item.id);
          const analitics = await this.propertiesService.getPropAggregate(
            buildingIds,
          );
          groupsData.push({ name: group.name, analitics });
        }
        return groupsData;
      });
    return data;
  }

  async findAllWithSalesSum(
    propertyType: PropertyType,
    date: string,
  ): Promise<GroupWithSalesResponse[]> {
    const data: GroupWithSalesResponse[] = await this.prisma.group
      .findMany({
        include: { buildings: { select: { id: true } } },
      })
      .then(async (groups) => {
        const groupsData = [];
        for (const group of groups) {
          const buildingIds = group.buildings.map((item) => item.id);
          if (buildingIds.length > 0) {
            const sales = await this.salesService.getSalesSum({
              propertyType,
              date: new Date(date),
              buildingIds,
            });
            groupsData.push({ id: group.id, name: group.name, sales, date });
          }
        }
        return groupsData;
      });
    return data;
  }

  async findOne(id: number) {
    const group = await this.prisma.group.findUnique({ where: { id } });
    return group;
  }

  async update(id: number, data: Prisma.GroupUncheckedUpdateInput) {
    const group = await this.prisma.group.update({
      where: { id },
      data,
    });
    return group;
  }

  async remove(id: number) {
    const response = await this.prisma.group.delete({ where: { id } });
    return response;
  }
}
