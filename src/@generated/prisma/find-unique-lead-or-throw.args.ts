import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadWhereUniqueInput } from '../lead/lead-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueLeadOrThrowArgs {

    @Field(() => LeadWhereUniqueInput, {nullable:false})
    @Type(() => LeadWhereUniqueInput)
    where!: LeadWhereUniqueInput;
}
