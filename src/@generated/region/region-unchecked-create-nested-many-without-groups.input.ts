import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutGroupsInput } from './region-create-without-groups.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutGroupsInput } from './region-create-or-connect-without-groups.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionUncheckedCreateNestedManyWithoutGroupsInput {

    @Field(() => [RegionCreateWithoutGroupsInput], {nullable:true})
    @Type(() => RegionCreateWithoutGroupsInput)
    create?: Array<RegionCreateWithoutGroupsInput>;

    @Field(() => [RegionCreateOrConnectWithoutGroupsInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutGroupsInput>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<RegionWhereUniqueInput>;
}
