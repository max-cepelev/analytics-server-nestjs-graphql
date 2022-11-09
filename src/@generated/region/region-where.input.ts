import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CityListRelationFilter } from '../city/city-list-relation-filter.input';
import { GroupListRelationFilter } from '../group/group-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class RegionWhereInput {

    @Field(() => [RegionWhereInput], {nullable:true})
    AND?: Array<RegionWhereInput>;

    @Field(() => [RegionWhereInput], {nullable:true})
    OR?: Array<RegionWhereInput>;

    @Field(() => [RegionWhereInput], {nullable:true})
    NOT?: Array<RegionWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => CityListRelationFilter, {nullable:true})
    cities?: CityListRelationFilter;

    @Field(() => GroupListRelationFilter, {nullable:true})
    groups?: GroupListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
