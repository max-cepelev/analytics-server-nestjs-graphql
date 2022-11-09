import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateWithoutCityInput } from './district-create-without-city.input';
import { Type } from 'class-transformer';
import { DistrictCreateOrConnectWithoutCityInput } from './district-create-or-connect-without-city.input';
import { DistrictUpsertWithWhereUniqueWithoutCityInput } from './district-upsert-with-where-unique-without-city.input';
import { DistrictCreateManyCityInputEnvelope } from './district-create-many-city-input-envelope.input';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { DistrictUpdateWithWhereUniqueWithoutCityInput } from './district-update-with-where-unique-without-city.input';
import { DistrictUpdateManyWithWhereWithoutCityInput } from './district-update-many-with-where-without-city.input';
import { DistrictScalarWhereInput } from './district-scalar-where.input';

@InputType()
export class DistrictUpdateManyWithoutCityNestedInput {

    @Field(() => [DistrictCreateWithoutCityInput], {nullable:true})
    @Type(() => DistrictCreateWithoutCityInput)
    create?: Array<DistrictCreateWithoutCityInput>;

    @Field(() => [DistrictCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => DistrictCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;

    @Field(() => [DistrictUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => DistrictUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<DistrictUpsertWithWhereUniqueWithoutCityInput>;

    @Field(() => DistrictCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => DistrictCreateManyCityInputEnvelope)
    createMany?: DistrictCreateManyCityInputEnvelope;

    @Field(() => [DistrictWhereUniqueInput], {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    set?: Array<DistrictWhereUniqueInput>;

    @Field(() => [DistrictWhereUniqueInput], {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    disconnect?: Array<DistrictWhereUniqueInput>;

    @Field(() => [DistrictWhereUniqueInput], {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    delete?: Array<DistrictWhereUniqueInput>;

    @Field(() => [DistrictWhereUniqueInput], {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    connect?: Array<DistrictWhereUniqueInput>;

    @Field(() => [DistrictUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => DistrictUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<DistrictUpdateWithWhereUniqueWithoutCityInput>;

    @Field(() => [DistrictUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => DistrictUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<DistrictUpdateManyWithWhereWithoutCityInput>;

    @Field(() => [DistrictScalarWhereInput], {nullable:true})
    @Type(() => DistrictScalarWhereInput)
    deleteMany?: Array<DistrictScalarWhereInput>;
}
