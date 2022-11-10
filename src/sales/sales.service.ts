import { Injectable } from '@nestjs/common';
import { Prisma, PropertyType, Sale } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { BuildingSalesSumResponse } from './dto/building-sales-sum.response';
import { SalesAnalyticsResponse } from './dto/sales-analytics.response';
import { SalesSumResponse } from './dto/sales-sum.response';

@Injectable()
export class SalesService {
  constructor(private prisma: PrismaService) {}

  async saveAll(data: Prisma.SaleUncheckedCreateInput[]) {
    const response: Sale[] = [];
    for await (const sale of data) {
      const res = Boolean(sale.id)
        ? await this.prisma.sale.update({
            where: { id: sale.id },
            data: sale,
          })
        : await this.prisma.sale.create({
            data: sale,
          });
      res && response.push(res);
    }
    return response;
  }

  async create(data: Prisma.SaleUncheckedCreateInput) {
    const sale = await this.prisma.sale.create({ data });
    return sale;
  }

  async findAll(buildingId?: number, propertyType?: PropertyType) {
    const keys: Prisma.SaleWhereInput[] = [];
    buildingId && keys.push({ buildingId });
    propertyType && keys.push({ propertyType });
    const sales = await this.prisma.sale.findMany({
      where: { AND: keys },
      orderBy: [{ year: 'asc' }, { month: 'asc' }],
    });
    return sales;
  }

  async findOne(id: number) {
    const sale = await this.prisma.sale.findUnique({
      where: { id },
      include: { building: true },
    });
    return sale;
  }

  async update(id: number, data: Prisma.SaleUncheckedUpdateInput) {
    const sale = await this.prisma.sale.update({
      where: { id },
      data,
    });
    return sale;
  }

  async remove(id: number) {
    const response = await this.prisma.sale.delete({ where: { id } });
    return response;
  }

  async getSalesAnalytics(
    propertyType: PropertyType,
  ): Promise<SalesAnalyticsResponse[]> {
    const lastRecord = await this.prisma.sale.findFirst({
      orderBy: [{ year: 'desc' }, { month: 'desc' }],
    });
    const now = lastRecord
      ? new Date(lastRecord.year, lastRecord.month - 1)
      : new Date();
    const startDate = new Date(now.getFullYear() - 1, now.getMonth());
    const endDate = new Date(now.getFullYear(), now.getMonth() + 1);

    const data = [];
    while (startDate < endDate) {
      const sales = await this.getSalesSum({ propertyType, date: startDate });
      data.push({
        date: startDate.toISOString(),
        ...sales,
      });
      startDate.setMonth(startDate.getMonth() + 1);
    }
    return data;
  }

  async getSalesSum({
    propertyType,
    buildingIds,
    date,
  }: {
    propertyType: PropertyType;
    buildingIds?: number[];
    date?: Date;
  }): Promise<SalesSumResponse> {
    const whereOptions: Prisma.SaleWhereInput[] = [];

    if (buildingIds) {
      whereOptions.push({ buildingId: { in: buildingIds } });
    }
    date &&
      whereOptions.push(
        { year: date.getFullYear() },
        { month: date.getMonth() + 1 },
      );
    const attributes: Prisma.SaleAggregateArgs = {
      _sum: {
        area: true,
        amount: true,
        sum: true,
      },
    };
    const data = await this.prisma.sale.aggregate({
      where: {
        AND: [{ propertyType }, ...whereOptions],
      },
      ...attributes,
    });

    return data._sum as SalesSumResponse;
  }

  async getSalesSumByBuildingId(
    buildingId: number,
  ): Promise<BuildingSalesSumResponse> {
    const living = await this.getSalesSum({
      buildingIds: [buildingId],
      propertyType: 'LIVING',
    });
    const commercial = await this.getSalesSum({
      buildingIds: [buildingId],
      propertyType: 'COMMERCIAL',
    });
    const parking = await this.getSalesSum({
      buildingIds: [buildingId],
      propertyType: 'PARKING',
    });
    return { living, commercial, parking };
  }
}
