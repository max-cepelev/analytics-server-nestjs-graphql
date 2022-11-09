import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateNestedOneWithoutDevelopersInput } from '../group/group-create-nested-one-without-developers.input';
import { BuildingCreateNestedManyWithoutDeveloperInput } from '../building/building-create-nested-many-without-developer.input';

@InputType()
export class DeveloperCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:true})
    legalAddress?: string;

    @Field(() => String, {nullable:true})
    actualAddress?: string;

    @Field(() => String, {nullable:false})
    inn!: string;

    @Field(() => String, {nullable:true})
    kpp?: string;

    @Field(() => String, {nullable:true})
    ogrn?: string;

    @Field(() => String, {nullable:true})
    manager?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    info?: string;

    @Field(() => GroupCreateNestedOneWithoutDevelopersInput, {nullable:false})
    group!: GroupCreateNestedOneWithoutDevelopersInput;

    @Field(() => BuildingCreateNestedManyWithoutDeveloperInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutDeveloperInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
