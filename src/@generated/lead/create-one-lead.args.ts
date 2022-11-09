import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadCreateInput } from './lead-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneLeadArgs {

    @Field(() => LeadCreateInput, {nullable:false})
    @Type(() => LeadCreateInput)
    data!: LeadCreateInput;
}
