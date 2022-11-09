import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class TokenScalarWhereWithAggregatesInput {

    @Field(() => [TokenScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TokenScalarWhereWithAggregatesInput>;

    @Field(() => [TokenScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TokenScalarWhereWithAggregatesInput>;

    @Field(() => [TokenScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TokenScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    refreshToken?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
