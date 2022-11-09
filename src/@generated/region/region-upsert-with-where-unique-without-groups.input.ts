import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionUpdateWithoutGroupsInput } from './region-update-without-groups.input';
import { RegionCreateWithoutGroupsInput } from './region-create-without-groups.input';

@InputType()
export class RegionUpsertWithWhereUniqueWithoutGroupsInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: RegionWhereUniqueInput;

    @Field(() => RegionUpdateWithoutGroupsInput, {nullable:false})
    @Type(() => RegionUpdateWithoutGroupsInput)
    update!: RegionUpdateWithoutGroupsInput;

    @Field(() => RegionCreateWithoutGroupsInput, {nullable:false})
    @Type(() => RegionCreateWithoutGroupsInput)
    create!: RegionCreateWithoutGroupsInput;
}
