import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SaleCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    month!: number;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Int, {nullable:false})
    area!: number;

    @Field(() => Int, {nullable:false})
    sum!: number;

    @Field(() => Int, {nullable:false})
    propertyType!: number;

    @Field(() => Int, {nullable:false})
    buildingId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
