import { Module } from '@nestjs/common';
import { PrismaModule } from 'prisma/prisma.module';
import { CitiesResolver } from './cities.resolver';
import { CitiesService } from './cities.service';

@Module({
  imports: [PrismaModule],
  providers: [CitiesResolver, CitiesService],
})
export class CitiesModule {}
