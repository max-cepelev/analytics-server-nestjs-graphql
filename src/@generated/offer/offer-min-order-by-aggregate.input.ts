import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class OfferMinOrderByAggregateInput {

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
}
