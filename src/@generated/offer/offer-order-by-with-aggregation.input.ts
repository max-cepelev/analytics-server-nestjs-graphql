import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { OfferCountOrderByAggregateInput } from './offer-count-order-by-aggregate.input';
import { OfferAvgOrderByAggregateInput } from './offer-avg-order-by-aggregate.input';
import { OfferMaxOrderByAggregateInput } from './offer-max-order-by-aggregate.input';
import { OfferMinOrderByAggregateInput } from './offer-min-order-by-aggregate.input';
import { OfferSumOrderByAggregateInput } from './offer-sum-order-by-aggregate.input';

@InputType()
export class OfferOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    floor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    floors?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    address?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    buildingId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    building?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    developer?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    developerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complex?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    complexId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    area?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rooms?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    image?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => OfferCountOrderByAggregateInput, {nullable:true})
    _count?: OfferCountOrderByAggregateInput;

    @Field(() => OfferAvgOrderByAggregateInput, {nullable:true})
    _avg?: OfferAvgOrderByAggregateInput;

    @Field(() => OfferMaxOrderByAggregateInput, {nullable:true})
    _max?: OfferMaxOrderByAggregateInput;

    @Field(() => OfferMinOrderByAggregateInput, {nullable:true})
    _min?: OfferMinOrderByAggregateInput;

    @Field(() => OfferSumOrderByAggregateInput, {nullable:true})
    _sum?: OfferSumOrderByAggregateInput;
}
