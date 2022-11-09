import { Injectable } from '@nestjs/common';
import uniqid from 'uniqid';
import getObjectKeysToLowercaseKeys from 'src/utils/getObjectKeysToLowercase';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class LeadsService {
  constructor(private prisma: PrismaService) {}

  async create(body: any, referer: string) {
    const hostName = referer ? new URL(referer).host : null;
    const data: any = getObjectKeysToLowercaseKeys(body);
    const dto: Prisma.LeadUncheckedCreateInput = {
      uniq_id: uniqid(),
      host: hostName,
      name: data.name || null,
      phone: data.phone || null,
      email: data.email || null,
      form_name: data.form_name || null,
      form_id: data.form_id || null,
      tran_id: data.tran_id || null,
      utm_source: data.utm_source || null,
      utm_medium: data.utm_medium || null,
      utm_campaign: data.utm_campaign || null,
      utm_term: data.utm_term || null,
    };
    const lead = await this.prisma.lead.create({ data: dto });
    return lead;
  }

  async findAll() {
    const leads = await this.prisma.lead.findMany();
    return leads;
  }
}
