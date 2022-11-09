import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class LogScalarWhereWithAggregatesInput {

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => [LogScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<LogScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    operation?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;
}
