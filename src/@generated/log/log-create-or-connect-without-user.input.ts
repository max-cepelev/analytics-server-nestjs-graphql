import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from './log-where-unique.input';
import { Type } from 'class-transformer';
import { LogCreateWithoutUserInput } from './log-create-without-user.input';

@InputType()
export class LogCreateOrConnectWithoutUserInput {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    @Type(() => LogWhereUniqueInput)
    where!: LogWhereUniqueInput;

    @Field(() => LogCreateWithoutUserInput, {nullable:false})
    @Type(() => LogCreateWithoutUserInput)
    create!: LogCreateWithoutUserInput;
}
