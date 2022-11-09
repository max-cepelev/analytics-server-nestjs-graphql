import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { LeadCountAggregate } from './lead-count-aggregate.output';
import { LeadAvgAggregate } from './lead-avg-aggregate.output';
import { LeadSumAggregate } from './lead-sum-aggregate.output';
import { LeadMinAggregate } from './lead-min-aggregate.output';
import { LeadMaxAggregate } from './lead-max-aggregate.output';

@ObjectType()
export class AggregateLead {

    @Field(() => LeadCountAggregate, {nullable:true})
    _count?: LeadCountAggregate;

    @Field(() => LeadAvgAggregate, {nullable:true})
    _avg?: LeadAvgAggregate;

    @Field(() => LeadSumAggregate, {nullable:true})
    _sum?: LeadSumAggregate;

    @Field(() => LeadMinAggregate, {nullable:true})
    _min?: LeadMinAggregate;

    @Field(() => LeadMaxAggregate, {nullable:true})
    _max?: LeadMaxAggregate;
}
