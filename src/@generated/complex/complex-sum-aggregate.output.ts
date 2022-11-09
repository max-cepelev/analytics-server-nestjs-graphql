import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComplexSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    domRfId?: number;

    @Field(() => Int, {nullable:true})
    domClickId?: number;

    @Field(() => Int, {nullable:true})
    groupId?: number;

    @Field(() => Int, {nullable:true})
    cityId?: number;

    @Field(() => Int, {nullable:true})
    districtId?: number;
}
