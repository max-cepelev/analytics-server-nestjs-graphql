import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperWhereInput } from './developer-where.input';
import { Type } from 'class-transformer';
import { DeveloperOrderByWithRelationInput } from './developer-order-by-with-relation.input';
import { DeveloperWhereUniqueInput } from './developer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeveloperCountAggregateInput } from './developer-count-aggregate.input';
import { DeveloperAvgAggregateInput } from './developer-avg-aggregate.input';
import { DeveloperSumAggregateInput } from './developer-sum-aggregate.input';
import { DeveloperMinAggregateInput } from './developer-min-aggregate.input';
import { DeveloperMaxAggregateInput } from './developer-max-aggregate.input';

@ArgsType()
export class DeveloperAggregateArgs {

    @Field(() => DeveloperWhereInput, {nullable:true})
    @Type(() => DeveloperWhereInput)
    where?: DeveloperWhereInput;

    @Field(() => [DeveloperOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeveloperOrderByWithRelationInput>;

    @Field(() => DeveloperWhereUniqueInput, {nullable:true})
    cursor?: DeveloperWhereUniqueInput;

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
