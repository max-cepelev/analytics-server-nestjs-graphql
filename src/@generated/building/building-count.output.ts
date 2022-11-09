import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class BuildingCount {

    @Field(() => Int, {nullable:false})
    sales?: number;

    @Field(() => Int, {nullable:false})
    properties?: number;
}
