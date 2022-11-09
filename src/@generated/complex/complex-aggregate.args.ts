import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexWhereInput } from './complex-where.input';
import { Type } from 'class-transformer';
import { ComplexOrderByWithRelationInput } from './complex-order-by-with-relation.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ComplexCountAggregateInput } from './complex-count-aggregate.input';
import { ComplexAvgAggregateInput } from './complex-avg-aggregate.input';
import { ComplexSumAggregateInput } from './complex-sum-aggregate.input';
import { ComplexMinAggregateInput } from './complex-min-aggregate.input';
import { ComplexMaxAggregateInput } from './complex-max-aggregate.input';

@ArgsType()
export class ComplexAggregateArgs {

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

    @Field(() => ComplexCountAggregateInput, {nullable:true})
    _count?: ComplexCountAggregateInput;

    @Field(() => ComplexAvgAggregateInput, {nullable:true})
    _avg?: ComplexAvgAggregateInput;

    @Field(() => ComplexSumAggregateInput, {nullable:true})
    _sum?: ComplexSumAggregateInput;

    @Field(() => ComplexMinAggregateInput, {nullable:true})
    _min?: ComplexMinAggregateInput;

    @Field(() => ComplexMaxAggregateInput, {nullable:true})
    _max?: ComplexMaxAggregateInput;
}
