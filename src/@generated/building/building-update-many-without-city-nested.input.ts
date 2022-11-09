import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutCityInput } from './building-create-without-city.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutCityInput } from './building-create-or-connect-without-city.input';
import { BuildingUpsertWithWhereUniqueWithoutCityInput } from './building-upsert-with-where-unique-without-city.input';
import { BuildingCreateManyCityInputEnvelope } from './building-create-many-city-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateWithWhereUniqueWithoutCityInput } from './building-update-with-where-unique-without-city.input';
import { BuildingUpdateManyWithWhereWithoutCityInput } from './building-update-many-with-where-without-city.input';
import { BuildingScalarWhereInput } from './building-scalar-where.input';

@InputType()
export class BuildingUpdateManyWithoutCityNestedInput {

    @Field(() => [BuildingCreateWithoutCityInput], {nullable:true})
    @Type(() => BuildingCreateWithoutCityInput)
    create?: Array<BuildingCreateWithoutCityInput>;

    @Field(() => [BuildingCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutCityInput>;

    @Field(() => [BuildingUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => BuildingUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<BuildingUpsertWithWhereUniqueWithoutCityInput>;

    @Field(() => BuildingCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyCityInputEnvelope)
    createMany?: BuildingCreateManyCityInputEnvelope;

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

    @Field(() => [BuildingUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => BuildingUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<BuildingUpdateWithWhereUniqueWithoutCityInput>;

    @Field(() => [BuildingUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => BuildingUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<BuildingUpdateManyWithWhereWithoutCityInput>;

    @Field(() => [BuildingScalarWhereInput], {nullable:true})
    @Type(() => BuildingScalarWhereInput)
    deleteMany?: Array<BuildingScalarWhereInput>;
}
