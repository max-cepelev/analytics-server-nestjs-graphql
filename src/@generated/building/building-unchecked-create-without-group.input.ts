import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyClass } from '../prisma/property-class.enum';
import { DecorType } from '../prisma/decor-type.enum';
import { WallMaterial } from '../prisma/wall-material.enum';
import { SaleUncheckedCreateNestedManyWithoutBuildingInput } from '../sale/sale-unchecked-create-nested-many-without-building.input';
import { PropertyUncheckedCreateNestedManyWithoutBuildingInput } from '../property/property-unchecked-create-nested-many-without-building.input';

@InputType()
export class BuildingUncheckedCreateWithoutGroupInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => Date, {nullable:false})
    completionDate!: Date | string;

    @Field(() => Boolean, {nullable:true})
    completed?: boolean;

    @Field(() => Float, {nullable:true})
    latitude?: number;

    @Field(() => Float, {nullable:true})
    longitude?: number;

    @Field(() => PropertyClass, {nullable:true})
    propertyClass?: keyof typeof PropertyClass;

    @Field(() => DecorType, {nullable:true})
    decorType?: keyof typeof DecorType;

    @Field(() => WallMaterial, {nullable:true})
    wallMaterial?: keyof typeof WallMaterial;

    @Field(() => String, {nullable:true})
    img?: string;

    @Field(() => Int, {nullable:true})
    domRfId?: number;

    @Field(() => Int, {nullable:true})
    domClickId?: number;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => Int, {nullable:false})
    developerId!: number;

    @Field(() => Int, {nullable:false})
    complexId!: number;

    @Field(() => SaleUncheckedCreateNestedManyWithoutBuildingInput, {nullable:true})
    sales?: SaleUncheckedCreateNestedManyWithoutBuildingInput;

    @Field(() => PropertyUncheckedCreateNestedManyWithoutBuildingInput, {nullable:true})
    properties?: PropertyUncheckedCreateNestedManyWithoutBuildingInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
