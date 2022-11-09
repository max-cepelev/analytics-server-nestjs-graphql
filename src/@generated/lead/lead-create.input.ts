import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LeadCreateInput {

    @Field(() => String, {nullable:true})
    uniq_id?: string;

    @Field(() => String, {nullable:true})
    host?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    form_name?: string;

    @Field(() => String, {nullable:true})
    form_id?: string;

    @Field(() => String, {nullable:true})
    tran_id?: string;

    @Field(() => String, {nullable:true})
    utm_source?: string;

    @Field(() => String, {nullable:true})
    utm_medium?: string;

    @Field(() => String, {nullable:true})
    utm_campaign?: string;

    @Field(() => String, {nullable:true})
    utm_term?: string;
}
