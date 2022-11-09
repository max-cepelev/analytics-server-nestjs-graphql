import { resolve } from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { RegionsModule } from './regions/regions.module';
import { UsersModule } from './users/users.module';
import { TokensModule } from './tokens/tokens.module';
import { AuthModule } from './auth/auth.module';
import { BuildingsModule } from './buildings/buildings.module';
import { PrismaService } from '../prisma/prisma.service';
import { DistrictsModule } from './districts/districts.module';
import { GroupsModule } from './groups/groups.module';
import { DevelopersModule } from './developers/developers.module';
import { ComplexesModule } from './complexes/complexes.module';
import { SalesModule } from './sales/sales.module';
import { PropertiesModule } from './properties/properties.module';
import { CitiesModule } from './cities/cities.module';
import { LeadsModule } from './leads/leads.module';
import { MacroModule } from './macro/macro.module';
import { OffersModule } from './offers/offers.module';
import { ParsingModule } from './parsing/parsing.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
      isGlobal: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      path: '/api',
      driver: ApolloDriver,
      context: ({ req, res }) => ({ req, res, session: req.session }),
    }),
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    CitiesModule,
    RegionsModule,
    UsersModule,
    TokensModule,
    AuthModule,
    BuildingsModule,
    DistrictsModule,
    GroupsModule,
    DevelopersModule,
    ComplexesModule,
    SalesModule,
    PropertiesModule,
    LeadsModule,
    MacroModule,
    OffersModule,
    // ParsingModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
