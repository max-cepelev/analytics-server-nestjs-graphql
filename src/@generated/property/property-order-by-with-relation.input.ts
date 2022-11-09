import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { BuildingOrderByWithRelationInput } from '../building/building-order-by-with-relation.input';

@InputType()
export class PropertyOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    floor?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    entrance?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    totalArea?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    livingArea?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rooms?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    wallHeight?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    propertyType?: keyof typeof SortOrder;

    @Field(() => BuildingOrderByWithRelationInput, {nullable:true})
    building?: BuildingOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    buildingId?: keyof typeof SortOrder;
}
