import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyClass } from '../prisma/property-class.enum';
import { DecorType } from '../prisma/decor-type.enum';
import { WallMaterial } from '../prisma/wall-material.enum';
import { BuildingCountAggregate } from './building-count-aggregate.output';
import { BuildingAvgAggregate } from './building-avg-aggregate.output';
import { BuildingSumAggregate } from './building-sum-aggregate.output';
import { BuildingMinAggregate } from './building-min-aggregate.output';
import { BuildingMaxAggregate } from './building-max-aggregate.output';

@ObjectType()
export class BuildingGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => Date, {nullable:false})
    completionDate!: Date | string;

    @Field(() => Boolean, {nullable:false})
    completed!: boolean;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => PropertyClass, {nullable:true})
    propertyClass?: keyof typeof PropertyClass;

    @Field(() => DecorType, {nullable:true})
    decorType?: keyof typeof DecorType;

    @Field(() => WallMaterial, {nullable:true})
    wallMaterial?: keyof typeof WallMaterial;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => Int, {nullable:true})
    domRfId?: number;

    @Field(() => Int, {nullable:true})
    domClickId?: number;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => Int, {nullable:false})
    developerId!: number;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    complexId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => BuildingCountAggregate, {nullable:true})
    _count?: BuildingCountAggregate;

    @Field(() => BuildingAvgAggregate, {nullable:true})
    _avg?: BuildingAvgAggregate;

    @Field(() => BuildingSumAggregate, {nullable:true})
    _sum?: BuildingSumAggregate;

    @Field(() => BuildingMinAggregate, {nullable:true})
    _min?: BuildingMinAggregate;

    @Field(() => BuildingMaxAggregate, {nullable:true})
    _max?: BuildingMaxAggregate;
}
