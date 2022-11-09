import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateWithoutCityInput } from './district-create-without-city.input';
import { Type } from 'class-transformer';
import { DistrictCreateOrConnectWithoutCityInput } from './district-create-or-connect-without-city.input';
import { DistrictCreateManyCityInputEnvelope } from './district-create-many-city-input-envelope.input';
import { DistrictWhereUniqueInput } from './district-where-unique.input';

@InputType()
export class DistrictUncheckedCreateNestedManyWithoutCityInput {

    @Field(() => [DistrictCreateWithoutCityInput], {nullable:true})
    @Type(() => DistrictCreateWithoutCityInput)
    create?: Array<DistrictCreateWithoutCityInput>;

    @Field(() => [DistrictCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => DistrictCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<DistrictCreateOrConnectWithoutCityInput>;

    @Field(() => DistrictCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => DistrictCreateManyCityInputEnvelope)
    createMany?: DistrictCreateManyCityInputEnvelope;

    @Field(() => [DistrictWhereUniqueInput], {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    connect?: Array<DistrictWhereUniqueInput>;
}
