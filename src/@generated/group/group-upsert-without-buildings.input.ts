import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateWithoutBuildingsInput } from './group-update-without-buildings.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutBuildingsInput } from './group-create-without-buildings.input';

@InputType()
export class GroupUpsertWithoutBuildingsInput {

    @Field(() => GroupUpdateWithoutBuildingsInput, {nullable:false})
    @Type(() => GroupUpdateWithoutBuildingsInput)
    update!: GroupUpdateWithoutBuildingsInput;

    @Field(() => GroupCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => GroupCreateWithoutBuildingsInput)
    create!: GroupCreateWithoutBuildingsInput;
}
