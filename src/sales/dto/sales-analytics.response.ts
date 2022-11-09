import { Field, Int, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class SalesAnalyticsResponse {
  @Field(() => String, { nullable: false })
  date: number;

  @Field(() => Float, { nullable: true })
  area: number;

  @Field(() => Int, { nullable: true })
  amount: number;

  @Field(() => Float, { nullable: true })
  sum: number;
}
