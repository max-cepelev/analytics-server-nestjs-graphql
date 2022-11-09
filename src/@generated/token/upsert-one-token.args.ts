import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { Type } from 'class-transformer';
import { TokenCreateInput } from './token-create.input';
import { TokenUpdateInput } from './token-update.input';

@ArgsType()
export class UpsertOneTokenArgs {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    @Type(() => TokenWhereUniqueInput)
    where!: TokenWhereUniqueInput;

    @Field(() => TokenCreateInput, {nullable:false})
    @Type(() => TokenCreateInput)
    create!: TokenCreateInput;

    @Field(() => TokenUpdateInput, {nullable:false})
    @Type(() => TokenUpdateInput)
    update!: TokenUpdateInput;
}
