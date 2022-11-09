import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComplexMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    shortName?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    info?: string;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
