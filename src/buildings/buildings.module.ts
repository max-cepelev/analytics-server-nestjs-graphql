import { Module } from '@nestjs/common';
import { BuildingsService } from './buildings.service';
import { BuildingsResolver } from './buildings.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { FilesModule } from 'src/files/files.module';
import { SalesModule } from 'src/sales/sales.module';
import { PropertiesModule } from 'src/properties/properties.module';

@Module({
  imports: [PrismaModule, FilesModule, SalesModule, PropertiesModule],
  providers: [BuildingsResolver, BuildingsService],
})
export class BuildingsModule {}
