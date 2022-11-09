import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyType } from '../prisma/property-type.enum';
import { Building } from '../building/building.model';

@ObjectType()
export class Sale {

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

    @Field(() => Building, {nullable:false})
    building?: Building;

    @Field(() => Int, {nullable:false})
    buildingId!: number;
}
