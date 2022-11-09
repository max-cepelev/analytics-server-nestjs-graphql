import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ComplexUncheckedCreateNestedManyWithoutDistrictInput } from '../complex/complex-unchecked-create-nested-many-without-district.input';

@InputType()
export class DistrictUncheckedCreateWithoutBuildingsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => ComplexUncheckedCreateNestedManyWithoutDistrictInput, {nullable:true})
    complexes?: ComplexUncheckedCreateNestedManyWithoutDistrictInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
