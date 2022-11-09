import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutGroupsInput } from './region-create-without-groups.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutGroupsInput } from './region-create-or-connect-without-groups.input';
import { RegionUpsertWithWhereUniqueWithoutGroupsInput } from './region-upsert-with-where-unique-without-groups.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithWhereUniqueWithoutGroupsInput } from './region-update-with-where-unique-without-groups.input';
import { RegionUpdateManyWithWhereWithoutGroupsInput } from './region-update-many-with-where-without-groups.input';
import { RegionScalarWhereInput } from './region-scalar-where.input';

@InputType()
export class RegionUncheckedUpdateManyWithoutGroupsNestedInput {

    @Field(() => [RegionCreateWithoutGroupsInput], {nullable:true})
    @Type(() => RegionCreateWithoutGroupsInput)
    create?: Array<RegionCreateWithoutGroupsInput>;

    @Field(() => [RegionCreateOrConnectWithoutGroupsInput], {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutGroupsInput)
    connectOrCreate?: Array<RegionCreateOrConnectWithoutGroupsInput>;

    @Field(() => [RegionUpsertWithWhereUniqueWithoutGroupsInput], {nullable:true})
    @Type(() => RegionUpsertWithWhereUniqueWithoutGroupsInput)
    upsert?: Array<RegionUpsertWithWhereUniqueWithoutGroupsInput>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    set?: Array<RegionWhereUniqueInput>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    disconnect?: Array<RegionWhereUniqueInput>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    delete?: Array<RegionWhereUniqueInput>;

    @Field(() => [RegionWhereUniqueInput], {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: Array<RegionWhereUniqueInput>;

    @Field(() => [RegionUpdateWithWhereUniqueWithoutGroupsInput], {nullable:true})
    @Type(() => RegionUpdateWithWhereUniqueWithoutGroupsInput)
    update?: Array<RegionUpdateWithWhereUniqueWithoutGroupsInput>;

    @Field(() => [RegionUpdateManyWithWhereWithoutGroupsInput], {nullable:true})
    @Type(() => RegionUpdateManyWithWhereWithoutGroupsInput)
    updateMany?: Array<RegionUpdateManyWithWhereWithoutGroupsInput>;

    @Field(() => [RegionScalarWhereInput], {nullable:true})
    @Type(() => RegionScalarWhereInput)
    deleteMany?: Array<RegionScalarWhereInput>;
}
