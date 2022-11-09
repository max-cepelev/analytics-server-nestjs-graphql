import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ComplexCountAggregate } from './complex-count-aggregate.output';
import { ComplexAvgAggregate } from './complex-avg-aggregate.output';
import { ComplexSumAggregate } from './complex-sum-aggregate.output';
import { ComplexMinAggregate } from './complex-min-aggregate.output';
import { ComplexMaxAggregate } from './complex-max-aggregate.output';

@ObjectType()
export class AggregateComplex {

    @Field(() => ComplexCountAggregate, {nullable:true})
    _count?: ComplexCountAggregate;

    @Field(() => ComplexAvgAggregate, {nullable:true})
    _avg?: ComplexAvgAggregate;

    @Field(() => ComplexSumAggregate, {nullable:true})
    _sum?: ComplexSumAggregate;

    @Field(() => ComplexMinAggregate, {nullable:true})
    _min?: ComplexMinAggregate;

    @Field(() => ComplexMaxAggregate, {nullable:true})
    _max?: ComplexMaxAggregate;
}
