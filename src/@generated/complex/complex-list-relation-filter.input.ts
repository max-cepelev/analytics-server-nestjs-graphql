import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereInput } from './complex-where.input';

@InputType()
export class ComplexListRelationFilter {

    @Field(() => ComplexWhereInput, {nullable:true})
    every?: ComplexWhereInput;

    @Field(() => ComplexWhereInput, {nullable:true})
    some?: ComplexWhereInput;

    @Field(() => ComplexWhereInput, {nullable:true})
    none?: ComplexWhereInput;
}
