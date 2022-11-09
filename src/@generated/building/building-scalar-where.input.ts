import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumPropertyClassNullableFilter } from '../prisma/enum-property-class-nullable-filter.input';
import { EnumDecorTypeNullableFilter } from '../prisma/enum-decor-type-nullable-filter.input';
import { EnumWallMaterialNullableFilter } from '../prisma/enum-wall-material-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class BuildingScalarWhereInput {

    @Field(() => [BuildingScalarWhereInput], {nullable:true})
    AND?: Array<BuildingScalarWhereInput>;

    @Field(() => [BuildingScalarWhereInput], {nullable:true})
    OR?: Array<BuildingScalarWhereInput>;

    @Field(() => [BuildingScalarWhereInput], {nullable:true})
    NOT?: Array<BuildingScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    completionDate?: DateTimeFilter;

    @Field(() => BoolFilter, {nullable:true})
    completed?: BoolFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    latitude?: FloatNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    longitude?: FloatNullableFilter;

    @Field(() => EnumPropertyClassNullableFilter, {nullable:true})
    propertyClass?: EnumPropertyClassNullableFilter;

    @Field(() => EnumDecorTypeNullableFilter, {nullable:true})
    decorType?: EnumDecorTypeNullableFilter;

    @Field(() => EnumWallMaterialNullableFilter, {nullable:true})
    wallMaterial?: EnumWallMaterialNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    img?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    domRfId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    domClickId?: IntNullableFilter;

    @Field(() => IntFilter, {nullable:true})
    cityId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    districtId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    developerId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    groupId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    complexId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
