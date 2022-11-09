import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { LeadCountAggregate } from './lead-count-aggregate.output';
import { LeadAvgAggregate } from './lead-avg-aggregate.output';
import { LeadSumAggregate } from './lead-sum-aggregate.output';
import { LeadMinAggregate } from './lead-min-aggregate.output';
import { LeadMaxAggregate } from './lead-max-aggregate.output';

@ObjectType()
export class LeadGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    uniq_id?: string;

    @Field(() => String, {nullable:true})
    host?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    form_name?: string;

    @Field(() => String, {nullable:true})
    form_id?: string;

    @Field(() => String, {nullable:true})
    tran_id?: string;

    @Field(() => String, {nullable:true})
    utm_source?: string;

    @Field(() => String, {nullable:true})
    utm_medium?: string;

    @Field(() => String, {nullable:true})
    utm_campaign?: string;

    @Field(() => String, {nullable:true})
    utm_term?: string;

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
