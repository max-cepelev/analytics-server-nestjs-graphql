import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { City } from '../city/city.model';
import { Group } from '../group/group.model';
import { RegionCount } from './region-count.output';

@ObjectType()
export class Region {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [City], {nullable:true})
    cities?: Array<City>;

    @Field(() => [Group], {nullable:true})
    groups?: Array<Group>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => RegionCount, {nullable:false})
    _count?: RegionCount;
}
