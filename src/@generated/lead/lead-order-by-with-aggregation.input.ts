import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LeadCountOrderByAggregateInput } from './lead-count-order-by-aggregate.input';
import { LeadAvgOrderByAggregateInput } from './lead-avg-order-by-aggregate.input';
import { LeadMaxOrderByAggregateInput } from './lead-max-order-by-aggregate.input';
import { LeadMinOrderByAggregateInput } from './lead-min-order-by-aggregate.input';
import { LeadSumOrderByAggregateInput } from './lead-sum-order-by-aggregate.input';

@InputType()
export class LeadOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uniq_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    host?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tran_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utm_source?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utm_medium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utm_campaign?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utm_term?: keyof typeof SortOrder;

    @Field(() => LeadCountOrderByAggregateInput, {nullable:true})
    _count?: LeadCountOrderByAggregateInput;

    @Field(() => LeadAvgOrderByAggregateInput, {nullable:true})
    _avg?: LeadAvgOrderByAggregateInput;

    @Field(() => LeadMaxOrderByAggregateInput, {nullable:true})
    _max?: LeadMaxOrderByAggregateInput;

    @Field(() => LeadMinOrderByAggregateInput, {nullable:true})
    _min?: LeadMinOrderByAggregateInput;

    @Field(() => LeadSumOrderByAggregateInput, {nullable:true})
    _sum?: LeadSumOrderByAggregateInput;
}
