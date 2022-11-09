import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenUpdateWithoutUserInput } from './token-update-without-user.input';
import { Type } from 'class-transformer';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';

@InputType()
export class TokenUpsertWithoutUserInput {

    @Field(() => TokenUpdateWithoutUserInput, {nullable:false})
    @Type(() => TokenUpdateWithoutUserInput)
    update!: TokenUpdateWithoutUserInput;

    @Field(() => TokenCreateWithoutUserInput, {nullable:false})
    @Type(() => TokenCreateWithoutUserInput)
    create!: TokenCreateWithoutUserInput;
}
