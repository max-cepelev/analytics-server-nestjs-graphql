import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SaleCountAggregate } from './sale-count-aggregate.output';
import { SaleAvgAggregate } from './sale-avg-aggregate.output';
import { SaleSumAggregate } from './sale-sum-aggregate.output';
import { SaleMinAggregate } from './sale-min-aggregate.output';
import { SaleMaxAggregate } from './sale-max-aggregate.output';

@ObjectType()
export class AggregateSale {

    @Field(() => SaleCountAggregate, {nullable:true})
    _count?: SaleCountAggregate;

    @Field(() => SaleAvgAggregate, {nullable:true})
    _avg?: SaleAvgAggregate;

    @Field(() => SaleSumAggregate, {nullable:true})
    _sum?: SaleSumAggregate;

    @Field(() => SaleMinAggregate, {nullable:true})
    _min?: SaleMinAggregate;

    @Field(() => SaleMaxAggregate, {nullable:true})
    _max?: SaleMaxAggregate;
}
