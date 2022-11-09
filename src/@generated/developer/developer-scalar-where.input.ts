import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DeveloperScalarWhereInput {

    @Field(() => [DeveloperScalarWhereInput], {nullable:true})
    AND?: Array<DeveloperScalarWhereInput>;

    @Field(() => [DeveloperScalarWhereInput], {nullable:true})
    OR?: Array<DeveloperScalarWhereInput>;

    @Field(() => [DeveloperScalarWhereInput], {nullable:true})
    NOT?: Array<DeveloperScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    fullName?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    legalAddress?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    actualAddress?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    inn?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    kpp?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    ogrn?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    manager?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    website?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    phone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    info?: StringNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
