import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RegionWhereInput } from '../region/region-where.input';
import { Type } from 'class-transformer';
import { RegionOrderByWithAggregationInput } from '../region/region-order-by-with-aggregation.input';
import { RegionScalarFieldEnum } from '../region/region-scalar-field.enum';
import { RegionScalarWhereWithAggregatesInput } from '../region/region-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByRegionArgs {

    @Field(() => RegionWhereInput, {nullable:true})
    @Type(() => RegionWhereInput)
    where?: RegionWhereInput;

    @Field(() => [RegionOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RegionOrderByWithAggregationInput>;

    @Field(() => [RegionScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RegionScalarFieldEnum>;

    @Field(() => RegionScalarWhereWithAggregatesInput, {nullable:true})
    having?: RegionScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
