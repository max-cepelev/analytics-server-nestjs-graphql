import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadWhereInput } from './lead-where.input';
import { Type } from 'class-transformer';
import { LeadOrderByWithAggregationInput } from './lead-order-by-with-aggregation.input';
import { LeadScalarFieldEnum } from './lead-scalar-field.enum';
import { LeadScalarWhereWithAggregatesInput } from './lead-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { LeadCountAggregateInput } from './lead-count-aggregate.input';
import { LeadAvgAggregateInput } from './lead-avg-aggregate.input';
import { LeadSumAggregateInput } from './lead-sum-aggregate.input';
import { LeadMinAggregateInput } from './lead-min-aggregate.input';
import { LeadMaxAggregateInput } from './lead-max-aggregate.input';

@ArgsType()
export class LeadGroupByArgs {

    @Field(() => LeadWhereInput, {nullable:true})
    @Type(() => LeadWhereInput)
    where?: LeadWhereInput;

    @Field(() => [LeadOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<LeadOrderByWithAggregationInput>;

    @Field(() => [LeadScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof LeadScalarFieldEnum>;

    @Field(() => LeadScalarWhereWithAggregatesInput, {nullable:true})
    having?: LeadScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => LeadCountAggregateInput, {nullable:true})
    _count?: LeadCountAggregateInput;

    @Field(() => LeadAvgAggregateInput, {nullable:true})
    _avg?: LeadAvgAggregateInput;

    @Field(() => LeadSumAggregateInput, {nullable:true})
    _sum?: LeadSumAggregateInput;

    @Field(() => LeadMinAggregateInput, {nullable:true})
    _min?: LeadMinAggregateInput;

    @Field(() => LeadMaxAggregateInput, {nullable:true})
    _max?: LeadMaxAggregateInput;
}
