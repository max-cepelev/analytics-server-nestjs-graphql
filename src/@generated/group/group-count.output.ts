import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class GroupCount {

    @Field(() => Int, {nullable:false})
    regions?: number;

    @Field(() => Int, {nullable:false})
    buildings?: number;

    @Field(() => Int, {nullable:false})
    developers?: number;

    @Field(() => Int, {nullable:false})
    complexes?: number;
}
