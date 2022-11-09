import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class BuildingAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => Float, {nullable:true})
    domRfId?: number;

    @Field(() => Float, {nullable:true})
    domClickId?: number;

    @Field(() => Float, {nullable:true})
    cityId?: number;

    @Field(() => Float, {nullable:true})
    districtId?: number;

    @Field(() => Float, {nullable:true})
    developerId?: number;

    @Field(() => Float, {nullable:true})
    groupId?: number;

    @Field(() => Float, {nullable:true})
    complexId?: number;
}
