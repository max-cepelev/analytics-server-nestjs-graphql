import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { Type } from 'class-transformer';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';

@InputType()
export class TokenCreateOrConnectWithoutUserInput {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    @Type(() => TokenWhereUniqueInput)
    where!: TokenWhereUniqueInput;

    @Field(() => TokenCreateWithoutUserInput, {nullable:false})
    @Type(() => TokenCreateWithoutUserInput)
    create!: TokenCreateWithoutUserInput;
}
