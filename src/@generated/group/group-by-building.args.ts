import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { BuildingWhereInput } from '../building/building-where.input';
import { Type } from 'class-transformer';
import { BuildingOrderByWithAggregationInput } from '../building/building-order-by-with-aggregation.input';
import { BuildingScalarFieldEnum } from '../building/building-scalar-field.enum';
import { BuildingScalarWhereWithAggregatesInput } from '../building/building-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByBuildingArgs {

    @Field(() => BuildingWhereInput, {nullable:true})
    @Type(() => BuildingWhereInput)
    where?: BuildingWhereInput;

    @Field(() => [BuildingOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<BuildingOrderByWithAggregationInput>;

    @Field(() => [BuildingScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof BuildingScalarFieldEnum>;

    @Field(() => BuildingScalarWhereWithAggregatesInput, {nullable:true})
    having?: BuildingScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
