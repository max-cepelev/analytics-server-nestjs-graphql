import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutDistrictInput } from './building-create-without-district.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutDistrictInput } from './building-create-or-connect-without-district.input';
import { BuildingUpsertWithWhereUniqueWithoutDistrictInput } from './building-upsert-with-where-unique-without-district.input';
import { BuildingCreateManyDistrictInputEnvelope } from './building-create-many-district-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateWithWhereUniqueWithoutDistrictInput } from './building-update-with-where-unique-without-district.input';
import { BuildingUpdateManyWithWhereWithoutDistrictInput } from './building-update-many-with-where-without-district.input';
import { BuildingScalarWhereInput } from './building-scalar-where.input';

@InputType()
export class BuildingUpdateManyWithoutDistrictNestedInput {

    @Field(() => [BuildingCreateWithoutDistrictInput], {nullable:true})
    @Type(() => BuildingCreateWithoutDistrictInput)
    create?: Array<BuildingCreateWithoutDistrictInput>;

    @Field(() => [BuildingCreateOrConnectWithoutDistrictInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutDistrictInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutDistrictInput>;

    @Field(() => [BuildingUpsertWithWhereUniqueWithoutDistrictInput], {nullable:true})
    @Type(() => BuildingUpsertWithWhereUniqueWithoutDistrictInput)
    upsert?: Array<BuildingUpsertWithWhereUniqueWithoutDistrictInput>;

    @Field(() => BuildingCreateManyDistrictInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyDistrictInputEnvelope)
    createMany?: BuildingCreateManyDistrictInputEnvelope;

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

    @Field(() => [BuildingUpdateWithWhereUniqueWithoutDistrictInput], {nullable:true})
    @Type(() => BuildingUpdateWithWhereUniqueWithoutDistrictInput)
    update?: Array<BuildingUpdateWithWhereUniqueWithoutDistrictInput>;

    @Field(() => [BuildingUpdateManyWithWhereWithoutDistrictInput], {nullable:true})
    @Type(() => BuildingUpdateManyWithWhereWithoutDistrictInput)
    updateMany?: Array<BuildingUpdateManyWithWhereWithoutDistrictInput>;

    @Field(() => [BuildingScalarWhereInput], {nullable:true})
    @Type(() => BuildingScalarWhereInput)
    deleteMany?: Array<BuildingScalarWhereInput>;
}
