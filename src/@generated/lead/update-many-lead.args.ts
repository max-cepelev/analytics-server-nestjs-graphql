import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadUpdateManyMutationInput } from './lead-update-many-mutation.input';
import { Type } from 'class-transformer';
import { LeadWhereInput } from './lead-where.input';

@ArgsType()
export class UpdateManyLeadArgs {

    @Field(() => LeadUpdateManyMutationInput, {nullable:false})
    @Type(() => LeadUpdateManyMutationInput)
    data!: LeadUpdateManyMutationInput;

    @Field(() => LeadWhereInput, {nullable:true})
    @Type(() => LeadWhereInput)
    where?: LeadWhereInput;
}
