import {
  Body,
  Controller,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Post,
  Res,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { LeadsService } from './leads.service';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  async create(
    @Headers('Referer') referer: string,
    @Body() body: any,
    @Res({ passthrough: true }) res: Response,
  ) {
    try {
      await this.leadsService.create(body, referer);
      res.status(200).end();
    } catch (err) {
      console.log(err.message);
      throw new HttpException(
        'Ошибка создания лида',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.leadsService.findAll();
  }
}
