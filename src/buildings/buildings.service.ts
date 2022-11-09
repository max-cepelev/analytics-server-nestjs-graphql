import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { FileUpload } from 'graphql-upload-minimal';
import { PrismaService } from 'prisma/prisma.service';
import { FilesService } from 'src/files/files.service';
import { PropertiesService } from 'src/properties/properties.service';

import { SalesService } from 'src/sales/sales.service';

@Injectable()
export class BuildingsService {
  constructor(
    private prisma: PrismaService,
    private fileService: FilesService,
    private propertiesService: PropertiesService,
    private salesService: SalesService,
  ) {}

  async create(dto: Prisma.BuildingUncheckedCreateInput, file?: FileUpload) {
    const fileName = file ? await this.fileService.gqlCreateFile(file) : null;
    const response = await this.prisma.building.create({
      data: {
        ...dto,
        img: fileName ?? null,
      },
    });
    return response;
  }

  async update(
    id: number,
    data: Prisma.BuildingUncheckedUpdateInput,
    file?: FileUpload,
  ) {
    const fileName = file ? await this.fileService.gqlCreateFile(file) : null;
    const response = await this.prisma.building.update({
      data: { ...data, img: fileName ? fileName : data.img },
      where: { id },
    });
    return response;
  }

  async remove(id: number) {
    const response = await this.prisma.building.delete({ where: { id } });
    return response;
  }

  async findAll({
    complexId,
    groupId,
    cityId,
    districtId,
    completed,
    page,
  }: {
    groupId?: number;
    complexId?: number;
    cityId?: number;
    districtId?: number;
    completed?: boolean;
    page?: number;
  }) {
    const keys: Prisma.BuildingWhereInput[] = [];
    completed !== undefined && keys.push({ completed });
    groupId && keys.push({ groupId });
    complexId && keys.push({ complexId });
    cityId && keys.push({ cityId });
    districtId && keys.push({ districtId });

    const response = await this.prisma.building.findMany({
      include: { group: true, complex: true, developer: true, _count: true },
      orderBy: { name: 'asc' },
      take: page ? 15 : undefined,
      skip: page ? (+page - 1) * 15 : undefined,
      where: { AND: keys },
    });
    return response;
  }

  async getBuildingsWithCount({
    complexId,
    groupId,
    cityId,
    districtId,
    completed,
    page,
  }: {
    groupId?: number;
    complexId?: number;
    cityId?: number;
    districtId?: number;
    completed?: boolean;
    page?: number;
  }) {
    const keys: Prisma.BuildingWhereInput[] = [];
    completed !== undefined && keys.push({ completed });
    groupId && keys.push({ groupId });
    complexId && keys.push({ complexId });
    cityId && keys.push({ cityId });
    districtId && keys.push({ districtId });
    const count = await this.prisma.building.count({
      where: { AND: keys },
    });

    const response = await this.prisma.building.findMany({
      include: { group: true, complex: true, developer: true, _count: true },
      orderBy: { name: 'asc' },
      take: page ? 15 : undefined,
      skip: page ? (page - 1) * 15 : undefined,
      where: { AND: keys },
    });
    return { buildings: response, count };
  }

  async getBuildingsForMap() {
    const response = this.prisma.building.findMany({
      where: { latitude: { not: null }, longitude: { not: null } },
      select: {
        id: true,
        name: true,
        propertyClass: true,
        latitude: true,
        longitude: true,
        complex: {
          select: {
            name: true,
          },
        },
      },
    });
    return response;
  }

  async findOneWithSales(id: number) {
    const response = await this.prisma.building.findUnique({
      where: { id },
      include: {
        group: { select: { name: true } },
        complex: true,
        city: { include: { region: true } },
        sales: { orderBy: [{ year: 'asc' }, { month: 'asc' }] },
        developer: { select: { name: true } },
      },
    });
    return response;
  }

  async findOneWithAnalitics(id: number) {
    const analitics = await this.propertiesService.getLivingRoomsAggregate(+id);
    const living = await this.salesService.getSalesSum({
      propertyType: 'LIVING',
      buildingIds: [id],
    });
    const commercial = await this.salesService.getSalesSum({
      propertyType: 'COMMERCIAL',
      buildingIds: [id],
    });
    const parking = await this.salesService.getSalesSum({
      propertyType: 'PARKING',
      buildingIds: [id],
    });
    const response = await this.prisma.building.findUnique({
      where: { id },
      include: {
        complex: true,
        district: true,
        sales: { orderBy: [{ year: 'asc' }, { month: 'asc' }] },
        developer: { include: { group: true } },
        city: { include: { region: true } },
      },
    });
    return {
      building: response,
      analitics,
      sales: { living, commercial, parking },
    };
  }

  async findOneWithProperties(id: number) {
    const response = await this.prisma.building.findUnique({
      where: { id },
      include: { complex: true, properties: { orderBy: { number: 'asc' } } },
    });
    return response;
  }

  async getBuildingCardData(id: number) {
    const properties = await this.propertiesService.getPropCounts(+id);
    const sales = await this.salesService.getSalesSum({
      propertyType: 'LIVING',
      buildingIds: [id],
    });
    return { properties, sales };
  }

  async uploadImage(id: string, img?: FileUpload) {
    const fileName = img ? await this.fileService.createFile(img) : null;
    const response = await this.prisma.building.update({
      where: { id: +id },
      data: { img: fileName },
    });
    return response;
  }

  async getDynamicsByComplex(complexId: string) {
    const data = await this.prisma.building.findMany({
      where: { complexId: +complexId },
      include: {
        complex: true,
        sales: { orderBy: [{ year: 'asc' }, { month: 'asc' }] },
      },
    });
    return data;
  }
}
