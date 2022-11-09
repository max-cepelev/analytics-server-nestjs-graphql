import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneLogArgs {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    @Type(() => LogWhereUniqueInput)
    where!: LogWhereUniqueInput;
}
