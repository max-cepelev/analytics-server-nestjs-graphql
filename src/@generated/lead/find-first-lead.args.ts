import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { LeadWhereInput } from './lead-where.input';
import { Type } from 'class-transformer';
import { LeadOrderByWithRelationInput } from './lead-order-by-with-relation.input';
import { LeadWhereUniqueInput } from './lead-where-unique.input';
import { Int } from '@nestjs/graphql';
import { LeadScalarFieldEnum } from './lead-scalar-field.enum';

@ArgsType()
export class FindFirstLeadArgs {

    @Field(() => LeadWhereInput, {nullable:true})
    @Type(() => LeadWhereInput)
    where?: LeadWhereInput;

    @Field(() => [LeadOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<LeadOrderByWithRelationInput>;

    @Field(() => LeadWhereUniqueInput, {nullable:true})
    cursor?: LeadWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [LeadScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof LeadScalarFieldEnum>;
}
