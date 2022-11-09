import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { City } from '../city/city.model';
import { Complex } from '../complex/complex.model';
import { Building } from '../building/building.model';
import { DistrictCount } from './district-count.output';

@ObjectType()
export class District {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => City, {nullable:false})
    city?: City;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => [Complex], {nullable:true})
    complexes?: Array<Complex>;

    @Field(() => [Building], {nullable:true})
    buildings?: Array<Building>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DistrictCount, {nullable:false})
    _count?: DistrictCount;
}
