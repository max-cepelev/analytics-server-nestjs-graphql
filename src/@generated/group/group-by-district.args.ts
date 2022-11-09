import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictWhereInput } from '../district/district-where.input';
import { Type } from 'class-transformer';
import { DistrictOrderByWithAggregationInput } from '../district/district-order-by-with-aggregation.input';
import { DistrictScalarFieldEnum } from '../district/district-scalar-field.enum';
import { DistrictScalarWhereWithAggregatesInput } from '../district/district-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupByDistrictArgs {

    @Field(() => DistrictWhereInput, {nullable:true})
    @Type(() => DistrictWhereInput)
    where?: DistrictWhereInput;

    @Field(() => [DistrictOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DistrictOrderByWithAggregationInput>;

    @Field(() => [DistrictScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DistrictScalarFieldEnum>;

    @Field(() => DistrictScalarWhereWithAggregatesInput, {nullable:true})
    having?: DistrictScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
