import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { BuildingUncheckedCreateNestedManyWithoutDeveloperInput } from '../building/building-unchecked-create-nested-many-without-developer.input';

@InputType()
export class DeveloperUncheckedCreateWithoutGroupInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => BuildingUncheckedCreateNestedManyWithoutDeveloperInput, {nullable:true})
    buildings?: BuildingUncheckedCreateNestedManyWithoutDeveloperInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
