import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexWhereInput } from './complex-where.input';
import { Type } from 'class-transformer';
import { ComplexOrderByWithRelationInput } from './complex-order-by-with-relation.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplexScalarFieldEnum } from './complex-scalar-field.enum';

@ArgsType()
export class FindManyComplexArgs {

    @Field(() => ComplexWhereInput, {nullable:true})
    @Type(() => ComplexWhereInput)
    where?: ComplexWhereInput;

    @Field(() => [ComplexOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ComplexOrderByWithRelationInput>;

    @Field(() => ComplexWhereUniqueInput, {nullable:true})
    cursor?: ComplexWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ComplexScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ComplexScalarFieldEnum>;
}
