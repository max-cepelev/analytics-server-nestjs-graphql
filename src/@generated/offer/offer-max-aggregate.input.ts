import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OfferMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    floor?: true;

    @Field(() => Boolean, {nullable:true})
    floors?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    buildingId?: true;

    @Field(() => Boolean, {nullable:true})
    building?: true;

    @Field(() => Boolean, {nullable:true})
    developer?: true;

    @Field(() => Boolean, {nullable:true})
    developerId?: true;

    @Field(() => Boolean, {nullable:true})
    complex?: true;

    @Field(() => Boolean, {nullable:true})
    complexId?: true;

    @Field(() => Boolean, {nullable:true})
    area?: true;

    @Field(() => Boolean, {nullable:true})
    rooms?: true;

    @Field(() => Boolean, {nullable:true})
    image?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
