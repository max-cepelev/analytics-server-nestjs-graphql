import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateNestedManyWithoutGroupsInput } from '../region/region-create-nested-many-without-groups.input';
import { BuildingCreateNestedManyWithoutGroupInput } from '../building/building-create-nested-many-without-group.input';
import { DeveloperCreateNestedManyWithoutGroupInput } from '../developer/developer-create-nested-many-without-group.input';

@InputType()
export class GroupCreateWithoutComplexesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => RegionCreateNestedManyWithoutGroupsInput, {nullable:true})
    regions?: RegionCreateNestedManyWithoutGroupsInput;

    @Field(() => BuildingCreateNestedManyWithoutGroupInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutGroupInput;

    @Field(() => DeveloperCreateNestedManyWithoutGroupInput, {nullable:true})
    developers?: DeveloperCreateNestedManyWithoutGroupInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
