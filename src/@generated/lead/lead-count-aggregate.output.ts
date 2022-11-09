import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class LeadCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    uniq_id!: number;

    @Field(() => Int, {nullable:false})
    host!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    phone!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    form_name!: number;

    @Field(() => Int, {nullable:false})
    form_id!: number;

    @Field(() => Int, {nullable:false})
    tran_id!: number;

    @Field(() => Int, {nullable:false})
    utm_source!: number;

    @Field(() => Int, {nullable:false})
    utm_medium!: number;

    @Field(() => Int, {nullable:false})
    utm_campaign!: number;

    @Field(() => Int, {nullable:false})
    utm_term!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
