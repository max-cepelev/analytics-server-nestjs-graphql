import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { FloatWithAggregatesFilter } from '../prisma/float-with-aggregates-filter.input';
import { EnumPropertyTypeWithAggregatesFilter } from '../prisma/enum-property-type-with-aggregates-filter.input';

@InputType()
export class SaleScalarWhereWithAggregatesInput {

    @Field(() => [SaleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SaleScalarWhereWithAggregatesInput>;

    @Field(() => [SaleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SaleScalarWhereWithAggregatesInput>;

    @Field(() => [SaleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SaleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    month?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    year?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    amount?: IntWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    area?: FloatWithAggregatesFilter;

    @Field(() => FloatWithAggregatesFilter, {nullable:true})
    sum?: FloatWithAggregatesFilter;

    @Field(() => EnumPropertyTypeWithAggregatesFilter, {nullable:true})
    propertyType?: EnumPropertyTypeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    buildingId?: IntWithAggregatesFilter;
}
