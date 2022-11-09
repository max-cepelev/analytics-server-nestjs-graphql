import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildingUncheckedCreateNestedManyWithoutGroupInput } from '../building/building-unchecked-create-nested-many-without-group.input';
import { DeveloperUncheckedCreateNestedManyWithoutGroupInput } from '../developer/developer-unchecked-create-nested-many-without-group.input';
import { ComplexUncheckedCreateNestedManyWithoutGroupInput } from '../complex/complex-unchecked-create-nested-many-without-group.input';

@InputType()
export class GroupUncheckedCreateWithoutRegionsInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BuildingUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    buildings?: BuildingUncheckedCreateNestedManyWithoutGroupInput;

    @Field(() => DeveloperUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    developers?: DeveloperUncheckedCreateNestedManyWithoutGroupInput;

    @Field(() => ComplexUncheckedCreateNestedManyWithoutGroupInput, {nullable:true})
    complexes?: ComplexUncheckedCreateNestedManyWithoutGroupInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
