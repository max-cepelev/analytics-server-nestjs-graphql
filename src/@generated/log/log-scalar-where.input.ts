import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class LogScalarWhereInput {

    @Field(() => [LogScalarWhereInput], {nullable:true})
    AND?: Array<LogScalarWhereInput>;

    @Field(() => [LogScalarWhereInput], {nullable:true})
    OR?: Array<LogScalarWhereInput>;

    @Field(() => [LogScalarWhereInput], {nullable:true})
    NOT?: Array<LogScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    operation?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;
}
