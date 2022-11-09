import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RegionOrderByRelationAggregateInput } from '../region/region-order-by-relation-aggregate.input';
import { BuildingOrderByRelationAggregateInput } from '../building/building-order-by-relation-aggregate.input';
import { DeveloperOrderByRelationAggregateInput } from '../developer/developer-order-by-relation-aggregate.input';
import { ComplexOrderByRelationAggregateInput } from '../complex/complex-order-by-relation-aggregate.input';

@InputType()
export class GroupOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => RegionOrderByRelationAggregateInput, {nullable:true})
    regions?: RegionOrderByRelationAggregateInput;

    @Field(() => BuildingOrderByRelationAggregateInput, {nullable:true})
    buildings?: BuildingOrderByRelationAggregateInput;

    @Field(() => DeveloperOrderByRelationAggregateInput, {nullable:true})
    developers?: DeveloperOrderByRelationAggregateInput;

    @Field(() => ComplexOrderByRelationAggregateInput, {nullable:true})
    complexes?: ComplexOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
