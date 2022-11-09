import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PropertySumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    floor?: number;

    @Field(() => Int, {nullable:true})
    entrance?: number;

    @Field(() => Float, {nullable:true})
    totalArea?: number;

    @Field(() => Float, {nullable:true})
    livingArea?: number;

    @Field(() => Int, {nullable:true})
    rooms?: number;

    @Field(() => Float, {nullable:true})
    wallHeight?: number;

    @Field(() => Int, {nullable:true})
    buildingId?: number;
}
