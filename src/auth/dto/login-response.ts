import { Field, ObjectType } from '@nestjs/graphql';
import { TokenPayload } from 'src/tokens/dto/token-payload';

@ObjectType()
export class LoginResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field(() => TokenPayload)
  user: TokenPayload;
}
