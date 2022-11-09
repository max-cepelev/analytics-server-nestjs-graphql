import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';

@Module({
  providers: [LeadsService],
  controllers: [LeadsController],
  imports: [PrismaModule],
})
export class LeadsModule {}
