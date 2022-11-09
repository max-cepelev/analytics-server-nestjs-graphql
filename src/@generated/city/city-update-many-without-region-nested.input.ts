import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutRegionInput } from './city-create-without-region.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutRegionInput } from './city-create-or-connect-without-region.input';
import { CityUpsertWithWhereUniqueWithoutRegionInput } from './city-upsert-with-where-unique-without-region.input';
import { CityCreateManyRegionInputEnvelope } from './city-create-many-region-input-envelope.input';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateWithWhereUniqueWithoutRegionInput } from './city-update-with-where-unique-without-region.input';
import { CityUpdateManyWithWhereWithoutRegionInput } from './city-update-many-with-where-without-region.input';
import { CityScalarWhereInput } from './city-scalar-where.input';

@InputType()
export class CityUpdateManyWithoutRegionNestedInput {

    @Field(() => [CityCreateWithoutRegionInput], {nullable:true})
    @Type(() => CityCreateWithoutRegionInput)
    create?: Array<CityCreateWithoutRegionInput>;

    @Field(() => [CityCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => CityCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<CityCreateOrConnectWithoutRegionInput>;

    @Field(() => [CityUpsertWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => CityUpsertWithWhereUniqueWithoutRegionInput)
    upsert?: Array<CityUpsertWithWhereUniqueWithoutRegionInput>;

    @Field(() => CityCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => CityCreateManyRegionInputEnvelope)
    createMany?: CityCreateManyRegionInputEnvelope;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    set?: Array<CityWhereUniqueInput>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    disconnect?: Array<CityWhereUniqueInput>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    delete?: Array<CityWhereUniqueInput>;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Array<CityWhereUniqueInput>;

    @Field(() => [CityUpdateWithWhereUniqueWithoutRegionInput], {nullable:true})
    @Type(() => CityUpdateWithWhereUniqueWithoutRegionInput)
    update?: Array<CityUpdateWithWhereUniqueWithoutRegionInput>;

    @Field(() => [CityUpdateManyWithWhereWithoutRegionInput], {nullable:true})
    @Type(() => CityUpdateManyWithWhereWithoutRegionInput)
    updateMany?: Array<CityUpdateManyWithWhereWithoutRegionInput>;

    @Field(() => [CityScalarWhereInput], {nullable:true})
    @Type(() => CityScalarWhereInput)
    deleteMany?: Array<CityScalarWhereInput>;
}
