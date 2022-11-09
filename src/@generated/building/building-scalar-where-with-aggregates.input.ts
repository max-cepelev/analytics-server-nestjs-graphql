import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { EnumPropertyClassNullableWithAggregatesFilter } from '../prisma/enum-property-class-nullable-with-aggregates-filter.input';
import { EnumDecorTypeNullableWithAggregatesFilter } from '../prisma/enum-decor-type-nullable-with-aggregates-filter.input';
import { EnumWallMaterialNullableWithAggregatesFilter } from '../prisma/enum-wall-material-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class BuildingScalarWhereWithAggregatesInput {

    @Field(() => [BuildingScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<BuildingScalarWhereWithAggregatesInput>;

    @Field(() => [BuildingScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<BuildingScalarWhereWithAggregatesInput>;

    @Field(() => [BuildingScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<BuildingScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    address?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    completionDate?: DateTimeWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    completed?: BoolWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    latitude?: FloatNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    longitude?: FloatNullableWithAggregatesFilter;

    @Field(() => EnumPropertyClassNullableWithAggregatesFilter, {nullable:true})
    propertyClass?: EnumPropertyClassNullableWithAggregatesFilter;

    @Field(() => EnumDecorTypeNullableWithAggregatesFilter, {nullable:true})
    decorType?: EnumDecorTypeNullableWithAggregatesFilter;

    @Field(() => EnumWallMaterialNullableWithAggregatesFilter, {nullable:true})
    wallMaterial?: EnumWallMaterialNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    img?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    domRfId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    domClickId?: IntNullableWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cityId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    districtId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    developerId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    groupId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    complexId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
