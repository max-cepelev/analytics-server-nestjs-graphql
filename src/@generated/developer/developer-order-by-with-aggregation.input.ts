import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { DeveloperCountOrderByAggregateInput } from './developer-count-order-by-aggregate.input';
import { DeveloperAvgOrderByAggregateInput } from './developer-avg-order-by-aggregate.input';
import { DeveloperMaxOrderByAggregateInput } from './developer-max-order-by-aggregate.input';
import { DeveloperMinOrderByAggregateInput } from './developer-min-order-by-aggregate.input';
import { DeveloperSumOrderByAggregateInput } from './developer-sum-order-by-aggregate.input';

@InputType()
export class DeveloperOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    legalAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actualAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kpp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ogrn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    manager?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    info?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => DeveloperCountOrderByAggregateInput, {nullable:true})
    _count?: DeveloperCountOrderByAggregateInput;

    @Field(() => DeveloperAvgOrderByAggregateInput, {nullable:true})
    _avg?: DeveloperAvgOrderByAggregateInput;

    @Field(() => DeveloperMaxOrderByAggregateInput, {nullable:true})
    _max?: DeveloperMaxOrderByAggregateInput;

    @Field(() => DeveloperMinOrderByAggregateInput, {nullable:true})
    _min?: DeveloperMinOrderByAggregateInput;

    @Field(() => DeveloperSumOrderByAggregateInput, {nullable:true})
    _sum?: DeveloperSumOrderByAggregateInput;
}
