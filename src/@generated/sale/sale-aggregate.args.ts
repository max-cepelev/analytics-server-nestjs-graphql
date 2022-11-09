import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SaleWhereInput } from './sale-where.input';
import { Type } from 'class-transformer';
import { SaleOrderByWithRelationInput } from './sale-order-by-with-relation.input';
import { SaleWhereUniqueInput } from './sale-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SaleCountAggregateInput } from './sale-count-aggregate.input';
import { SaleAvgAggregateInput } from './sale-avg-aggregate.input';
import { SaleSumAggregateInput } from './sale-sum-aggregate.input';
import { SaleMinAggregateInput } from './sale-min-aggregate.input';
import { SaleMaxAggregateInput } from './sale-max-aggregate.input';

@ArgsType()
export class SaleAggregateArgs {

    @Field(() => SaleWhereInput, {nullable:true})
    @Type(() => SaleWhereInput)
    where?: SaleWhereInput;

    @Field(() => [SaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SaleOrderByWithRelationInput>;

    @Field(() => SaleWhereUniqueInput, {nullable:true})
    cursor?: SaleWhereUniqueInput;

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
