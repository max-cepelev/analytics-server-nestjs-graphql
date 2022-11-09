import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { PropertyCountOrderByAggregateInput } from './property-count-order-by-aggregate.input';
import { PropertyAvgOrderByAggregateInput } from './property-avg-order-by-aggregate.input';
import { PropertyMaxOrderByAggregateInput } from './property-max-order-by-aggregate.input';
import { PropertyMinOrderByAggregateInput } from './property-min-order-by-aggregate.input';
import { PropertySumOrderByAggregateInput } from './property-sum-order-by-aggregate.input';

@InputType()
export class PropertyOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    floor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entrance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalArea?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    livingArea?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rooms?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wallHeight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyType?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buildingId?: keyof typeof SortOrder;

    @Field(() => PropertyCountOrderByAggregateInput, {nullable:true})
    _count?: PropertyCountOrderByAggregateInput;

    @Field(() => PropertyAvgOrderByAggregateInput, {nullable:true})
    _avg?: PropertyAvgOrderByAggregateInput;

    @Field(() => PropertyMaxOrderByAggregateInput, {nullable:true})
    _max?: PropertyMaxOrderByAggregateInput;

    @Field(() => PropertyMinOrderByAggregateInput, {nullable:true})
    _min?: PropertyMinOrderByAggregateInput;

    @Field(() => PropertySumOrderByAggregateInput, {nullable:true})
    _sum?: PropertySumOrderByAggregateInput;
}
