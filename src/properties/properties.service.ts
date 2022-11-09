import { Injectable } from '@nestjs/common';
import { Prisma, Property, PropertyType } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { AggregateProperty } from 'src/@generated';
import { LivingPropsAggregateResponse } from './dto/living-rooms-aggregate.response';
import { PropAggregateResponse } from './dto/prop-aggregate.response';
import { PropCountsResponse } from './dto/props-counts.response';

@Injectable()
export class PropertiesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PropertyUncheckedCreateInput) {
    return await this.prisma.property.create({ data });
  }

  async upsertMany(data: Prisma.PropertyUncheckedCreateInput[]) {
    const response: Property[] = [];
    for await (const property of data) {
      const res = Boolean(property.id)
        ? await this.prisma.property.update({
            where: { id: property.id },
            data: property,
          })
        : await this.prisma.property.create({
            data: property,
          });
      res && response.push(res);
    }
    return response;
  }

  async updateMany(data: Prisma.PropertyUncheckedUpdateManyInput[]) {
    return await this.prisma.property.updateMany({
      data,
    });
  }

  async findAll(buildingId?: number, propertyType?: PropertyType) {
    const keys: Prisma.PropertyWhereInput[] = [];
    buildingId && keys.push({ buildingId });
    propertyType && keys.push({ propertyType });
    return await this.prisma.property.findMany({ where: { AND: keys } });
  }

  async findOne(id: number) {
    return await this.prisma.property.findUnique({ where: { id } });
  }

  async update(id: number, data: Prisma.PropertyUncheckedUpdateInput) {
    return await this.prisma.property.update({ where: { id }, data });
  }

  async remove(id: number) {
    return await this.prisma.property.delete({ where: { id } });
  }

  async getPropCounts(buildingId: number): Promise<PropCountsResponse> {
    const living = await this.prisma.property.count({
      where: { buildingId, propertyType: 'LIVING' },
    });

    const commercial = await this.prisma.property.count({
      where: { buildingId, propertyType: 'COMMERCIAL' },
    });

    const parking = await this.prisma.property.count({
      where: { buildingId, propertyType: 'PARKING' },
    });

    return { living, commercial, parking };
  }

  async getLivingRoomsAggregate(
    buildingId: number,
  ): Promise<LivingPropsAggregateResponse> {
    const attributes: Prisma.PropertyAggregateArgs = {
      _count: true,
      _sum: {
        totalArea: true,
      },
      _avg: {
        totalArea: true,
      },
      _min: {
        totalArea: true,
      },
      _max: {
        totalArea: true,
      },
    };
    const oneRoom = await this.prisma.property.aggregate({
      where: { buildingId, propertyType: 'LIVING', rooms: 1 },
      ...attributes,
    });

    const twoRoom = await this.prisma.property.aggregate({
      where: { buildingId, propertyType: 'LIVING', rooms: 2 },
      ...attributes,
    });

    const threeRoom = await this.prisma.property.aggregate({
      where: { buildingId, propertyType: 'LIVING', rooms: 3 },
      ...attributes,
    });

    const fourRoom = await this.prisma.property.aggregate({
      where: { buildingId, propertyType: 'LIVING', rooms: 4 },
      ...attributes,
    });

    return {
      oneRoom: oneRoom as AggregateProperty,
      twoRoom: twoRoom as AggregateProperty,
      threeRoom: threeRoom as AggregateProperty,
      fourRoom: fourRoom as AggregateProperty,
    };
  }

  async getPropAggregate(
    buildingIds: number[],
  ): Promise<PropAggregateResponse> {
    const attributes: Prisma.PropertyAggregateArgs = {
      _count: true,
      _sum: {
        totalArea: true,
      },
      _avg: {
        totalArea: true,
      },
      _min: {
        totalArea: true,
        wallHeight: true,
      },
      _max: {
        totalArea: true,
        floor: true,
        entrance: true,
        wallHeight: true,
      },
    };

    const living = await this.prisma.property.aggregate({
      where: { propertyType: 'LIVING', buildingId: { in: buildingIds } },
      ...attributes,
    });

    const commercial = await this.prisma.property.aggregate({
      where: { propertyType: 'COMMERCIAL', buildingId: { in: buildingIds } },
      ...attributes,
    });

    const parking = await this.prisma.property.aggregate({
      where: { propertyType: 'PARKING', buildingId: { in: buildingIds } },
      ...attributes,
    });
    return {
      living: living as AggregateProperty,
      commercial: commercial as AggregateProperty,
      parking: parking as AggregateProperty,
    };
  }
}
