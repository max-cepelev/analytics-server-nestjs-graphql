import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class SaleAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    month?: number;

    @Field(() => Float, {nullable:true})
    year?: number;

    @Field(() => Float, {nullable:true})
    amount?: number;

    @Field(() => Float, {nullable:true})
    area?: number;

    @Field(() => Float, {nullable:true})
    sum?: number;

    @Field(() => Float, {nullable:true})
    buildingId?: number;
}
