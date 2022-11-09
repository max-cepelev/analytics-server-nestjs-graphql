import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ComplexCountOrderByAggregateInput } from './complex-count-order-by-aggregate.input';
import { ComplexAvgOrderByAggregateInput } from './complex-avg-order-by-aggregate.input';
import { ComplexMaxOrderByAggregateInput } from './complex-max-order-by-aggregate.input';
import { ComplexMinOrderByAggregateInput } from './complex-min-order-by-aggregate.input';
import { ComplexSumOrderByAggregateInput } from './complex-sum-order-by-aggregate.input';

@InputType()
export class ComplexOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shortName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    info?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domRfId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domClickId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    districtId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => ComplexCountOrderByAggregateInput, {nullable:true})
    _count?: ComplexCountOrderByAggregateInput;

    @Field(() => ComplexAvgOrderByAggregateInput, {nullable:true})
    _avg?: ComplexAvgOrderByAggregateInput;

    @Field(() => ComplexMaxOrderByAggregateInput, {nullable:true})
    _max?: ComplexMaxOrderByAggregateInput;

    @Field(() => ComplexMinOrderByAggregateInput, {nullable:true})
    _min?: ComplexMinOrderByAggregateInput;

    @Field(() => ComplexSumOrderByAggregateInput, {nullable:true})
    _sum?: ComplexSumOrderByAggregateInput;
}
