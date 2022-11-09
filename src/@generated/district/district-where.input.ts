import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CityRelationFilter } from '../city/city-relation-filter.input';
import { ComplexListRelationFilter } from '../complex/complex-list-relation-filter.input';
import { BuildingListRelationFilter } from '../building/building-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class DistrictWhereInput {

    @Field(() => [DistrictWhereInput], {nullable:true})
    AND?: Array<DistrictWhereInput>;

    @Field(() => [DistrictWhereInput], {nullable:true})
    OR?: Array<DistrictWhereInput>;

    @Field(() => [DistrictWhereInput], {nullable:true})
    NOT?: Array<DistrictWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => CityRelationFilter, {nullable:true})
    city?: CityRelationFilter;

    @Field(() => IntFilter, {nullable:true})
    cityId?: IntFilter;

    @Field(() => ComplexListRelationFilter, {nullable:true})
    complexes?: ComplexListRelationFilter;

    @Field(() => BuildingListRelationFilter, {nullable:true})
    buildings?: BuildingListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
