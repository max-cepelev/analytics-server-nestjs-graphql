import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { TokenPayload } from './dto/token-payload';

@Injectable()
export class TokensService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  generateTokens(user: TokenPayload) {
    const payload: TokenPayload = {
      id: user.id,
      email: user.email,
      activated: user.activated,
      role: user.role,
    };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.ACCESS_SECRET,
      expiresIn: '30m',
    });
    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_SECRET,
      expiresIn: '30d',
    });
    return {
      accessToken,
      refreshToken,
    };
  }

  async saveToken(userId: number, refreshToken: string) {
    const tokenData = userId
      ? await this.prisma.token.findUnique({
          where: { userId },
        })
      : null;
    if (tokenData) {
      await this.prisma.token.update({
        where: { userId },
        data: { refreshToken },
      });
    } else {
      await this.prisma.token.create({ data: { userId, refreshToken } });
    }
  }

  async removeToken(refreshToken: string) {
    if (refreshToken) {
      const token = await this.prisma.token.findFirst({
        where: { refreshToken },
      });
      if (token) {
        await this.prisma.token.delete({
          where: { id: token.id },
        });
      }
    }
  }

  async findToken(refreshToken: string) {
    if (refreshToken) {
      const tokenData = await this.prisma.token.findFirst({
        where: { refreshToken },
      });
      return tokenData;
    }
  }

  validateAccessToken(accessToken: string) {
    try {
      const userData: TokenPayload = this.jwtService.verify(accessToken, {
        secret: process.env.ACCESS_SECRET,
      });
      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(refreshToken: string) {
    try {
      const userData: TokenPayload = this.jwtService.verify(refreshToken, {
        secret: process.env.REFRESH_SECRET,
      });
      return userData;
    } catch (e) {
      return null;
    }
  }
}
