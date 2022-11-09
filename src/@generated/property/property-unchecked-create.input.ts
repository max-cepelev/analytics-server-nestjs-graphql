import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyType } from '../prisma/property-type.enum';

@InputType()
export class PropertyUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    number!: string;

    @Field(() => Int, {nullable:false})
    floor!: number;

    @Field(() => Int, {nullable:true})
    entrance?: number;

    @Field(() => Float, {nullable:false})
    totalArea!: number;

    @Field(() => Float, {nullable:true})
    livingArea?: number;

    @Field(() => Int, {nullable:true})
    rooms?: number;

    @Field(() => Float, {nullable:true})
    wallHeight?: number;

    @Field(() => PropertyType, {nullable:false})
    propertyType!: keyof typeof PropertyType;

    @Field(() => Int, {nullable:false})
    buildingId!: number;
}
