import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SaleSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    month?: number;

    @Field(() => Int, {nullable:true})
    year?: number;

    @Field(() => Int, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    area?: number;

    @Field(() => Float, {nullable:true})
    sum?: number;

    @Field(() => Int, {nullable:true})
    buildingId?: number;
}
