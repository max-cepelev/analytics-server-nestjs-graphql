import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GroupOrderByWithRelationInput } from '../group/group-order-by-with-relation.input';
import { BuildingOrderByRelationAggregateInput } from '../building/building-order-by-relation-aggregate.input';

@InputType()
export class DeveloperOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fullName?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    legalAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    actualAddress?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    inn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    kpp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ogrn?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    manager?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    website?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    phone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    email?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    info?: keyof typeof SortOrder;

    @Field(() => GroupOrderByWithRelationInput, {nullable:true})
    group?: GroupOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    groupId?: keyof typeof SortOrder;

    @Field(() => BuildingOrderByRelationAggregateInput, {nullable:true})
    buildings?: BuildingOrderByRelationAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;
}
