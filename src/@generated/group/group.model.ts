import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Region } from '../region/region.model';
import { Building } from '../building/building.model';
import { Developer } from '../developer/developer.model';
import { Complex } from '../complex/complex.model';
import { GroupCount } from './group-count.output';

@ObjectType()
export class Group {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Region], {nullable:true})
    regions?: Array<Region>;

    @Field(() => [Building], {nullable:true})
    buildings?: Array<Building>;

    @Field(() => [Developer], {nullable:true})
    developers?: Array<Developer>;

    @Field(() => [Complex], {nullable:true})
    complexes?: Array<Complex>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => GroupCount, {nullable:false})
    _count?: GroupCount;
}
