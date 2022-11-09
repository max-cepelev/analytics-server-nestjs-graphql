import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Lead {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    uniq_id!: string | null;

    @Field(() => String, {nullable:true})
    host!: string | null;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    form_name!: string | null;

    @Field(() => String, {nullable:true})
    form_id!: string | null;

    @Field(() => String, {nullable:true})
    tran_id!: string | null;

    @Field(() => String, {nullable:true})
    utm_source!: string | null;

    @Field(() => String, {nullable:true})
    utm_medium!: string | null;

    @Field(() => String, {nullable:true})
    utm_campaign!: string | null;

    @Field(() => String, {nullable:true})
    utm_term!: string | null;
}
