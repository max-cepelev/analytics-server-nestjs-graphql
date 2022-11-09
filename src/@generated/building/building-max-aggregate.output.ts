import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyClass } from '../prisma/property-class.enum';
import { DecorType } from '../prisma/decor-type.enum';
import { WallMaterial } from '../prisma/wall-material.enum';

@ObjectType()
export class BuildingMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => Date, {nullable:true})
    completionDate?: Date | string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

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

    @Field(() => Int, {nullable:true})
    cityId?: number;

    @Field(() => Int, {nullable:true})
    districtId?: number;

    @Field(() => Int, {nullable:true})
    developerId?: number;

    @Field(() => Int, {nullable:true})
    groupId?: number;

    @Field(() => Int, {nullable:true})
    complexId?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
