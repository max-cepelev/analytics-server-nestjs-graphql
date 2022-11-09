import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTokenInput } from '../user/user-create-nested-one-without-token.input';

@InputType()
export class TokenCreateInput {

    @Field(() => String, {nullable:false})
    refreshToken!: string;

    @Field(() => UserCreateNestedOneWithoutTokenInput, {nullable:false})
    user!: UserCreateNestedOneWithoutTokenInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
