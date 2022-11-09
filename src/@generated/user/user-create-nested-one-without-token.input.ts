import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTokenInput } from './user-create-without-token.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTokenInput } from './user-create-or-connect-without-token.input';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTokenInput {

    @Field(() => UserCreateWithoutTokenInput, {nullable:true})
    @Type(() => UserCreateWithoutTokenInput)
    create?: UserCreateWithoutTokenInput;

    @Field(() => UserCreateOrConnectWithoutTokenInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTokenInput)
    connectOrCreate?: UserCreateOrConnectWithoutTokenInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: UserWhereUniqueInput;
}
