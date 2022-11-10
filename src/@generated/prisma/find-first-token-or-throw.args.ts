import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TokenWhereInput } from '../token/token-where.input';
import { Type } from 'class-transformer';
import { TokenOrderByWithRelationInput } from '../token/token-order-by-with-relation.input';
import { TokenWhereUniqueInput } from '../token/token-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TokenScalarFieldEnum } from '../token/token-scalar-field.enum';

@ArgsType()
export class FindFirstTokenOrThrowArgs {

    @Field(() => TokenWhereInput, {nullable:true})
    @Type(() => TokenWhereInput)
    where?: TokenWhereInput;

    @Field(() => [TokenOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TokenOrderByWithRelationInput>;

    @Field(() => TokenWhereUniqueInput, {nullable:true})
    cursor?: TokenWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TokenScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TokenScalarFieldEnum>;
}
