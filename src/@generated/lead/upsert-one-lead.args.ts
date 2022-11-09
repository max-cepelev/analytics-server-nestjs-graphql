import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadWhereUniqueInput } from './lead-where-unique.input';
import { Type } from 'class-transformer';
import { LeadCreateInput } from './lead-create.input';
import { LeadUpdateInput } from './lead-update.input';

@ArgsType()
export class UpsertOneLeadArgs {

    @Field(() => LeadWhereUniqueInput, {nullable:false})
    @Type(() => LeadWhereUniqueInput)
    where!: LeadWhereUniqueInput;

    @Field(() => LeadCreateInput, {nullable:false})
    @Type(() => LeadCreateInput)
    create!: LeadCreateInput;

    @Field(() => LeadUpdateInput, {nullable:false})
    @Type(() => LeadUpdateInput)
    update!: LeadUpdateInput;
}
