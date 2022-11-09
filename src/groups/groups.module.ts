import { Module } from '@nestjs/common';
import { GroupsService } from './groups.service';
import { GroupsResolver } from './groups.resolver';
import { PrismaModule } from 'prisma/prisma.module';
import { SalesModule } from 'src/sales/sales.module';
import { PropertiesModule } from 'src/properties/properties.module';

@Module({
  imports: [PrismaModule, SalesModule, PropertiesModule],
  providers: [GroupsResolver, GroupsService],
})
export class GroupsModule {}
