import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutDeveloperInput } from './building-create-without-developer.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutDeveloperInput } from './building-create-or-connect-without-developer.input';
import { BuildingUpsertWithWhereUniqueWithoutDeveloperInput } from './building-upsert-with-where-unique-without-developer.input';
import { BuildingCreateManyDeveloperInputEnvelope } from './building-create-many-developer-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateWithWhereUniqueWithoutDeveloperInput } from './building-update-with-where-unique-without-developer.input';
import { BuildingUpdateManyWithWhereWithoutDeveloperInput } from './building-update-many-with-where-without-developer.input';
import { BuildingScalarWhereInput } from './building-scalar-where.input';

@InputType()
export class BuildingUpdateManyWithoutDeveloperNestedInput {

    @Field(() => [BuildingCreateWithoutDeveloperInput], {nullable:true})
    @Type(() => BuildingCreateWithoutDeveloperInput)
    create?: Array<BuildingCreateWithoutDeveloperInput>;

    @Field(() => [BuildingCreateOrConnectWithoutDeveloperInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutDeveloperInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutDeveloperInput>;

    @Field(() => [BuildingUpsertWithWhereUniqueWithoutDeveloperInput], {nullable:true})
    @Type(() => BuildingUpsertWithWhereUniqueWithoutDeveloperInput)
    upsert?: Array<BuildingUpsertWithWhereUniqueWithoutDeveloperInput>;

    @Field(() => BuildingCreateManyDeveloperInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyDeveloperInputEnvelope)
    createMany?: BuildingCreateManyDeveloperInputEnvelope;

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

    @Field(() => [BuildingUpdateWithWhereUniqueWithoutDeveloperInput], {nullable:true})
    @Type(() => BuildingUpdateWithWhereUniqueWithoutDeveloperInput)
    update?: Array<BuildingUpdateWithWhereUniqueWithoutDeveloperInput>;

    @Field(() => [BuildingUpdateManyWithWhereWithoutDeveloperInput], {nullable:true})
    @Type(() => BuildingUpdateManyWithWhereWithoutDeveloperInput)
    updateMany?: Array<BuildingUpdateManyWithWhereWithoutDeveloperInput>;

    @Field(() => [BuildingScalarWhereInput], {nullable:true})
    @Type(() => BuildingScalarWhereInput)
    deleteMany?: Array<BuildingScalarWhereInput>;
}
