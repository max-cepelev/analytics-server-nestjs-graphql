import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CityOrderByWithRelationInput } from '../city/city-order-by-with-relation.input';
import { ComplexOrderByRelationAggregateInput } from '../complex/complex-order-by-relation-aggregate.input';
import { BuildingOrderByRelationAggregateInput } from '../building/building-order-by-relation-aggregate.input';

@InputType()
export class DistrictOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => CityOrderByWithRelationInput, {nullable:true})
    city?: CityOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    cityId?: keyof typeof SortOrder;

    @Field(() => ComplexOrderByRelationAggregateInput, {nullable:true})
    complexes?: ComplexOrderByRelationAggregateInput;

    @Field(() => BuildingOrderByRelationAggregateInput, {nullable:true})
    buildings?: BuildingOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
