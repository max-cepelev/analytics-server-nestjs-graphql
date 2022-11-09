import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { Type } from 'class-transformer';
import { LogCreateInput } from './log-create.input';
import { LogUpdateInput } from './log-update.input';

@ArgsType()
export class UpsertOneLogArgs {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    @Type(() => LogWhereUniqueInput)
    where!: LogWhereUniqueInput;

    @Field(() => LogCreateInput, {nullable:false})
    @Type(() => LogCreateInput)
    create!: LogCreateInput;

    @Field(() => LogUpdateInput, {nullable:false})
    @Type(() => LogUpdateInput)
    update!: LogUpdateInput;
}
