import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TokensService } from 'src/tokens/tokens.service';
import { UsersService } from 'src/users/users.service';
import * as argon2 from 'argon2';
import { v4 as uuidv4 } from 'uuid';
import { RegistrationInput } from './dto/registration.input';
import { LogsService } from 'src/logs/logs.service';
import { excludeFields } from 'src/utils/excludeFields';
import { User } from '@prisma/client';
import { LoginResponse } from './dto/login-response';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly tokensService: TokensService,
    private readonly logsService: LogsService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      const hash = user.password;
      const isPassEquals = await argon2.verify(hash, password);
      if (!isPassEquals) {
        throw new HttpException('Неверный пароль', HttpStatus.BAD_REQUEST);
      }
      return user;
    } else {
      throw new HttpException(
        `Пользователь с email ${email} не найден`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // registration user
  async registration(dto: RegistrationInput) {
    const { name, email, password, phone } = dto;
    const candidate = await this.usersService.findByEmail(email);
    if (candidate) {
      throw new HttpException(
        `Пользователь с адресом ${email} уже существует`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const hash = await argon2.hash(password);
    const activationLink = uuidv4();
    const user = await this.usersService.create({
      email,
      password: hash,
      name,
      phone,
      activationLink,
      role: 'USER',
      activated: false,
    });
    try {
      await this.logsService.create({
        operation: 'registration',
        userId: user.id,
      });
    } catch (error) {
      console.log(error);
    }
    // try {
    //   await this.mailerService.sendMail({
    //     to: 'dules@inbox.ru',
    //     subject: 'Зарегистрирован новый пользователь',
    //     text: '',
    //     html: `
    //             <div>
    //               <h1>Зарегистрирован новый пользователь, отправьте ссылку для активации</h1>
    //             </div>
    //           `,
    //   });
    // } catch (error) {
    //   console.log(error);
    // }

    const tokens = this.tokensService.generateTokens(user);
    await this.tokensService.saveToken(user.id, tokens.refreshToken);

    return {
      ...tokens,
      user,
    };
  }

  // activate user
  async activate(activationLink: string) {
    const user = await this.usersService.findByActivationLink(activationLink);
    if (user) {
      const { id, activated } = user;
      if (activated) {
        throw new HttpException(
          'Пользователь уже активирован',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        const user = await this.usersService.update(id, { activated: true });
        if (user) {
          try {
            await this.logsService.create({
              operation: 'activation',
              userId: id,
            });
          } catch (error) {
            console.log(error);
          }
          return { message: 'Пользователь активирован' };
        } else {
          throw new HttpException(
            'Ошибка активации',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }
      }
    } else {
      throw new HttpException(
        'Некорректная ссылка активации',
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  // login user
  async gqlLogin(context: User): Promise<LoginResponse> {
    const tokens = this.tokensService.generateTokens(context);
    await this.tokensService.saveToken(context.id, tokens.refreshToken);
    try {
      await this.logsService.create({
        operation: 'login',
        userId: context.id,
      });
    } catch (error) {
      console.log(error);
    }
    const userExclude = excludeFields(context, [
      'password',
      'activationLink',
      'createdAt',
      'updatedAt',
    ]);
    return {
      ...tokens,
      user: userExclude,
    };
  }

  // login user
  async login(context: User): Promise<LoginResponse> {
    const tokens = this.tokensService.generateTokens(context);
    await this.tokensService.saveToken(context.id, tokens.refreshToken);
    try {
      await this.logsService.create({
        operation: 'login',
        userId: context.id,
      });
    } catch (error) {
      console.log(error);
    }
    const userExclude = excludeFields(context, [
      'password',
      'activationLink',
      'createdAt',
      'updatedAt',
    ]);
    return {
      ...tokens,
      user: userExclude,
    };
  }

  // delete refresh token
  async logout(refreshToken: string) {
    const response = await this.tokensService.removeToken(refreshToken);
    return response;
  }

  // refresh token
  async refresh(refreshToken: string): Promise<LoginResponse> {
    if (!refreshToken) {
      throw new HttpException(
        `Пользователь не авторизован, токен не найден`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const userData = this.tokensService.validateRefreshToken(refreshToken);
    if (!userData) {
      throw new HttpException(
        `Пользователь не авторизован`,
        HttpStatus.UNAUTHORIZED,
      );
    }
    const tokens = this.tokensService.generateTokens(userData);
    await this.tokensService.saveToken(userData.id, tokens.refreshToken);
    try {
      await this.logsService.create({
        operation: 'check',
        userId: userData.id,
      });
    } catch (error) {
      console.log(error);
    }
    return {
      ...tokens,
      user: userData,
    };
  }
}
