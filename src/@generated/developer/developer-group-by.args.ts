import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperWhereInput } from './developer-where.input';
import { Type } from 'class-transformer';
import { DeveloperOrderByWithAggregationInput } from './developer-order-by-with-aggregation.input';
import { DeveloperScalarFieldEnum } from './developer-scalar-field.enum';
import { DeveloperScalarWhereWithAggregatesInput } from './developer-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DeveloperCountAggregateInput } from './developer-count-aggregate.input';
import { DeveloperAvgAggregateInput } from './developer-avg-aggregate.input';
import { DeveloperSumAggregateInput } from './developer-sum-aggregate.input';
import { DeveloperMinAggregateInput } from './developer-min-aggregate.input';
import { DeveloperMaxAggregateInput } from './developer-max-aggregate.input';

@ArgsType()
export class DeveloperGroupByArgs {

    @Field(() => DeveloperWhereInput, {nullable:true})
    @Type(() => DeveloperWhereInput)
    where?: DeveloperWhereInput;

    @Field(() => [DeveloperOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DeveloperOrderByWithAggregationInput>;

    @Field(() => [DeveloperScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof DeveloperScalarFieldEnum>;

    @Field(() => DeveloperScalarWhereWithAggregatesInput, {nullable:true})
    having?: DeveloperScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DeveloperCountAggregateInput, {nullable:true})
    _count?: DeveloperCountAggregateInput;

    @Field(() => DeveloperAvgAggregateInput, {nullable:true})
    _avg?: DeveloperAvgAggregateInput;

    @Field(() => DeveloperSumAggregateInput, {nullable:true})
    _sum?: DeveloperSumAggregateInput;

    @Field(() => DeveloperMinAggregateInput, {nullable:true})
    _min?: DeveloperMinAggregateInput;

    @Field(() => DeveloperMaxAggregateInput, {nullable:true})
    _max?: DeveloperMaxAggregateInput;
}
