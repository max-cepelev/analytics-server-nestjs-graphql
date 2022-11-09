import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DistrictScalarWhereInput {

    @Field(() => [DistrictScalarWhereInput], {nullable:true})
    AND?: Array<DistrictScalarWhereInput>;

    @Field(() => [DistrictScalarWhereInput], {nullable:true})
    OR?: Array<DistrictScalarWhereInput>;

    @Field(() => [DistrictScalarWhereInput], {nullable:true})
    NOT?: Array<DistrictScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    cityId?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
