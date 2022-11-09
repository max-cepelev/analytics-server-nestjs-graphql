import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutLogsInput } from './user-create-without-logs.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutLogsInput } from './user-create-or-connect-without-logs.input';
import { UserUpsertWithoutLogsInput } from './user-upsert-without-logs.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutLogsInput } from './user-update-without-logs.input';

@InputType()
export class UserUpdateOneRequiredWithoutLogsNestedInput {

    @Field(() => UserCreateWithoutLogsInput, {nullable:true})
    @Type(() => UserCreateWithoutLogsInput)
    create?: UserCreateWithoutLogsInput;

    @Field(() => UserCreateOrConnectWithoutLogsInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutLogsInput)
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput;

    @Field(() => UserUpsertWithoutLogsInput, {nullable:true})
    @Type(() => UserUpsertWithoutLogsInput)
    upsert?: UserUpsertWithoutLogsInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutLogsInput, {nullable:true})
    @Type(() => UserUpdateWithoutLogsInput)
    update?: UserUpdateWithoutLogsInput;
}
