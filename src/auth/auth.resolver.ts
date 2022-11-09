import { UseGuards } from '@nestjs/common';
import { Resolver, Mutation, Args, Context } from '@nestjs/graphql';
import { User } from 'src/@generated';
import { AuthService } from './auth.service';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { RegistrationInput } from './dto/registration.input';
import { GqlAuthGuard } from './guards/gql-auth.guard';

const secure = false;
const maxAge = 30 * 24 * 60 * 60 * 1000;
const sameSite = 'none';
const path = '/';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => User)
  async signup(@Args('input') input: RegistrationInput) {
    const result = await this.authService.registration(input);

    return result;
  }

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context: any,
  ): Promise<LoginResponse> {
    const result = await this.authService.gqlLogin(context.user);
    context.res.cookie('refreshToken', result.refreshToken, {
      sameSite,
      httpOnly: true,
      maxAge,
      secure,
      path,
    });
    return result;
  }

  @Mutation(() => LoginResponse)
  async refresh(@Context() context: any) {
    const refreshToken = context.req.cookies['refreshToken'];
    const result = await this.authService.refresh(refreshToken);
    context.res.cookie('refreshToken', result.refreshToken, {
      sameSite,
      httpOnly: true,
      maxAge,
      secure,
      path,
    });
    return result;
  }
}
