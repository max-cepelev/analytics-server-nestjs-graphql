import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateNestedManyWithoutGroupsInput } from '../region/region-create-nested-many-without-groups.input';
import { BuildingCreateNestedManyWithoutGroupInput } from '../building/building-create-nested-many-without-group.input';
import { ComplexCreateNestedManyWithoutGroupInput } from '../complex/complex-create-nested-many-without-group.input';

@InputType()
export class GroupCreateWithoutDevelopersInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RegionCreateNestedManyWithoutGroupsInput, {nullable:true})
    regions?: RegionCreateNestedManyWithoutGroupsInput;

    @Field(() => BuildingCreateNestedManyWithoutGroupInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutGroupInput;

    @Field(() => ComplexCreateNestedManyWithoutGroupInput, {nullable:true})
    complexes?: ComplexCreateNestedManyWithoutGroupInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
