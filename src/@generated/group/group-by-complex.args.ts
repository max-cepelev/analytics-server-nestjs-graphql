import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexWhereInput } from '../complex/complex-where.input';
import { Type } from 'class-transformer';
import { ComplexOrderByWithAggregationInput } from '../complex/complex-order-by-with-aggregation.input';
import { ComplexScalarFieldEnum } from '../complex/complex-scalar-field.enum';
import { ComplexScalarWhereWithAggregatesInput } from '../complex/complex-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByComplexArgs {

    @Field(() => ComplexWhereInput, {nullable:true})
    @Type(() => ComplexWhereInput)
    where?: ComplexWhereInput;

    @Field(() => [ComplexOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ComplexOrderByWithAggregationInput>;

    @Field(() => [ComplexScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ComplexScalarFieldEnum>;

    @Field(() => ComplexScalarWhereWithAggregatesInput, {nullable:true})
    having?: ComplexScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
