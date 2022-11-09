import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutGroupsInput } from './region-create-without-groups.input';

@InputType()
export class RegionCreateOrConnectWithoutGroupsInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: RegionWhereUniqueInput;

    @Field(() => RegionCreateWithoutGroupsInput, {nullable:false})
    @Type(() => RegionCreateWithoutGroupsInput)
    create!: RegionCreateWithoutGroupsInput;
}
