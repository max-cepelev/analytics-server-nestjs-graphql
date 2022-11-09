import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutComplexInput } from './building-create-without-complex.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutComplexInput } from './building-create-or-connect-without-complex.input';
import { BuildingUpsertWithWhereUniqueWithoutComplexInput } from './building-upsert-with-where-unique-without-complex.input';
import { BuildingCreateManyComplexInputEnvelope } from './building-create-many-complex-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateWithWhereUniqueWithoutComplexInput } from './building-update-with-where-unique-without-complex.input';
import { BuildingUpdateManyWithWhereWithoutComplexInput } from './building-update-many-with-where-without-complex.input';
import { BuildingScalarWhereInput } from './building-scalar-where.input';

@InputType()
export class BuildingUncheckedUpdateManyWithoutComplexNestedInput {

    @Field(() => [BuildingCreateWithoutComplexInput], {nullable:true})
    @Type(() => BuildingCreateWithoutComplexInput)
    create?: Array<BuildingCreateWithoutComplexInput>;

    @Field(() => [BuildingCreateOrConnectWithoutComplexInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutComplexInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutComplexInput>;

    @Field(() => [BuildingUpsertWithWhereUniqueWithoutComplexInput], {nullable:true})
    @Type(() => BuildingUpsertWithWhereUniqueWithoutComplexInput)
    upsert?: Array<BuildingUpsertWithWhereUniqueWithoutComplexInput>;

    @Field(() => BuildingCreateManyComplexInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyComplexInputEnvelope)
    createMany?: BuildingCreateManyComplexInputEnvelope;

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

    @Field(() => [BuildingUpdateWithWhereUniqueWithoutComplexInput], {nullable:true})
    @Type(() => BuildingUpdateWithWhereUniqueWithoutComplexInput)
    update?: Array<BuildingUpdateWithWhereUniqueWithoutComplexInput>;

    @Field(() => [BuildingUpdateManyWithWhereWithoutComplexInput], {nullable:true})
    @Type(() => BuildingUpdateManyWithWhereWithoutComplexInput)
    updateMany?: Array<BuildingUpdateManyWithWhereWithoutComplexInput>;

    @Field(() => [BuildingScalarWhereInput], {nullable:true})
    @Type(() => BuildingScalarWhereInput)
    deleteMany?: Array<BuildingScalarWhereInput>;
}
