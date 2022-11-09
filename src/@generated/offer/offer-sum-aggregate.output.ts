import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OfferSumAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    floor?: number;

    @Field(() => Int, {nullable:true})
    floors?: number;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => Int, {nullable:true})
    buildingId?: number;

    @Field(() => Int, {nullable:true})
    developerId?: number;

    @Field(() => Int, {nullable:true})
    complexId?: number;

    @Field(() => Float, {nullable:true})
    area?: number;

    @Field(() => Int, {nullable:true})
    rooms?: number;
}
