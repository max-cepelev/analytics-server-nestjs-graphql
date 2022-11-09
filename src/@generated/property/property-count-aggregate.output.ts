import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class PropertyCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    number!: number;

    @Field(() => Int, {nullable:false})
    floor!: number;

    @Field(() => Int, {nullable:false})
    entrance!: number;

    @Field(() => Int, {nullable:false})
    totalArea!: number;

    @Field(() => Int, {nullable:false})
    livingArea!: number;

    @Field(() => Int, {nullable:false})
    rooms!: number;

    @Field(() => Int, {nullable:false})
    wallHeight!: number;

    @Field(() => Int, {nullable:false})
    propertyType!: number;

    @Field(() => Int, {nullable:false})
    buildingId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
