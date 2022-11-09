import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { EnumPropertyTypeFilter } from '../prisma/enum-property-type-filter.input';

@InputType()
export class PropertyScalarWhereInput {

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    AND?: Array<PropertyScalarWhereInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    OR?: Array<PropertyScalarWhereInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    NOT?: Array<PropertyScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    number?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    floor?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    entrance?: IntNullableFilter;

    @Field(() => FloatFilter, {nullable:true})
    totalArea?: FloatFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    livingArea?: FloatNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    rooms?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    wallHeight?: FloatNullableFilter;

    @Field(() => EnumPropertyTypeFilter, {nullable:true})
    propertyType?: EnumPropertyTypeFilter;

    @Field(() => IntFilter, {nullable:true})
    buildingId?: IntFilter;
}
