import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenCreateWithoutUserInput } from './token-create-without-user.input';
import { Type } from 'class-transformer';
import { TokenCreateOrConnectWithoutUserInput } from './token-create-or-connect-without-user.input';
import { TokenUpsertWithoutUserInput } from './token-upsert-without-user.input';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { TokenUpdateWithoutUserInput } from './token-update-without-user.input';

@InputType()
export class TokenUncheckedUpdateOneWithoutUserNestedInput {

    @Field(() => TokenCreateWithoutUserInput, {nullable:true})
    @Type(() => TokenCreateWithoutUserInput)
    create?: TokenCreateWithoutUserInput;

    @Field(() => TokenCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => TokenCreateOrConnectWithoutUserInput)
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput;

    @Field(() => TokenUpsertWithoutUserInput, {nullable:true})
    @Type(() => TokenUpsertWithoutUserInput)
    upsert?: TokenUpsertWithoutUserInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => TokenWhereUniqueInput, {nullable:true})
    @Type(() => TokenWhereUniqueInput)
    connect?: TokenWhereUniqueInput;

    @Field(() => TokenUpdateWithoutUserInput, {nullable:true})
    @Type(() => TokenUpdateWithoutUserInput)
    update?: TokenUpdateWithoutUserInput;
}
