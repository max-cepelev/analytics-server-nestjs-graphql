import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SalesSumResponse } from './sales-sum.response';

@ObjectType()
export class BuildingSalesSumResponse {
  @Field(() => SalesSumResponse)
  living: SalesSumResponse;

  @Field(() => SalesSumResponse)
  commercial: SalesSumResponse;

  @Field(() => SalesSumResponse)
  parking: SalesSumResponse;
}
