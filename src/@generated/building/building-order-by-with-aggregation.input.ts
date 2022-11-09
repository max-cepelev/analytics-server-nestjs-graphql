import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BuildingCountOrderByAggregateInput } from './building-count-order-by-aggregate.input';
import { BuildingAvgOrderByAggregateInput } from './building-avg-order-by-aggregate.input';
import { BuildingMaxOrderByAggregateInput } from './building-max-order-by-aggregate.input';
import { BuildingMinOrderByAggregateInput } from './building-min-order-by-aggregate.input';
import { BuildingSumOrderByAggregateInput } from './building-sum-order-by-aggregate.input';

@InputType()
export class BuildingOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completionDate?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    completed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    latitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    longitude?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyClass?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    decorType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wallMaterial?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    img?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domRfId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domClickId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    districtId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    developerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complexId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => BuildingCountOrderByAggregateInput, {nullable:true})
    _count?: BuildingCountOrderByAggregateInput;

    @Field(() => BuildingAvgOrderByAggregateInput, {nullable:true})
    _avg?: BuildingAvgOrderByAggregateInput;

    @Field(() => BuildingMaxOrderByAggregateInput, {nullable:true})
    _max?: BuildingMaxOrderByAggregateInput;

    @Field(() => BuildingMinOrderByAggregateInput, {nullable:true})
    _min?: BuildingMinOrderByAggregateInput;

    @Field(() => BuildingSumOrderByAggregateInput, {nullable:true})
    _sum?: BuildingSumOrderByAggregateInput;
}
