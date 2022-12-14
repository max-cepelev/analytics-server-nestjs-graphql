import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ComplexScalarWhereInput {

    @Field(() => [ComplexScalarWhereInput], {nullable:true})
    AND?: Array<ComplexScalarWhereInput>;

    @Field(() => [ComplexScalarWhereInput], {nullable:true})
    OR?: Array<ComplexScalarWhereInput>;

    @Field(() => [ComplexScalarWhereInput], {nullable:true})
    NOT?: Array<ComplexScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    shortName?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    info?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    domRfId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    domClickId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    cityId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    districtId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
