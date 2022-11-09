import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DistrictScalarWhereWithAggregatesInput {

    @Field(() => [DistrictScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DistrictScalarWhereWithAggregatesInput>;

    @Field(() => [DistrictScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DistrictScalarWhereWithAggregatesInput>;

    @Field(() => [DistrictScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DistrictScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    cityId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
