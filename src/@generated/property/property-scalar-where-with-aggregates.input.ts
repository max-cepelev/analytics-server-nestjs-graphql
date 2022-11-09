import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { EnumPropertyTypeWithAggregatesFilter } from '../prisma/enum-property-type-with-aggregates-filter.input';

@InputType()
export class PropertyScalarWhereWithAggregatesInput {

    @Field(() => [PropertyScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<PropertyScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<PropertyScalarWhereWithAggregatesInput>;

    @Field(() => [PropertyScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<PropertyScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    number?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    floor?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    entrance?: IntNullableWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    totalArea?: FloatWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    livingArea?: FloatNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    rooms?: IntNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    wallHeight?: FloatNullableWithAggregatesFilter;

    @Field(() => EnumPropertyTypeWithAggregatesFilter, {nullable:true})
    propertyType?: EnumPropertyTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    buildingId?: IntWithAggregatesFilter;
}
