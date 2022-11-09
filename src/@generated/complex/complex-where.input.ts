import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { GroupRelationFilter } from '../group/group-relation-filter.input';
import { CityRelationFilter } from '../city/city-relation-filter.input';
import { DistrictRelationFilter } from '../district/district-relation-filter.input';
import { BuildingListRelationFilter } from '../building/building-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ComplexWhereInput {

    @Field(() => [ComplexWhereInput], {nullable:true})
    AND?: Array<ComplexWhereInput>;

    @Field(() => [ComplexWhereInput], {nullable:true})
    OR?: Array<ComplexWhereInput>;

    @Field(() => [ComplexWhereInput], {nullable:true})
    NOT?: Array<ComplexWhereInput>;

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

    @Field(() => GroupRelationFilter, {nullable:true})
    group?: GroupRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => CityRelationFilter, {nullable:true})
    city?: CityRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    cityId?: IntFilter;

    @Field(() => DistrictRelationFilter, {nullable:true})
    district?: DistrictRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    districtId?: IntFilter;

    @Field(() => BuildingListRelationFilter, {nullable:true})
    buildings?: BuildingListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
