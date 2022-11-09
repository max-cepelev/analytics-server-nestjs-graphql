import { Module } from '@nestjs/common';
import { ComplexesService } from './complexes.service';
import { ComplexesResolver } from './complexes.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ComplexesResolver, ComplexesService],
  exports: [ComplexesService],
})
export class ComplexesModule {}
