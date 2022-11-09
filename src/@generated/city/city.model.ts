import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Region } from '../region/region.model';
import { District } from '../district/district.model';
import { Complex } from '../complex/complex.model';
import { Building } from '../building/building.model';
import { CityCount } from './city-count.output';

@ObjectType()
export class City {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    regionId!: number;

    @Field(() => Region, {nullable:false})
    region?: Region;

    @Field(() => [District], {nullable:true})
    districts?: Array<District>;

    @Field(() => [Complex], {nullable:true})
    complexes?: Array<Complex>;

    @Field(() => [Building], {nullable:true})
    buildings?: Array<Building>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => CityCount, {nullable:false})
    _count?: CityCount;
}
