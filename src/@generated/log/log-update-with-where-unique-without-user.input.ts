import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { Type } from 'class-transformer';
import { LogUpdateWithoutUserInput } from './log-update-without-user.input';

@InputType()
export class LogUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    @Type(() => LogWhereUniqueInput)
    where!: LogWhereUniqueInput;

    @Field(() => LogUpdateWithoutUserInput, {nullable:false})
    @Type(() => LogUpdateWithoutUserInput)
    data!: LogUpdateWithoutUserInput;
}
