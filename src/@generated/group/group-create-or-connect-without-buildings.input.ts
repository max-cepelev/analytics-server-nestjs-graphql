import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutBuildingsInput } from './group-create-without-buildings.input';

@InputType()
export class GroupCreateOrConnectWithoutBuildingsInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => GroupCreateWithoutBuildingsInput)
    create!: GroupCreateWithoutBuildingsInput;
}
