import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateNestedOneWithoutDistrictsInput } from '../city/city-create-nested-one-without-districts.input';
import { ComplexCreateNestedManyWithoutDistrictInput } from '../complex/complex-create-nested-many-without-district.input';

@InputType()
export class DistrictCreateWithoutBuildingsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CityCreateNestedOneWithoutDistrictsInput, {nullable:false})
    city!: CityCreateNestedOneWithoutDistrictsInput;

    @Field(() => ComplexCreateNestedManyWithoutDistrictInput, {nullable:true})
    complexes?: ComplexCreateNestedManyWithoutDistrictInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
