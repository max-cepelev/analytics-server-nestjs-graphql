import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CityOrderByRelationAggregateInput } from '../city/city-order-by-relation-aggregate.input';
import { GroupOrderByRelationAggregateInput } from '../group/group-order-by-relation-aggregate.input';

@InputType()
export class RegionOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => CityOrderByRelationAggregateInput, {nullable:true})
    cities?: CityOrderByRelationAggregateInput;

    @Field(() => GroupOrderByRelationAggregateInput, {nullable:true})
    groups?: GroupOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
