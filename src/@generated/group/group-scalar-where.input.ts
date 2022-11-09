import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GroupScalarWhereInput {

    @Field(() => [GroupScalarWhereInput], {nullable:true})
    AND?: Array<GroupScalarWhereInput>;

    @Field(() => [GroupScalarWhereInput], {nullable:true})
    OR?: Array<GroupScalarWhereInput>;

    @Field(() => [GroupScalarWhereInput], {nullable:true})
    NOT?: Array<GroupScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
