import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupCreateWithoutRegionsInput } from './group-create-without-regions.input';

@InputType()
export class GroupCreateOrConnectWithoutRegionsInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupCreateWithoutRegionsInput, {nullable:false})
    @Type(() => GroupCreateWithoutRegionsInput)
    create!: GroupCreateWithoutRegionsInput;
}
