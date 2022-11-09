import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadWhereUniqueInput } from './lead-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneLeadArgs {

    @Field(() => LeadWhereUniqueInput, {nullable:false})
    @Type(() => LeadWhereUniqueInput)
    where!: LeadWhereUniqueInput;
}
