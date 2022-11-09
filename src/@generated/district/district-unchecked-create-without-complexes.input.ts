import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildingUncheckedCreateNestedManyWithoutDistrictInput } from '../building/building-unchecked-create-nested-many-without-district.input';

@InputType()
export class DistrictUncheckedCreateWithoutComplexesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    cityId!: number;

    @Field(() => BuildingUncheckedCreateNestedManyWithoutDistrictInput, {nullable:true})
    buildings?: BuildingUncheckedCreateNestedManyWithoutDistrictInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
