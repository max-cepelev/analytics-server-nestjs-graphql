import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SaleCountOrderByAggregateInput } from './sale-count-order-by-aggregate.input';
import { SaleAvgOrderByAggregateInput } from './sale-avg-order-by-aggregate.input';
import { SaleMaxOrderByAggregateInput } from './sale-max-order-by-aggregate.input';
import { SaleMinOrderByAggregateInput } from './sale-min-order-by-aggregate.input';
import { SaleSumOrderByAggregateInput } from './sale-sum-order-by-aggregate.input';

@InputType()
export class SaleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    month?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    amount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    area?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sum?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buildingId?: keyof typeof SortOrder;

    @Field(() => SaleCountOrderByAggregateInput, {nullable:true})
    _count?: SaleCountOrderByAggregateInput;

    @Field(() => SaleAvgOrderByAggregateInput, {nullable:true})
    _avg?: SaleAvgOrderByAggregateInput;

    @Field(() => SaleMaxOrderByAggregateInput, {nullable:true})
    _max?: SaleMaxOrderByAggregateInput;

    @Field(() => SaleMinOrderByAggregateInput, {nullable:true})
    _min?: SaleMinOrderByAggregateInput;

    @Field(() => SaleSumOrderByAggregateInput, {nullable:true})
    _sum?: SaleSumOrderByAggregateInput;
}
