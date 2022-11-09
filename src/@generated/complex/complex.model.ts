import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Group } from '../group/group.model';
import { City } from '../city/city.model';
import { District } from '../district/district.model';
import { Building } from '../building/building.model';
import { ComplexCount } from './complex-count.output';

@ObjectType()
export class Complex {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    shortName!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    info!: string | null;

    @Field(() => Int, {nullable:true})
    domRfId!: number | null;

    @Field(() => Int, {nullable:true})
    domClickId!: number | null;

    @Field(() => Group, {nullable:false})
    group?: Group;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => City, {nullable:false})
    city?: City;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => District, {nullable:false})
    district?: District;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => [Building], {nullable:true})
    buildings?: Array<Building>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => ComplexCount, {nullable:false})
    _count?: ComplexCount;
}
