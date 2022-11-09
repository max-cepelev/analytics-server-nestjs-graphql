import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadCreateManyInput } from './lead-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyLeadArgs {

    @Field(() => [LeadCreateManyInput], {nullable:false})
    @Type(() => LeadCreateManyInput)
    data!: Array<LeadCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
