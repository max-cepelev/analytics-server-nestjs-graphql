import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LeadCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    uniq_id?: true;

    @Field(() => Boolean, {nullable:true})
    host?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    phone?: true;

    @Field(() => Boolean, {nullable:true})
    email?: true;

    @Field(() => Boolean, {nullable:true})
    form_name?: true;

    @Field(() => Boolean, {nullable:true})
    form_id?: true;

    @Field(() => Boolean, {nullable:true})
    tran_id?: true;

    @Field(() => Boolean, {nullable:true})
    utm_source?: true;

    @Field(() => Boolean, {nullable:true})
    utm_medium?: true;

    @Field(() => Boolean, {nullable:true})
    utm_campaign?: true;

    @Field(() => Boolean, {nullable:true})
    utm_term?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
