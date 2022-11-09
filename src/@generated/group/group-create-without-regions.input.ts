import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateNestedManyWithoutGroupInput } from '../building/building-create-nested-many-without-group.input';
import { DeveloperCreateNestedManyWithoutGroupInput } from '../developer/developer-create-nested-many-without-group.input';
import { ComplexCreateNestedManyWithoutGroupInput } from '../complex/complex-create-nested-many-without-group.input';

@InputType()
export class GroupCreateWithoutRegionsInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BuildingCreateNestedManyWithoutGroupInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutGroupInput;

    @Field(() => DeveloperCreateNestedManyWithoutGroupInput, {nullable:true})
    developers?: DeveloperCreateNestedManyWithoutGroupInput;

    @Field(() => ComplexCreateNestedManyWithoutGroupInput, {nullable:true})
    complexes?: ComplexCreateNestedManyWithoutGroupInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
