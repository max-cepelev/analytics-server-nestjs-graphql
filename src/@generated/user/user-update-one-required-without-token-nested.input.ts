import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTokenInput } from './user-create-without-token.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTokenInput } from './user-create-or-connect-without-token.input';
import { UserUpsertWithoutTokenInput } from './user-upsert-without-token.input';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutTokenInput } from './user-update-without-token.input';

@InputType()
export class UserUpdateOneRequiredWithoutTokenNestedInput {

    @Field(() => UserCreateWithoutTokenInput, {nullable:true})
    @Type(() => UserCreateWithoutTokenInput)
    create?: UserCreateWithoutTokenInput;

    @Field(() => UserCreateOrConnectWithoutTokenInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTokenInput)
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput;

    @Field(() => UserUpsertWithoutTokenInput, {nullable:true})
    @Type(() => UserUpsertWithoutTokenInput)
    upsert?: UserUpsertWithoutTokenInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;

    @Field(() => UserUpdateWithoutTokenInput, {nullable:true})
    @Type(() => UserUpdateWithoutTokenInput)
    update?: UserUpdateWithoutTokenInput;
}
