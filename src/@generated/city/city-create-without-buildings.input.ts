import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateNestedOneWithoutCitiesInput } from '../region/region-create-nested-one-without-cities.input';
import { DistrictCreateNestedManyWithoutCityInput } from '../district/district-create-nested-many-without-city.input';
import { ComplexCreateNestedManyWithoutCityInput } from '../complex/complex-create-nested-many-without-city.input';

@InputType()
export class CityCreateWithoutBuildingsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RegionCreateNestedOneWithoutCitiesInput, {nullable:false})
    region!: RegionCreateNestedOneWithoutCitiesInput;

    @Field(() => DistrictCreateNestedManyWithoutCityInput, {nullable:true})
    districts?: DistrictCreateNestedManyWithoutCityInput;

    @Field(() => ComplexCreateNestedManyWithoutCityInput, {nullable:true})
    complexes?: ComplexCreateNestedManyWithoutCityInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
