import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateNestedManyWithoutCityInput } from '../district/district-create-nested-many-without-city.input';
import { ComplexCreateNestedManyWithoutCityInput } from '../complex/complex-create-nested-many-without-city.input';
import { BuildingCreateNestedManyWithoutCityInput } from '../building/building-create-nested-many-without-city.input';

@InputType()
export class CityCreateWithoutRegionInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => DistrictCreateNestedManyWithoutCityInput, {nullable:true})
    districts?: DistrictCreateNestedManyWithoutCityInput;

    @Field(() => ComplexCreateNestedManyWithoutCityInput, {nullable:true})
    complexes?: ComplexCreateNestedManyWithoutCityInput;

    @Field(() => BuildingCreateNestedManyWithoutCityInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutCityInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
