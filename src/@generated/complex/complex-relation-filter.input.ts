import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereInput } from './complex-where.input';

@InputType()
export class ComplexRelationFilter {

    @Field(() => ComplexWhereInput, {nullable:true})
    is?: ComplexWhereInput;

    @Field(() => ComplexWhereInput, {nullable:true})
    isNot?: ComplexWhereInput;
}
