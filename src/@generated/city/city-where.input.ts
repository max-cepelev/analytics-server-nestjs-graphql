import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionRelationFilter } from '../region/region-relation-filter.input';
import { DistrictListRelationFilter } from '../district/district-list-relation-filter.input';
import { ComplexListRelationFilter } from '../complex/complex-list-relation-filter.input';
import { BuildingListRelationFilter } from '../building/building-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CityWhereInput {

    @Field(() => [CityWhereInput], {nullable:true})
    AND?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    OR?: Array<CityWhereInput>;

    @Field(() => [CityWhereInput], {nullable:true})
    NOT?: Array<CityWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    regionId?: IntFilter;

    @Field(() => RegionRelationFilter, {nullable:true})
    region?: RegionRelationFilter;

    @Field(() => DistrictListRelationFilter, {nullable:true})
    districts?: DistrictListRelationFilter;

    @Field(() => ComplexListRelationFilter, {nullable:true})
    complexes?: ComplexListRelationFilter;

    @Field(() => BuildingListRelationFilter, {nullable:true})
    buildings?: BuildingListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
