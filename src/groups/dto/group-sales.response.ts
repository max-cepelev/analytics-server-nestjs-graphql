import { Field, ObjectType, Int, Float } from '@nestjs/graphql';
import { SalesSumResponse } from 'src/sales/dto/sales-sum.response';

@ObjectType()
export class GroupWithSalesResponse {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  date: string;

  @Field(() => SalesSumResponse)
  sales: SalesSumResponse;
}
