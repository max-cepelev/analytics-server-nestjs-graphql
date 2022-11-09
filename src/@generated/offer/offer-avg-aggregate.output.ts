import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class OfferAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    floor?: number;

    @Field(() => Float, {nullable:true})
    floors?: number;

    @Field(() => Float, {nullable:true})
    price?: number;

    @Field(() => Float, {nullable:true})
    buildingId?: number;

    @Field(() => Float, {nullable:true})
    developerId?: number;

    @Field(() => Float, {nullable:true})
    complexId?: number;

    @Field(() => Float, {nullable:true})
    area?: number;

    @Field(() => Float, {nullable:true})
    rooms?: number;
}
