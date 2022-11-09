import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplexCountAggregate } from './complex-count-aggregate.output';
import { ComplexAvgAggregate } from './complex-avg-aggregate.output';
import { ComplexSumAggregate } from './complex-sum-aggregate.output';
import { ComplexMinAggregate } from './complex-min-aggregate.output';
import { ComplexMaxAggregate } from './complex-max-aggregate.output';

@ObjectType()
export class ComplexGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    shortName?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    info?: string;

    @Field(() => Int, {nullable:true})
    domRfId?: number;

    @Field(() => Int, {nullable:true})
    domClickId?: number;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
