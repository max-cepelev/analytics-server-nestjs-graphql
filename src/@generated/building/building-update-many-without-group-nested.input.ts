import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutGroupInput } from './building-create-without-group.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutGroupInput } from './building-create-or-connect-without-group.input';
import { BuildingUpsertWithWhereUniqueWithoutGroupInput } from './building-upsert-with-where-unique-without-group.input';
import { BuildingCreateManyGroupInputEnvelope } from './building-create-many-group-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateWithWhereUniqueWithoutGroupInput } from './building-update-with-where-unique-without-group.input';
import { BuildingUpdateManyWithWhereWithoutGroupInput } from './building-update-many-with-where-without-group.input';
import { BuildingScalarWhereInput } from './building-scalar-where.input';

@InputType()
export class BuildingUpdateManyWithoutGroupNestedInput {

    @Field(() => [BuildingCreateWithoutGroupInput], {nullable:true})
    @Type(() => BuildingCreateWithoutGroupInput)
    create?: Array<BuildingCreateWithoutGroupInput>;

    @Field(() => [BuildingCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutGroupInput>;

    @Field(() => [BuildingUpsertWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => BuildingUpsertWithWhereUniqueWithoutGroupInput)
    upsert?: Array<BuildingUpsertWithWhereUniqueWithoutGroupInput>;

    @Field(() => BuildingCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyGroupInputEnvelope)
    createMany?: BuildingCreateManyGroupInputEnvelope;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    set?: Array<BuildingWhereUniqueInput>;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    disconnect?: Array<BuildingWhereUniqueInput>;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    delete?: Array<BuildingWhereUniqueInput>;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: Array<BuildingWhereUniqueInput>;

    @Field(() => [BuildingUpdateWithWhereUniqueWithoutGroupInput], {nullable:true})
    @Type(() => BuildingUpdateWithWhereUniqueWithoutGroupInput)
    update?: Array<BuildingUpdateWithWhereUniqueWithoutGroupInput>;

    @Field(() => [BuildingUpdateManyWithWhereWithoutGroupInput], {nullable:true})
    @Type(() => BuildingUpdateManyWithWhereWithoutGroupInput)
    updateMany?: Array<BuildingUpdateManyWithWhereWithoutGroupInput>;

    @Field(() => [BuildingScalarWhereInput], {nullable:true})
    @Type(() => BuildingScalarWhereInput)
    deleteMany?: Array<BuildingScalarWhereInput>;
}
