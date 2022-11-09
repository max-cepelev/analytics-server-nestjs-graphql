import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { GroupRelationFilter } from '../group/group-relation-filter.input';
import { BuildingListRelationFilter } from '../building/building-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DeveloperWhereInput {

    @Field(() => [DeveloperWhereInput], {nullable:true})
    AND?: Array<DeveloperWhereInput>;

    @Field(() => [DeveloperWhereInput], {nullable:true})
    OR?: Array<DeveloperWhereInput>;

    @Field(() => [DeveloperWhereInput], {nullable:true})
    NOT?: Array<DeveloperWhereInput>;

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

    @Field(() => GroupRelationFilter, {nullable:true})
    group?: GroupRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => BuildingListRelationFilter, {nullable:true})
    buildings?: BuildingListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
