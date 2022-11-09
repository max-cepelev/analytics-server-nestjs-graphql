import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GroupCreateWithoutRegionsInput } from './group-create-without-regions.input';
import { Type } from 'class-transformer';
import { GroupCreateOrConnectWithoutRegionsInput } from './group-create-or-connect-without-regions.input';
import { GroupUpsertWithWhereUniqueWithoutRegionsInput } from './group-upsert-with-where-unique-without-regions.input';
import { GroupWhereUniqueInput } from './group-where-unique.input';
import { GroupUpdateWithWhereUniqueWithoutRegionsInput } from './group-update-with-where-unique-without-regions.input';
import { GroupUpdateManyWithWhereWithoutRegionsInput } from './group-update-many-with-where-without-regions.input';
import { GroupScalarWhereInput } from './group-scalar-where.input';

@InputType()
export class GroupUncheckedUpdateManyWithoutRegionsNestedInput {

    @Field(() => [GroupCreateWithoutRegionsInput], {nullable:true})
    @Type(() => GroupCreateWithoutRegionsInput)
    create?: Array<GroupCreateWithoutRegionsInput>;

    @Field(() => [GroupCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => GroupCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<GroupCreateOrConnectWithoutRegionsInput>;

    @Field(() => [GroupUpsertWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => GroupUpsertWithWhereUniqueWithoutRegionsInput)
    upsert?: Array<GroupUpsertWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    set?: Array<GroupWhereUniqueInput>;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    disconnect?: Array<GroupWhereUniqueInput>;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    delete?: Array<GroupWhereUniqueInput>;

    @Field(() => [GroupWhereUniqueInput], {nullable:true})
    @Type(() => GroupWhereUniqueInput)
    connect?: Array<GroupWhereUniqueInput>;

    @Field(() => [GroupUpdateWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => GroupUpdateWithWhereUniqueWithoutRegionsInput)
    update?: Array<GroupUpdateWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [GroupUpdateManyWithWhereWithoutRegionsInput], {nullable:true})
    @Type(() => GroupUpdateManyWithWhereWithoutRegionsInput)
    updateMany?: Array<GroupUpdateManyWithWhereWithoutRegionsInput>;

    @Field(() => [GroupScalarWhereInput], {nullable:true})
    @Type(() => GroupScalarWhereInput)
    deleteMany?: Array<GroupScalarWhereInput>;
}
