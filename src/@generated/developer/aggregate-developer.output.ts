import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeveloperCountAggregate } from './developer-count-aggregate.output';
import { DeveloperAvgAggregate } from './developer-avg-aggregate.output';
import { DeveloperSumAggregate } from './developer-sum-aggregate.output';
import { DeveloperMinAggregate } from './developer-min-aggregate.output';
import { DeveloperMaxAggregate } from './developer-max-aggregate.output';

@ObjectType()
export class AggregateDeveloper {

    @Field(() => DeveloperCountAggregate, {nullable:true})
    _count?: DeveloperCountAggregate;

    @Field(() => DeveloperAvgAggregate, {nullable:true})
    _avg?: DeveloperAvgAggregate;

    @Field(() => DeveloperSumAggregate, {nullable:true})
    _sum?: DeveloperSumAggregate;

    @Field(() => DeveloperMinAggregate, {nullable:true})
    _min?: DeveloperMinAggregate;

    @Field(() => DeveloperMaxAggregate, {nullable:true})
    _max?: DeveloperMaxAggregate;
}
