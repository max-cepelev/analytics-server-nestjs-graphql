import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TokenWhereInput } from './token-where.input';

@InputType()
export class TokenRelationFilter {

    @Field(() => TokenWhereInput, {nullable:true})
    is?: TokenWhereInput;

    @Field(() => TokenWhereInput, {nullable:true})
    isNot?: TokenWhereInput;
}
