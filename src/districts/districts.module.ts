import { Module } from '@nestjs/common';
import { DistrictsService } from './districts.service';
import { DistrictsResolver } from './districts.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [DistrictsResolver, DistrictsService],
})
export class DistrictsModule {}
