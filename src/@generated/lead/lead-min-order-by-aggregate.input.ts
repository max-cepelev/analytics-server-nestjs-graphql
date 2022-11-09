import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class LeadMinOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    uniq_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    host?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    form_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tran_id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utm_source?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utm_medium?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utm_campaign?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    utm_term?: keyof typeof SortOrder;
}
