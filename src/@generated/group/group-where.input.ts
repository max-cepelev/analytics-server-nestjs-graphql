import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { RegionListRelationFilter } from '../region/region-list-relation-filter.input';
import { BuildingListRelationFilter } from '../building/building-list-relation-filter.input';
import { DeveloperListRelationFilter } from '../developer/developer-list-relation-filter.input';
import { ComplexListRelationFilter } from '../complex/complex-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class GroupWhereInput {

    @Field(() => [GroupWhereInput], {nullable:true})
    AND?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    OR?: Array<GroupWhereInput>;

    @Field(() => [GroupWhereInput], {nullable:true})
    NOT?: Array<GroupWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => RegionListRelationFilter, {nullable:true})
    regions?: RegionListRelationFilter;

    @Field(() => BuildingListRelationFilter, {nullable:true})
    buildings?: BuildingListRelationFilter;

    @Field(() => DeveloperListRelationFilter, {nullable:true})
    developers?: DeveloperListRelationFilter;

    @Field(() => ComplexListRelationFilter, {nullable:true})
    complexes?: ComplexListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
