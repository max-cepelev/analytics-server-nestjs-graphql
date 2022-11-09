import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupOrderByWithRelationInput } from '../group/group-order-by-with-relation.input';
import { CityOrderByWithRelationInput } from '../city/city-order-by-with-relation.input';
import { DistrictOrderByWithRelationInput } from '../district/district-order-by-with-relation.input';
import { BuildingOrderByRelationAggregateInput } from '../building/building-order-by-relation-aggregate.input';

@InputType()
export class ComplexOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shortName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    info?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domRfId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    domClickId?: keyof typeof SortOrder;

    @Field(() => GroupOrderByWithRelationInput, {nullable:true})
    group?: GroupOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: CityOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => DistrictOrderByWithRelationInput, {nullable:true})
    district?: DistrictOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    districtId?: keyof typeof SortOrder;

    @Field(() => BuildingOrderByRelationAggregateInput, {nullable:true})
    buildings?: BuildingOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
