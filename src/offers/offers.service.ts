import { Injectable } from '@nestjs/common';
import { Offer, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { getNumArray } from 'src/utils/numberArrayGenerator';

const allParams = getNumArray(25, 105, 5);

@Injectable()
export class OffersService {
  constructor(private prisma: PrismaService) {}

  async getOffersCountsForBuildings(buildings: { id: number; name: string }[]) {
    const data = [];
    for (const building of buildings) {
      if (building.id) {
        const buildingId = building.id;
        const offer = await this.prisma.offer.findFirst({
          where: { buildingId },
        });
        const oneRoomOffers = await this.prisma.offer.count({
          where: { buildingId, rooms: { in: [0, 1] } },
        });
        const twoRoomOffers = await this.prisma.offer.count({
          where: { buildingId, rooms: 2 },
        });
        const threeRoomOffers = await this.prisma.offer.count({
          where: { buildingId, rooms: 3 },
        });
        const fourRoomOffers = await this.prisma.offer.count({
          where: { buildingId, rooms: 4 },
        });
        const actualDate = await this.prisma.offer.aggregate({
          _max: {
            updatedAt: true,
          },
        });
        data.push({
          id: buildingId,
          name: building.name,
          complex: offer?.complex || '',
          building: offer?.building || '',
          developer: offer?.developer || '',
          address: offer?.address || 'нет данных',
          floors: offer?.floors || 'нет данных',
          image: offer?.image || null,
          oneRoomOffers,
          twoRoomOffers,
          threeRoomOffers,
          fourRoomOffers,
          actualDate: actualDate._max.updatedAt,
          totalOffers:
            oneRoomOffers + twoRoomOffers + threeRoomOffers + fourRoomOffers,
        });
      }
    }
    return data;
  }

  async getAnalysisData(buildings: { id: number; name: string }[]) {
    const analysisData: any[] = [];

    for (const param of allParams) {
      let name: string;
      let area: Prisma.FloatNullableFilter | number;
      if (param === 0) {
        name = `0 - ${allParams[1]}`;
        area = { lt: allParams[1] };
      } else if (param === allParams[allParams.length - 1]) {
        name = `${param}+`;
        area = { gt: allParams[allParams.length - 1] };
      } else {
        name = `${param} - ${param + 5}`;
        area = {
          in: [param, param + 1, param + 2, param + 3, param + 4, param + 5],
        };
      }

      let res = { name };

      for (const building of buildings) {
        const buildingId = building.id;
        const resultCount = await this.prisma.offer.count({
          where: {
            buildingId,
            area,
          },
        });
        let count1 = 0;
        let count2 = 0;
        let count3 = 0;
        let count4 = 0;
        if (resultCount > 0) {
          count1 = await this.prisma.offer.count({
            where: { buildingId, area, rooms: { in: [0, 1] } },
          });
          count2 = await this.prisma.offer.count({
            where: { buildingId, area, rooms: 2 },
          });
          count3 = await this.prisma.offer.count({
            where: { buildingId, area, rooms: 3 },
          });
          count4 = await this.prisma.offer.count({
            where: { buildingId, area, rooms: 4 },
          });
        }
        const result =
          resultCount > 0
            ? await this.prisma.offer.aggregate({
                where: {
                  buildingId,
                  area,
                },
                _max: {
                  price: true,
                  floor: true,
                  floors: true,
                },
                _min: {
                  price: true,
                  floor: true,
                },
                _avg: {
                  price: true,
                },
              })
            : null;
        res = {
          ...res,
          [buildingId]: {
            avgPrice: result?._avg.price || null,
            floors: result?._max.floors || null,
            maxFloor: result?._max.floor || null,
            maxPrice: result?._max.price || null,
            minFloor: result?._min.floor || null,
            minPrice: result?._min.price || null,
            count: resultCount,
            count1,
            count2,
            count3,
            count4,
          },
        };
      }
      analysisData.push(res);
    }
    const buildingsData = await this.getOffersCountsForBuildings(buildings);

    return { analysisData, buildings: buildingsData };
  }

  async getOfferAnalysisByBuildings(buildingIds: string[]) {
    const buildings = buildingIds.map((item) => +item);
    const analysisData: any[] = [];

    for (const param of allParams) {
      let name: string;
      let area: Prisma.FloatNullableFilter | number;
      if (param === 0) {
        name = `0 - ${allParams[1]}`;
        area = { lt: allParams[1] };
      } else if (param === allParams[allParams.length - 1]) {
        name = `${param}+`;
        area = { gt: allParams[allParams.length - 1] };
      } else {
        name = `${param} - ${param + 5}`;
        area = {
          in: [param, param + 1, param + 2, param + 3, param + 4, param + 5],
        };
      }

      const where: Prisma.OfferWhereInput = {
        buildingId: { in: buildings },
        area,
      };

      const data = await this.prisma.offer.aggregate({
        where,
        _max: {
          price: true,
          floor: true,
        },
        _min: {
          price: true,
          floor: true,
        },
        _avg: {
          price: true,
          area: true,
        },
        _count: {
          id: true,
        },
      });
      const count1 = await this.prisma.offer.count({
        where: {
          ...where,
          rooms: { in: [0, 1] },
        },
      });
      const count2 = await this.prisma.offer.count({
        where: { ...where, rooms: 2 },
      });
      const count3 = await this.prisma.offer.count({
        where: { ...where, rooms: 3 },
      });
      const count4 = await this.prisma.offer.count({
        where: { ...where, rooms: 4 },
      });

      analysisData.push({
        name,
        count1,
        count2,
        count3,
        count4,
        avgArea: data._avg.area,
        avgPrice: data._avg.price,
        count: data._count.id,
        maxFloor: data._max.floor,
        maxPrice: data._max.price,
        minFloor: data._min.floor,
        minPrice: data._min.price,
      });
    }

    return analysisData;
  }

  async upsertMany(data: Prisma.OfferUncheckedCreateInput[]) {
    const response: Offer[] = [];
    for await (const sale of data) {
      const data = await this.prisma.offer.upsert({
        where: { id: sale.id },
        create: sale,
        update: sale,
      });
      data && response.push(data);
    }
    return response;
  }

  async create(data: Prisma.OfferUncheckedCreateInput) {
    const offer = await this.prisma.offer.create({ data });
    return offer;
  }

  async findAll() {
    const offers = await this.prisma.offer.findMany();
    return offers;
  }

  async findOne(id: number) {
    const offer = await this.prisma.offer.findUnique({ where: { id } });
    return offer;
  }

  async update(id: number, data: Prisma.OfferUpdateInput) {
    const offer = await this.prisma.offer.update({
      where: { id },
      data,
    });
    return offer;
  }

  async remove(id: number) {
    const response = await this.prisma.offer.delete({ where: { id } });
    return response;
  }

  async removeAll() {
    const response = await this.prisma.$queryRaw`TRUNCATE TABLE offers`;
    return response;
  }
}
