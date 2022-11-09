import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildingUncheckedCreateNestedManyWithoutComplexInput } from '../building/building-unchecked-create-nested-many-without-complex.input';

@InputType()
export class ComplexUncheckedCreateWithoutCityInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    shortName?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    info?: string;

    @Field(() => Int, {nullable:true})
    domRfId?: number;

    @Field(() => Int, {nullable:true})
    domClickId?: number;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Int, {nullable:false})
    districtId!: number;

    @Field(() => BuildingUncheckedCreateNestedManyWithoutComplexInput, {nullable:true})
    buildings?: BuildingUncheckedCreateNestedManyWithoutComplexInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
