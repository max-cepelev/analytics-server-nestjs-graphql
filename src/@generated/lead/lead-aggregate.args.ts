import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadWhereInput } from './lead-where.input';
import { Type } from 'class-transformer';
import { LeadOrderByWithRelationInput } from './lead-order-by-with-relation.input';
import { LeadWhereUniqueInput } from './lead-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LeadCountAggregateInput } from './lead-count-aggregate.input';
import { LeadAvgAggregateInput } from './lead-avg-aggregate.input';
import { LeadSumAggregateInput } from './lead-sum-aggregate.input';
import { LeadMinAggregateInput } from './lead-min-aggregate.input';
import { LeadMaxAggregateInput } from './lead-max-aggregate.input';

@ArgsType()
export class LeadAggregateArgs {

    @Field(() => LeadWhereInput, {nullable:true})
    @Type(() => LeadWhereInput)
    where?: LeadWhereInput;

    @Field(() => [LeadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LeadOrderByWithRelationInput>;

    @Field(() => LeadWhereUniqueInput, {nullable:true})
    cursor?: LeadWhereUniqueInput;

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
