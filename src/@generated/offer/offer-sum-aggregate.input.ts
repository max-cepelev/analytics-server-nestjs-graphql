import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class OfferSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    floor?: true;

    @Field(() => Boolean, {nullable:true})
    floors?: true;

    @Field(() => Boolean, {nullable:true})
    price?: true;

    @Field(() => Boolean, {nullable:true})
    buildingId?: true;

    @Field(() => Boolean, {nullable:true})
    developerId?: true;

    @Field(() => Boolean, {nullable:true})
    complexId?: true;

    @Field(() => Boolean, {nullable:true})
    area?: true;

    @Field(() => Boolean, {nullable:true})
    rooms?: true;
}
