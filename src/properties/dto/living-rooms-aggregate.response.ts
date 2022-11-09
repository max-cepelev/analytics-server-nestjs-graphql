import { Field, ObjectType } from '@nestjs/graphql';
import { AggregateProperty } from 'src/@generated';

@ObjectType()
export class LivingPropsAggregateResponse {
  @Field(() => AggregateProperty)
  oneRoom: AggregateProperty;

  @Field(() => AggregateProperty)
  twoRoom: AggregateProperty;

  @Field(() => AggregateProperty)
  threeRoom: AggregateProperty;

  @Field(() => AggregateProperty)
  fourRoom: AggregateProperty;
}
