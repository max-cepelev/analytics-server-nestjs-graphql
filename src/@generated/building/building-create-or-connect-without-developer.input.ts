import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutDeveloperInput } from './building-create-without-developer.input';

@InputType()
export class BuildingCreateOrConnectWithoutDeveloperInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingCreateWithoutDeveloperInput, {nullable:false})
    @Type(() => BuildingCreateWithoutDeveloperInput)
    create!: BuildingCreateWithoutDeveloperInput;
}
