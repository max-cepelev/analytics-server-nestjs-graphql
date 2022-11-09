import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { LogCreateWithoutUserInput } from './log-create-without-user.input';
import { Type } from 'class-transformer';
import { LogCreateOrConnectWithoutUserInput } from './log-create-or-connect-without-user.input';
import { LogCreateManyUserInputEnvelope } from './log-create-many-user-input-envelope.input';
import { LogWhereUniqueInput } from './log-where-unique.input';

@InputType()
export class LogCreateNestedManyWithoutUserInput {

    @Field(() => [LogCreateWithoutUserInput], {nullable:true})
    @Type(() => LogCreateWithoutUserInput)
    create?: Array<LogCreateWithoutUserInput>;

    @Field(() => [LogCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => LogCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<LogCreateOrConnectWithoutUserInput>;

    @Field(() => LogCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => LogCreateManyUserInputEnvelope)
    createMany?: LogCreateManyUserInputEnvelope;

    @Field(() => [LogWhereUniqueInput], {nullable:true})
    @Type(() => LogWhereUniqueInput)
    connect?: Array<LogWhereUniqueInput>;
}
