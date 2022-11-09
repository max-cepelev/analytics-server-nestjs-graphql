import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutDevelopersInput } from './group-create-without-developers.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutDevelopersInput } from './group-create-or-connect-without-developers.input';
import { GroupUpsertWithoutDevelopersInput } from './group-upsert-without-developers.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithoutDevelopersInput } from './group-update-without-developers.input';

@InputType()
export class GroupUpdateOneRequiredWithoutDevelopersNestedInput {

    @Field(() => GroupCreateWithoutDevelopersInput, {nullable:true})
    @Type(() => GroupCreateWithoutDevelopersInput)
    create?: GroupCreateWithoutDevelopersInput;

    @Field(() => GroupCreateOrConnectWithoutDevelopersInput, {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutDevelopersInput)
    connectOrCreate?: GroupCreateOrConnectWithoutDevelopersInput;

    @Field(() => GroupUpsertWithoutDevelopersInput, {nullable:true})
    @Type(() => GroupUpsertWithoutDevelopersInput)
    upsert?: GroupUpsertWithoutDevelopersInput;

    @Field(() => GroupWhereUniqueInput, {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutDevelopersInput, {nullable:true})
    @Type(() => GroupUpdateWithoutDevelopersInput)
    update?: GroupUpdateWithoutDevelopersInput;
}
