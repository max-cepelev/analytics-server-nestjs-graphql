import { Int, Field, ObjectType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

@ObjectType()
export class TokenPayload {
  @Field(() => Int, { nullable: false })
  id: number;

  @Field(() => String, { nullable: false })
  email: string;

  @Field(() => Boolean, { nullable: false })
  activated: boolean;

  @Field(() => String, { nullable: false })
  role: Role;
}
