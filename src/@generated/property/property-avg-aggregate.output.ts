import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class PropertyAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    floor?: number;

    @Field(() => Float, {nullable:true})
    entrance?: number;

    @Field(() => Float, {nullable:true})
    totalArea?: number;

    @Field(() => Float, {nullable:true})
    livingArea?: number;

    @Field(() => Float, {nullable:true})
    rooms?: number;

    @Field(() => Float, {nullable:true})
    wallHeight?: number;

    @Field(() => Float, {nullable:true})
    buildingId?: number;
}
