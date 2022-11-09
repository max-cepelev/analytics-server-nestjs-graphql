import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyType } from '../prisma/property-type.enum';
import { PropertyCountAggregate } from './property-count-aggregate.output';
import { PropertyAvgAggregate } from './property-avg-aggregate.output';
import { PropertySumAggregate } from './property-sum-aggregate.output';
import { PropertyMinAggregate } from './property-min-aggregate.output';
import { PropertyMaxAggregate } from './property-max-aggregate.output';

@ObjectType()
export class PropertyGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Int, {nullable:false})
    floor!: number;

    @Field(() => Int, {nullable:true})
    entrance?: number;

    @Field(() => Float, {nullable:false})
    totalArea!: number;

    @Field(() => Float, {nullable:true})
    livingArea?: number;

    @Field(() => Int, {nullable:true})
    rooms?: number;

    @Field(() => Float, {nullable:true})
    wallHeight?: number;

    @Field(() => PropertyType, {nullable:false})
    propertyType!: keyof typeof PropertyType;

    @Field(() => Int, {nullable:false})
    buildingId!: number;

    @Field(() => PropertyCountAggregate, {nullable:true})
    _count?: PropertyCountAggregate;

    @Field(() => PropertyAvgAggregate, {nullable:true})
    _avg?: PropertyAvgAggregate;

    @Field(() => PropertySumAggregate, {nullable:true})
    _sum?: PropertySumAggregate;

    @Field(() => PropertyMinAggregate, {nullable:true})
    _min?: PropertyMinAggregate;

    @Field(() => PropertyMaxAggregate, {nullable:true})
    _max?: PropertyMaxAggregate;
}
