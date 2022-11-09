import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GroupCreateNestedOneWithoutComplexesInput } from '../group/group-create-nested-one-without-complexes.input';
import { CityCreateNestedOneWithoutComplexesInput } from '../city/city-create-nested-one-without-complexes.input';
import { DistrictCreateNestedOneWithoutComplexesInput } from '../district/district-create-nested-one-without-complexes.input';

@InputType()
export class ComplexCreateWithoutBuildingsInput {

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

    @Field(() => GroupCreateNestedOneWithoutComplexesInput, {nullable:false})
    group!: GroupCreateNestedOneWithoutComplexesInput;

    @Field(() => CityCreateNestedOneWithoutComplexesInput, {nullable:false})
    city!: CityCreateNestedOneWithoutComplexesInput;

    @Field(() => DistrictCreateNestedOneWithoutComplexesInput, {nullable:false})
    district!: DistrictCreateNestedOneWithoutComplexesInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
