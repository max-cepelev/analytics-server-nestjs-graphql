import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutDeveloperInput } from './building-update-without-developer.input';

@InputType()
export class BuildingUpdateWithWhereUniqueWithoutDeveloperInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutDeveloperInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutDeveloperInput)
    data!: BuildingUpdateWithoutDeveloperInput;
}
