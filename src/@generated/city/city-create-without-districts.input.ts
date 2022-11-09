import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateNestedOneWithoutCitiesInput } from '../region/region-create-nested-one-without-cities.input';
import { ComplexCreateNestedManyWithoutCityInput } from '../complex/complex-create-nested-many-without-city.input';
import { BuildingCreateNestedManyWithoutCityInput } from '../building/building-create-nested-many-without-city.input';

@InputType()
export class CityCreateWithoutDistrictsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RegionCreateNestedOneWithoutCitiesInput, {nullable:false})
    region!: RegionCreateNestedOneWithoutCitiesInput;

    @Field(() => ComplexCreateNestedManyWithoutCityInput, {nullable:true})
    complexes?: ComplexCreateNestedManyWithoutCityInput;

    @Field(() => BuildingCreateNestedManyWithoutCityInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutCityInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
