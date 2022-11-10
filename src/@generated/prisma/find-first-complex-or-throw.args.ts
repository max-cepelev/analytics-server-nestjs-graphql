import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexWhereInput } from '../complex/complex-where.input';
import { Type } from 'class-transformer';
import { ComplexOrderByWithRelationInput } from '../complex/complex-order-by-with-relation.input';
import { ComplexWhereUniqueInput } from '../complex/complex-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplexScalarFieldEnum } from '../complex/complex-scalar-field.enum';

@ArgsType()
export class FindFirstComplexOrThrowArgs {

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
