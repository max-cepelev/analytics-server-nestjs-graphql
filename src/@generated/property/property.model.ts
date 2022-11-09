import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyType } from '../prisma/property-type.enum';
import { Building } from '../building/building.model';

@ObjectType()
export class Property {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Int, {nullable:false})
    floor!: number;

    @Field(() => Int, {nullable:true})
    entrance!: number | null;

    @Field(() => Float, {nullable:false})
    totalArea!: number;

    @Field(() => Float, {nullable:true})
    livingArea!: number | null;

    @Field(() => Int, {nullable:true})
    rooms!: number | null;

    @Field(() => Float, {nullable:true})
    wallHeight!: number | null;

    @Field(() => PropertyType, {nullable:false})
    propertyType!: keyof typeof PropertyType;

    @Field(() => Building, {nullable:false})
    building?: Building;

    @Field(() => Int, {nullable:false})
    buildingId!: number;
}
