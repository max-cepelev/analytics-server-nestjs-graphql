import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutRegionsInput } from './group-update-without-regions.input';
import { GroupCreateWithoutRegionsInput } from './group-create-without-regions.input';

@InputType()
export class GroupUpsertWithWhereUniqueWithoutRegionsInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => GroupUpdateWithoutRegionsInput)
    update!: GroupUpdateWithoutRegionsInput;

    @Field(() => GroupCreateWithoutRegionsInput, {nullable:false})
    @Type(() => GroupCreateWithoutRegionsInput)
    create!: GroupCreateWithoutRegionsInput;
}
