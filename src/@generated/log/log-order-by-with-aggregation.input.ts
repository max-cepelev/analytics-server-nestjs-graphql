import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { LogCountOrderByAggregateInput } from './log-count-order-by-aggregate.input';
import { LogAvgOrderByAggregateInput } from './log-avg-order-by-aggregate.input';
import { LogMaxOrderByAggregateInput } from './log-max-order-by-aggregate.input';
import { LogMinOrderByAggregateInput } from './log-min-order-by-aggregate.input';
import { LogSumOrderByAggregateInput } from './log-sum-order-by-aggregate.input';

@InputType()
export class LogOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    operation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => LogCountOrderByAggregateInput, {nullable:true})
    _count?: LogCountOrderByAggregateInput;

    @Field(() => LogAvgOrderByAggregateInput, {nullable:true})
    _avg?: LogAvgOrderByAggregateInput;

    @Field(() => LogMaxOrderByAggregateInput, {nullable:true})
    _max?: LogMaxOrderByAggregateInput;

    @Field(() => LogMinOrderByAggregateInput, {nullable:true})
    _min?: LogMinOrderByAggregateInput;

    @Field(() => LogSumOrderByAggregateInput, {nullable:true})
    _sum?: LogSumOrderByAggregateInput;
}
