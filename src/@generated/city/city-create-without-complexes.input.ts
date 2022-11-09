import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateNestedOneWithoutCitiesInput } from '../region/region-create-nested-one-without-cities.input';
import { DistrictCreateNestedManyWithoutCityInput } from '../district/district-create-nested-many-without-city.input';
import { BuildingCreateNestedManyWithoutCityInput } from '../building/building-create-nested-many-without-city.input';

@InputType()
export class CityCreateWithoutComplexesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RegionCreateNestedOneWithoutCitiesInput, {nullable:false})
    region!: RegionCreateNestedOneWithoutCitiesInput;

    @Field(() => DistrictCreateNestedManyWithoutCityInput, {nullable:true})
    districts?: DistrictCreateNestedManyWithoutCityInput;

    @Field(() => BuildingCreateNestedManyWithoutCityInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutCityInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
