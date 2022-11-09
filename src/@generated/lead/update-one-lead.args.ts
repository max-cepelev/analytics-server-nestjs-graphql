import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadUpdateInput } from './lead-update.input';
import { Type } from 'class-transformer';
import { LeadWhereUniqueInput } from './lead-where-unique.input';

@ArgsType()
export class UpdateOneLeadArgs {

    @Field(() => LeadUpdateInput, {nullable:false})
    @Type(() => LeadUpdateInput)
    data!: LeadUpdateInput;

    @Field(() => LeadWhereUniqueInput, {nullable:false})
    @Type(() => LeadWhereUniqueInput)
    where!: LeadWhereUniqueInput;
}
