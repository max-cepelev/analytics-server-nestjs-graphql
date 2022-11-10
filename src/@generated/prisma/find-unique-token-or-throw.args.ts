import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from '../token/token-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueTokenOrThrowArgs {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    @Type(() => TokenWhereUniqueInput)
    where!: TokenWhereUniqueInput;
}
