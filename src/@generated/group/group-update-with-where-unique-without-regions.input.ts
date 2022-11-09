import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { Type } from 'class-transformer';
import { GroupUpdateWithoutRegionsInput } from './group-update-without-regions.input';

@InputType()
export class GroupUpdateWithWhereUniqueWithoutRegionsInput {

    @Field(() => GroupWhereUniqueInput, {nullable:false})
    @Type(() => GroupWhereUniqueInput)
    where!: GroupWhereUniqueInput;

    @Field(() => GroupUpdateWithoutRegionsInput, {nullable:false})
    @Type(() => GroupUpdateWithoutRegionsInput)
    data!: GroupUpdateWithoutRegionsInput;
}
