import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Group } from '../group/group.model';
import { Building } from '../building/building.model';
import { DeveloperCount } from './developer-count.output';

@ObjectType()
export class Developer {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    fullName!: string;

    @Field(() => String, {nullable:true})
    legalAddress!: string | null;

    @Field(() => String, {nullable:true})
    actualAddress!: string | null;

    @Field(() => String, {nullable:false})
    inn!: string;

    @Field(() => String, {nullable:true})
    kpp!: string | null;

    @Field(() => String, {nullable:true})
    ogrn!: string | null;

    @Field(() => String, {nullable:true})
    manager!: string | null;

    @Field(() => String, {nullable:true})
    website!: string | null;

    @Field(() => String, {nullable:true})
    phone!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    info!: string | null;

    @Field(() => Group, {nullable:false})
    group?: Group;

    @Field(() => Int, {nullable:false})
    groupId!: number;

    @Field(() => [Building], {nullable:true})
    buildings?: Array<Building>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => DeveloperCount, {nullable:false})
    _count?: DeveloperCount;
}
