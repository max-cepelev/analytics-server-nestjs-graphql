import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadWhereInput } from './lead-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyLeadArgs {

    @Field(() => LeadWhereInput, {nullable:true})
    @Type(() => LeadWhereInput)
    where?: LeadWhereInput;
}
