import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyClass } from '../prisma/property-class.enum';
import { DecorType } from '../prisma/decor-type.enum';
import { WallMaterial } from '../prisma/wall-material.enum';
import { City } from '../city/city.model';
import { District } from '../district/district.model';
import { Developer } from '../developer/developer.model';
import { Group } from '../group/group.model';
import { Complex } from '../complex/complex.model';
import { Sale } from '../sale/sale.model';
import { Property } from '../property/property.model';
import { BuildingCount } from './building-count.output';

@ObjectType()
export class Building {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => Date, {nullable:false})
    completionDate!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    completed!: boolean;

    @Field(() => Float, {nullable:true})
    latitude!: number | null;

    @Field(() => Float, {nullable:true})
    longitude!: number | null;

    @Field(() => PropertyClass, {nullable:true})
    propertyClass!: keyof typeof PropertyClass | null;

    @Field(() => DecorType, {nullable:true})
    decorType!: keyof typeof DecorType | null;

    @Field(() => WallMaterial, {nullable:true})
    wallMaterial!: keyof typeof WallMaterial | null;

    @Field(() => String, {nullable:true})
    img!: string | null;

    @Field(() => Int, {nullable:true})
    domRfId!: number | null;

    @Field(() => Int, {nullable:true})
    domClickId!: number | null;

    @Field(() => City, {nullable:false})
    city?: City;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => District, {nullable:false})
    district?: District;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => Developer, {nullable:false})
    developer?: Developer;

    @Field(() => Int, {nullable:false})
    developerId!: number;

    @Field(() => Group, {nullable:false})
    group?: Group;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Complex, {nullable:false})
    complex?: Complex;

    @Field(() => Int, {nullable:false})
    complexId!: number;

    @Field(() => [Sale], {nullable:true})
    sales?: Array<Sale>;

    @Field(() => [Property], {nullable:true})
    properties?: Array<Property>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => BuildingCount, {nullable:false})
    _count?: BuildingCount;
}
