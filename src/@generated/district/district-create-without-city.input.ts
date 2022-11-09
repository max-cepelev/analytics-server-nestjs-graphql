import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateNestedManyWithoutDistrictInput } from '../complex/complex-create-nested-many-without-district.input';
import { BuildingCreateNestedManyWithoutDistrictInput } from '../building/building-create-nested-many-without-district.input';

@InputType()
export class DistrictCreateWithoutCityInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => ComplexCreateNestedManyWithoutDistrictInput, {nullable:true})
    complexes?: ComplexCreateNestedManyWithoutDistrictInput;

    @Field(() => BuildingCreateNestedManyWithoutDistrictInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutDistrictInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
