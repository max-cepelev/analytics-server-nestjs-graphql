import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  providers: [OffersService],
  controllers: [OffersController],
  imports: [PrismaModule],
  exports: [OffersService],
})
export class OffersModule {}
