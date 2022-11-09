import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { OfferCountAggregate } from './offer-count-aggregate.output';
import { OfferAvgAggregate } from './offer-avg-aggregate.output';
import { OfferSumAggregate } from './offer-sum-aggregate.output';
import { OfferMinAggregate } from './offer-min-aggregate.output';
import { OfferMaxAggregate } from './offer-max-aggregate.output';

@ObjectType()
export class AggregateOffer {

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
