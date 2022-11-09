import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';
import { Type } from 'class-transformer';
import { TokenCreateOrConnectWithoutUserInput } from './token-create-or-connect-without-user.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';

@InputType()
export class TokenUncheckedCreateNestedOneWithoutUserInput {

    @Field(() => TokenCreateWithoutUserInput, {nullable:true})
    @Type(() => TokenCreateWithoutUserInput)
    create?: TokenCreateWithoutUserInput;

    @Field(() => TokenCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => TokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput;

    @Field(() => TokenWhereUniqueInput, {nullable:true})
    @Type(() => TokenWhereUniqueInput)
    connect?: TokenWhereUniqueInput;
}
