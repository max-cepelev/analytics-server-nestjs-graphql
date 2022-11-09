import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DistrictUncheckedCreateNestedManyWithoutCityInput } from '../district/district-unchecked-create-nested-many-without-city.input';
import { ComplexUncheckedCreateNestedManyWithoutCityInput } from '../complex/complex-unchecked-create-nested-many-without-city.input';

@InputType()
export class CityUncheckedCreateWithoutBuildingsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    regionId!: number;

    @Field(() => DistrictUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    districts?: DistrictUncheckedCreateNestedManyWithoutCityInput;

    @Field(() => ComplexUncheckedCreateNestedManyWithoutCityInput, {nullable:true})
    complexes?: ComplexUncheckedCreateNestedManyWithoutCityInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
