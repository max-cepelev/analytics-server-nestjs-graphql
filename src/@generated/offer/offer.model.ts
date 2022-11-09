import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Offer {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:true})
    floor!: number | null;

    @Field(() => Int, {nullable:true})
    floors!: number | null;

    @Field(() => Float, {nullable:true})
    price!: number | null;

    @Field(() => String, {nullable:true})
    address!: string | null;

    @Field(() => Int, {nullable:true})
    buildingId!: number | null;

    @Field(() => String, {nullable:true})
    building!: string | null;

    @Field(() => String, {nullable:true})
    developer!: string | null;

    @Field(() => Int, {nullable:true})
    developerId!: number | null;

    @Field(() => String, {nullable:true})
    complex!: string | null;

    @Field(() => Int, {nullable:true})
    complexId!: number | null;

    @Field(() => Float, {nullable:true})
    area!: number | null;

    @Field(() => Int, {nullable:true})
    rooms!: number | null;

    @Field(() => String, {nullable:true})
    image!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
