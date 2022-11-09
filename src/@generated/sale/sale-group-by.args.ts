import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleWhereInput } from './sale-where.input';
import { Type } from 'class-transformer';
import { SaleOrderByWithAggregationInput } from './sale-order-by-with-aggregation.input';
import { SaleScalarFieldEnum } from './sale-scalar-field.enum';
import { SaleScalarWhereWithAggregatesInput } from './sale-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SaleCountAggregateInput } from './sale-count-aggregate.input';
import { SaleAvgAggregateInput } from './sale-avg-aggregate.input';
import { SaleSumAggregateInput } from './sale-sum-aggregate.input';
import { SaleMinAggregateInput } from './sale-min-aggregate.input';
import { SaleMaxAggregateInput } from './sale-max-aggregate.input';

@ArgsType()
export class SaleGroupByArgs {

    @Field(() => SaleWhereInput, {nullable:true})
    @Type(() => SaleWhereInput)
    where?: SaleWhereInput;

    @Field(() => [SaleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SaleOrderByWithAggregationInput>;

    @Field(() => [SaleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SaleScalarFieldEnum>;

    @Field(() => SaleScalarWhereWithAggregatesInput, {nullable:true})
    having?: SaleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SaleCountAggregateInput, {nullable:true})
    _count?: SaleCountAggregateInput;

    @Field(() => SaleAvgAggregateInput, {nullable:true})
    _avg?: SaleAvgAggregateInput;

    @Field(() => SaleSumAggregateInput, {nullable:true})
    _sum?: SaleSumAggregateInput;

    @Field(() => SaleMinAggregateInput, {nullable:true})
    _min?: SaleMinAggregateInput;

    @Field(() => SaleMaxAggregateInput, {nullable:true})
    _max?: SaleMaxAggregateInput;
}
