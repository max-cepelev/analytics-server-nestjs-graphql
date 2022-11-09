import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { RegistrationInput } from './dto/registration.input';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { User } from '@prisma/client';
import { LoginResponse } from './dto/login-response';

const secure = true;
const maxAge = 30 * 24 * 60 * 60 * 1000;
const sameSite = 'none';
const path = '/';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registration')
  async registration(
    @Body() dto: RegistrationInput,
    @Res({ passthrough: true }) response: Response,
  ) {
    return this.authService.registration(dto).then((res) => {
      response.cookie('refreshToken', res.refreshToken, {
        sameSite,
        httpOnly: true,
        maxAge,
        secure,
        path,
      });
      return { user: res.user, token: res.accessToken };
    });
  }

  @Get('activate/:link')
  activate(@Param('link') link: string) {
    return this.authService.activate(link);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Req() req: { user: User },
    @Res({ passthrough: true }) response: Response,
  ): Promise<LoginResponse> {
    return this.authService.login(req.user).then((res) => {
      response.cookie('refreshToken', res.refreshToken, {
        sameSite,
        httpOnly: true,
        maxAge,
        secure,
        path,
      });
      return res;
    });
  }

  @Get('refresh')
  async refresh(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const refreshToken = request.cookies['refreshToken'];
    return this.authService.refresh(refreshToken).then((res) => {
      response.cookie('refreshToken', res.refreshToken, {
        sameSite,
        httpOnly: true,
        maxAge,
        secure,
        path,
      });
      return res;
    });
  }

  @Post('logout')
  async logout(
    @Req() request: Request,
    @Res({ passthrough: true }) response: Response,
  ) {
    const refreshToken = request.cookies['refreshToken'];
    return this.authService.logout(refreshToken).then(() => {
      response.clearCookie('refreshToken');
    });
  }
}
