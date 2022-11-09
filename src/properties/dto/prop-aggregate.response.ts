import { Field, Int, ObjectType, Float } from '@nestjs/graphql';
import { AggregateProperty } from 'src/@generated';

@ObjectType()
export class PropAggregateResponse {
  @Field(() => AggregateProperty)
  living: AggregateProperty;

  @Field(() => AggregateProperty)
  commercial: AggregateProperty;

  @Field(() => AggregateProperty)
  parking: AggregateProperty;
}
