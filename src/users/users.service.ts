import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async create(data: Prisma.UserUncheckedCreateInput) {
    const user = await this.prismaService.user.create({
      data,
      select: {
        id: true,
        name: true,
        email: true,
        phone: true,
        role: true,
        activated: true,
      },
    });
    return user;
  }

  async findAll() {
    const users = await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        activated: true,
        role: true,
      },
    });
    return users;
  }

  async findOne(input: Prisma.UserWhereUniqueInput) {
    const user = await this.prismaService.user.findUnique({
      where: input,
    });
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });
    return user;
  }

  async findByActivationLink(activationLink: string) {
    const user = await this.prismaService.user.findFirst({
      where: { activationLink },
      select: { id: true, activated: true },
    });
    return user;
  }

  async update(id: number, data: Prisma.UserUncheckedUpdateInput) {
    const user = await this.prismaService.user.update({
      where: { id },
      data,
    });
    return user;
  }

  async remove(id: number) {
    const response = await this.prismaService.user.delete({ where: { id } });
    return response;
  }

  // administrator activation
  async administratorActivation(id: number) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { activated: true },
    });
    return user;
  }

  // administrator deactivation
  async administratorDeactivation(id: number) {
    const user = await this.prismaService.user.update({
      where: { id },
      data: { activated: false },
    });
    return user;
  }
}
