import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutCityInput } from './building-create-without-city.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutCityInput } from './building-create-or-connect-without-city.input';
import { BuildingCreateManyCityInputEnvelope } from './building-create-many-city-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingUncheckedCreateNestedManyWithoutCityInput {

    @Field(() => [BuildingCreateWithoutCityInput], {nullable:true})
    @Type(() => BuildingCreateWithoutCityInput)
    create?: Array<BuildingCreateWithoutCityInput>;

    @Field(() => [BuildingCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutCityInput>;

    @Field(() => BuildingCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyCityInputEnvelope)
    createMany?: BuildingCreateManyCityInputEnvelope;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: Array<BuildingWhereUniqueInput>;
}
