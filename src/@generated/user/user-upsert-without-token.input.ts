import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTokenInput } from './user-update-without-token.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTokenInput } from './user-create-without-token.input';

@InputType()
export class UserUpsertWithoutTokenInput {

    @Field(() => UserUpdateWithoutTokenInput, {nullable:false})
    @Type(() => UserUpdateWithoutTokenInput)
    update!: UserUpdateWithoutTokenInput;

    @Field(() => UserCreateWithoutTokenInput, {nullable:false})
    @Type(() => UserCreateWithoutTokenInput)
    create!: UserCreateWithoutTokenInput;
}
