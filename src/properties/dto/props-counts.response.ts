import { Field, Int, ObjectType, Float } from '@nestjs/graphql';

@ObjectType()
export class PropCountsResponse {
  @Field(() => Int)
  living: number;

  @Field(() => Int)
  commercial: number;

  @Field(() => Int)
  parking: number;
}
