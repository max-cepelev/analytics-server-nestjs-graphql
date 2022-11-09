import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class DistrictCount {

    @Field(() => Int, {nullable:false})
    complexes?: number;

    @Field(() => Int, {nullable:false})
    buildings?: number;
}
