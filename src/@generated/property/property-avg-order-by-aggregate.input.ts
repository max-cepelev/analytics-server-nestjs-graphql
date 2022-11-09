import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class PropertyAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

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
    buildingId?: keyof typeof SortOrder;
}
