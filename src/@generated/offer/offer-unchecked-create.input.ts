import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@InputType()
export class OfferUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
