import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereUniqueInput } from './token-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneTokenArgs {

    @Field(() => TokenWhereUniqueInput, {nullable:false})
    @Type(() => TokenWhereUniqueInput)
    where!: TokenWhereUniqueInput;
}
