import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplexUncheckedCreateNestedManyWithoutDistrictInput } from '../complex/complex-unchecked-create-nested-many-without-district.input';
import { BuildingUncheckedCreateNestedManyWithoutDistrictInput } from '../building/building-unchecked-create-nested-many-without-district.input';

@InputType()
export class DistrictUncheckedCreateWithoutCityInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ComplexUncheckedCreateNestedManyWithoutDistrictInput, {nullable:true})
    complexes?: ComplexUncheckedCreateNestedManyWithoutDistrictInput;

    @Field(() => BuildingUncheckedCreateNestedManyWithoutDistrictInput, {nullable:true})
    buildings?: BuildingUncheckedCreateNestedManyWithoutDistrictInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
