import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class OfferWhereInput {

    @Field(() => [OfferWhereInput], {nullable:true})
    AND?: Array<OfferWhereInput>;

    @Field(() => [OfferWhereInput], {nullable:true})
    OR?: Array<OfferWhereInput>;

    @Field(() => [OfferWhereInput], {nullable:true})
    NOT?: Array<OfferWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    floor?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    floors?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    price?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    address?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    buildingId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    building?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    developer?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    developerId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    complex?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    complexId?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    area?: FloatNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rooms?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    image?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
