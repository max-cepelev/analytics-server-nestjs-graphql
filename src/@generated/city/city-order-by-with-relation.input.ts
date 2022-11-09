import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RegionOrderByWithRelationInput } from '../region/region-order-by-with-relation.input';
import { DistrictOrderByRelationAggregateInput } from '../district/district-order-by-relation-aggregate.input';
import { ComplexOrderByRelationAggregateInput } from '../complex/complex-order-by-relation-aggregate.input';
import { BuildingOrderByRelationAggregateInput } from '../building/building-order-by-relation-aggregate.input';

@InputType()
export class CityOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    regionId?: keyof typeof SortOrder;

    @Field(() => RegionOrderByWithRelationInput, {nullable:true})
    region?: RegionOrderByWithRelationInput;

    @Field(() => DistrictOrderByRelationAggregateInput, {nullable:true})
    districts?: DistrictOrderByRelationAggregateInput;

    @Field(() => ComplexOrderByRelationAggregateInput, {nullable:true})
    complexes?: ComplexOrderByRelationAggregateInput;

    @Field(() => BuildingOrderByRelationAggregateInput, {nullable:true})
    buildings?: BuildingOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
