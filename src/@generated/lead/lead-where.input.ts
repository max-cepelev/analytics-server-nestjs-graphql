import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class LeadWhereInput {

    @Field(() => [LeadWhereInput], {nullable:true})
    AND?: Array<LeadWhereInput>;

    @Field(() => [LeadWhereInput], {nullable:true})
    OR?: Array<LeadWhereInput>;

    @Field(() => [LeadWhereInput], {nullable:true})
    NOT?: Array<LeadWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    uniq_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    host?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    form_name?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    form_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tran_id?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utm_source?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utm_medium?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utm_campaign?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    utm_term?: StringNullableFilter;
}
