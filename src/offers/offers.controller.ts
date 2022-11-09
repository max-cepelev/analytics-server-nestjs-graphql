import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { OffersService } from './offers.service';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}
  @UseGuards(JwtAuthGuard)
  @Post('bulk')
  bulkCreate(@Body() dto: Prisma.OfferUncheckedCreateInput[]) {
    return this.offersService.upsertMany(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.offersService.findAll();
  }

  @Post('analysis')
  @UseGuards(JwtAuthGuard)
  getAnalysisData(
    @Body()
    buildings: { id: number; name: string }[],
  ) {
    return this.offersService.getAnalysisData(buildings);
  }

  @Get('buildings-analysis')
  getOfferAnalysisByBuildings(@Query('buildingIds') buildingIds: string[]) {
    return this.offersService.getOfferAnalysisByBuildings(buildingIds);
  }
}
