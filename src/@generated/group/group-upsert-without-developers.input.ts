import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupUpdateWithoutDevelopersInput } from './group-update-without-developers.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutDevelopersInput } from './group-create-without-developers.input';

@InputType()
export class GroupUpsertWithoutDevelopersInput {

    @Field(() => GroupUpdateWithoutDevelopersInput, {nullable:false})
    @Type(() => GroupUpdateWithoutDevelopersInput)
    update!: GroupUpdateWithoutDevelopersInput;

    @Field(() => GroupCreateWithoutDevelopersInput, {nullable:false})
    @Type(() => GroupCreateWithoutDevelopersInput)
    create!: GroupCreateWithoutDevelopersInput;
}
