import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LogWhereUniqueInput } from '../log/log-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLogOrThrowArgs {

    @Field(() => LogWhereUniqueInput, {nullable:false})
    @Type(() => LogWhereUniqueInput)
    where!: LogWhereUniqueInput;
}
