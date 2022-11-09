import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { PropertyClass } from '../prisma/property-class.enum';
import { DecorType } from '../prisma/decor-type.enum';
import { WallMaterial } from '../prisma/wall-material.enum';
import { Int } from '@nestjs/graphql';
import { CityCreateNestedOneWithoutBuildingsInput } from '../city/city-create-nested-one-without-buildings.input';
import { DistrictCreateNestedOneWithoutBuildingsInput } from '../district/district-create-nested-one-without-buildings.input';
import { DeveloperCreateNestedOneWithoutBuildingsInput } from '../developer/developer-create-nested-one-without-buildings.input';
import { GroupCreateNestedOneWithoutBuildingsInput } from '../group/group-create-nested-one-without-buildings.input';
import { ComplexCreateNestedOneWithoutBuildingsInput } from '../complex/complex-create-nested-one-without-buildings.input';
import { SaleCreateNestedManyWithoutBuildingInput } from '../sale/sale-create-nested-many-without-building.input';
import { PropertyCreateNestedManyWithoutBuildingInput } from '../property/property-create-nested-many-without-building.input';

@InputType()
export class BuildingCreateInput {

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

    @Field(() => CityCreateNestedOneWithoutBuildingsInput, {nullable:false})
    city!: CityCreateNestedOneWithoutBuildingsInput;

    @Field(() => DistrictCreateNestedOneWithoutBuildingsInput, {nullable:false})
    district!: DistrictCreateNestedOneWithoutBuildingsInput;

    @Field(() => DeveloperCreateNestedOneWithoutBuildingsInput, {nullable:false})
    developer!: DeveloperCreateNestedOneWithoutBuildingsInput;

    @Field(() => GroupCreateNestedOneWithoutBuildingsInput, {nullable:false})
    group!: GroupCreateNestedOneWithoutBuildingsInput;

    @Field(() => ComplexCreateNestedOneWithoutBuildingsInput, {nullable:false})
    complex!: ComplexCreateNestedOneWithoutBuildingsInput;

    @Field(() => SaleCreateNestedManyWithoutBuildingInput, {nullable:true})
    sales?: SaleCreateNestedManyWithoutBuildingInput;

    @Field(() => PropertyCreateNestedManyWithoutBuildingInput, {nullable:true})
    properties?: PropertyCreateNestedManyWithoutBuildingInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
