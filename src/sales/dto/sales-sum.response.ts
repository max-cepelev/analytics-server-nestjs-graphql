import { Field, Int, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class SalesSumResponse {
  @Field(() => Float, { nullable: true })
  area: number;

  @Field(() => Int, { nullable: true })
  amount: number;

  @Field(() => Float, { nullable: true })
  sum: number;
}
