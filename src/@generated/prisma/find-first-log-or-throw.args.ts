import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereInput } from '../log/log-where.input';
import { Type } from 'class-transformer';
import { LogOrderByWithRelationInput } from '../log/log-order-by-with-relation.input';
import { LogWhereUniqueInput } from '../log/log-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LogScalarFieldEnum } from '../log/log-scalar-field.enum';

@ArgsType()
export class FindFirstLogOrThrowArgs {

    @Field(() => LogWhereInput, {nullable:true})
    @Type(() => LogWhereInput)
    where?: LogWhereInput;

    @Field(() => [LogOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LogOrderByWithRelationInput>;

    @Field(() => LogWhereUniqueInput, {nullable:true})
    cursor?: LogWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LogScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LogScalarFieldEnum>;
}
