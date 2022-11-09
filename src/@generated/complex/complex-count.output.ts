import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ComplexCount {

    @Field(() => Int, {nullable:false})
    buildings?: number;
}
