import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyType } from '../prisma/property-type.enum';
import { SaleCountAggregate } from './sale-count-aggregate.output';
import { SaleAvgAggregate } from './sale-avg-aggregate.output';
import { SaleSumAggregate } from './sale-sum-aggregate.output';
import { SaleMinAggregate } from './sale-min-aggregate.output';
import { SaleMaxAggregate } from './sale-max-aggregate.output';

@ObjectType()
export class SaleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    month!: number;

    @Field(() => Int, {nullable:false})
    year!: number;

    @Field(() => Int, {nullable:false})
    amount!: number;

    @Field(() => Float, {nullable:false})
    area!: number;

    @Field(() => Float, {nullable:false})
    sum!: number;

    @Field(() => PropertyType, {nullable:false})
    propertyType!: keyof typeof PropertyType;

    @Field(() => Int, {nullable:false})
    buildingId!: number;

    @Field(() => SaleCountAggregate, {nullable:true})
    _count?: SaleCountAggregate;

    @Field(() => SaleAvgAggregate, {nullable:true})
    _avg?: SaleAvgAggregate;

    @Field(() => SaleSumAggregate, {nullable:true})
    _sum?: SaleSumAggregate;

    @Field(() => SaleMinAggregate, {nullable:true})
    _min?: SaleMinAggregate;

    @Field(() => SaleMaxAggregate, {nullable:true})
    _max?: SaleMaxAggregate;
}
