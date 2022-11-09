import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class PropertyMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    number?: true;

    @Field(() => Boolean, {nullable:true})
    floor?: true;

    @Field(() => Boolean, {nullable:true})
    entrance?: true;

    @Field(() => Boolean, {nullable:true})
    totalArea?: true;

    @Field(() => Boolean, {nullable:true})
    livingArea?: true;

    @Field(() => Boolean, {nullable:true})
    rooms?: true;

    @Field(() => Boolean, {nullable:true})
    wallHeight?: true;

    @Field(() => Boolean, {nullable:true})
    propertyType?: true;

    @Field(() => Boolean, {nullable:true})
    buildingId?: true;
}
