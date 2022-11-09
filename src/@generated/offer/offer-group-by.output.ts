import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { OfferCountAggregate } from './offer-count-aggregate.output';
import { OfferAvgAggregate } from './offer-avg-aggregate.output';
import { OfferSumAggregate } from './offer-sum-aggregate.output';
import { OfferMinAggregate } from './offer-min-aggregate.output';
import { OfferMaxAggregate } from './offer-max-aggregate.output';

@ObjectType()
export class OfferGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    floor?: number;

    @Field(() => Int, {nullable:true})
    floors?: number;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Int, {nullable:true})
    buildingId?: number;

    @Field(() => String, {nullable:true})
    building?: string;

    @Field(() => String, {nullable:true})
    developer?: string;

    @Field(() => Int, {nullable:true})
    developerId?: number;

    @Field(() => String, {nullable:true})
    complex?: string;

    @Field(() => Int, {nullable:true})
    complexId?: number;

    @Field(() => Float, {nullable:true})
    area?: number;

    @Field(() => Int, {nullable:true})
    rooms?: number;

    @Field(() => String, {nullable:true})
    image?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => OfferCountAggregate, {nullable:true})
    _count?: OfferCountAggregate;

    @Field(() => OfferAvgAggregate, {nullable:true})
    _avg?: OfferAvgAggregate;

    @Field(() => OfferSumAggregate, {nullable:true})
    _sum?: OfferSumAggregate;

    @Field(() => OfferMinAggregate, {nullable:true})
    _min?: OfferMinAggregate;

    @Field(() => OfferMaxAggregate, {nullable:true})
    _max?: OfferMaxAggregate;
}
