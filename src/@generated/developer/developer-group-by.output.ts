import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { DeveloperCountAggregate } from './developer-count-aggregate.output';
import { DeveloperAvgAggregate } from './developer-avg-aggregate.output';
import { DeveloperSumAggregate } from './developer-sum-aggregate.output';
import { DeveloperMinAggregate } from './developer-min-aggregate.output';
import { DeveloperMaxAggregate } from './developer-max-aggregate.output';

@ObjectType()
export class DeveloperGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:true})
    legalAddress?: string;

    @Field(() => String, {nullable:true})
    actualAddress?: string;

    @Field(() => String, {nullable:false})
    inn!: string;

    @Field(() => String, {nullable:true})
    kpp?: string;

    @Field(() => String, {nullable:true})
    ogrn?: string;

    @Field(() => String, {nullable:true})
    manager?: string;

    @Field(() => String, {nullable:true})
    website?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    info?: string;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
