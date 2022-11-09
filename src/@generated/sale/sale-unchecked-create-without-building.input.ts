import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyType } from '../prisma/property-type.enum';

@InputType()
export class SaleUncheckedCreateWithoutBuildingInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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
}
