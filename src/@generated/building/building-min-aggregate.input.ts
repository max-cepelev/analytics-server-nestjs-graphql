import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class BuildingMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    address?: true;

    @Field(() => Boolean, {nullable:true})
    completionDate?: true;

    @Field(() => Boolean, {nullable:true})
    completed?: true;

    @Field(() => Boolean, {nullable:true})
    latitude?: true;

    @Field(() => Boolean, {nullable:true})
    longitude?: true;

    @Field(() => Boolean, {nullable:true})
    propertyClass?: true;

    @Field(() => Boolean, {nullable:true})
    decorType?: true;

    @Field(() => Boolean, {nullable:true})
    wallMaterial?: true;

    @Field(() => Boolean, {nullable:true})
    img?: true;

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

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
