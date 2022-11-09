import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class OfferCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    floor!: number;

    @Field(() => Int, {nullable:false})
    floors!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    buildingId!: number;

    @Field(() => Int, {nullable:false})
    building!: number;

    @Field(() => Int, {nullable:false})
    developer!: number;

    @Field(() => Int, {nullable:false})
    developerId!: number;

    @Field(() => Int, {nullable:false})
    complex!: number;

    @Field(() => Int, {nullable:false})
    complexId!: number;

    @Field(() => Int, {nullable:false})
    area!: number;

    @Field(() => Int, {nullable:false})
    rooms!: number;

    @Field(() => Int, {nullable:false})
    image!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
