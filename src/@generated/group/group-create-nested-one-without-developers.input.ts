import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutDevelopersInput } from './group-create-without-developers.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutDevelopersInput } from './group-create-or-connect-without-developers.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';

@InputType()
export class GroupCreateNestedOneWithoutDevelopersInput {

    @Field(() => GroupCreateWithoutDevelopersInput, {nullable:true})
    @Type(() => GroupCreateWithoutDevelopersInput)
    create?: GroupCreateWithoutDevelopersInput;

    @Field(() => GroupCreateOrConnectWithoutDevelopersInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutDevelopersInput)
    connectOrCreate?: GroupCreateOrConnectWithoutDevelopersInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;
}
