import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutDevelopersInput } from './group-create-without-developers.input';

@InputType()
export class GroupCreateOrConnectWithoutDevelopersInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateWithoutDevelopersInput, {nullable:false})
    @Type(() => GroupCreateWithoutDevelopersInput)
    create!: GroupCreateWithoutDevelopersInput;
}
