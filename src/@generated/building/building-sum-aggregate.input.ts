import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BuildingSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    latitude?: true;

    @Field(() => Boolean, {nullable:true})
    longitude?: true;

    @Field(() => Boolean, {nullable:true})
    domRfId?: true;

    @Field(() => Boolean, {nullable:true})
    domClickId?: true;

    @Field(() => Boolean, {nullable:true})
    cityId?: true;

    @Field(() => Boolean, {nullable:true})
    districtId?: true;

    @Field(() => Boolean, {nullable:true})
    developerId?: true;

    @Field(() => Boolean, {nullable:true})
    groupId?: true;

    @Field(() => Boolean, {nullable:true})
    complexId?: true;
}
