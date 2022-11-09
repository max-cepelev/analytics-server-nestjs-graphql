import { Injectable } from '@nestjs/common';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { ComplexesService } from 'src/complexes/complexes.service';
import { IApiData } from './entities/domclick-complex-api.entity';
import { OffersService } from 'src/offers/offers.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ParsingService {
  constructor(
    private complexesService: ComplexesService,
    private offersService: OffersService,
  ) {}

  async getDomclickData(complexId: number) {
    const url = `https://complex-api.domclick.ru/v4/layouts/?complex_id=${complexId}&limit=1000`;
    const browser = await puppeteer.use(StealthPlugin()).launch({
      headless: true,
      // args: ['--no-sandbox', '--disable-dev-shm-usage'],
    });
    const page = await browser.newPage();
    await page.waitForTimeout(1000);
    await page.goto(url, { waitUntil: 'load' });
    await page.content();
    const data: IApiData = await page.evaluate(() => {
      return JSON.parse(document.querySelector('body').innerText);
    });
    browser.close();
    const items: Prisma.OfferUncheckedCreateInput[] = [];
    if (data) {
      for (const layout of data.items) {
        const data = layout.offers.reduce((all, offer) => {
          offer &&
            all.push({
              id: offer.id,
              floor: offer.object_info.floor,
              floors: layout.building.floors,
              price: offer.price_info.square_price,
              address: layout.address.name,
              buildingId: layout.building.id,
              building: layout.building.name,
              developer: layout.building.developers[0].name,
              developerId: layout.building.developers[0].id,
              complex: layout.complex.name,
              complexId: layout.complex_id,
              area: layout.object_info.area,
              rooms: layout.object_info.rooms,
              image: `https://img.dmclk.ru${layout.photo[0]}`,
            });
          return all;
        }, []);
        data.length > 0 && items.push(...data);
      }
    }
    return items;
  }

  async startScrapping() {
    await this.offersService.removeAll();
    const complexes = await this.complexesService.findAll();
    for (const complex of complexes) {
      if (complex.domClickId) {
        const data = await this.getDomclickData(complex.domClickId);
        await this.offersService.upsertMany(data);
      }
    }
    return { message: 'Процесс завершен' };
  }
}
