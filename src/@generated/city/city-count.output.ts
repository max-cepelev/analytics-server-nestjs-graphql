import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CityCount {

    @Field(() => Int, {nullable:false})
    districts?: number;

    @Field(() => Int, {nullable:false})
    complexes?: number;

    @Field(() => Int, {nullable:false})
    buildings?: number;
}
