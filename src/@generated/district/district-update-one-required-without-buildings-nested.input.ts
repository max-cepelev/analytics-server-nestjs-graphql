import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateWithoutBuildingsInput } from './district-create-without-buildings.input';
import { Type } from 'class-transformer';
import { DistrictCreateOrConnectWithoutBuildingsInput } from './district-create-or-connect-without-buildings.input';
import { DistrictUpsertWithoutBuildingsInput } from './district-upsert-without-buildings.input';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { DistrictUpdateWithoutBuildingsInput } from './district-update-without-buildings.input';

@InputType()
export class DistrictUpdateOneRequiredWithoutBuildingsNestedInput {

    @Field(() => DistrictCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => DistrictCreateWithoutBuildingsInput)
    create?: DistrictCreateWithoutBuildingsInput;

    @Field(() => DistrictCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => DistrictCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: DistrictCreateOrConnectWithoutBuildingsInput;

    @Field(() => DistrictUpsertWithoutBuildingsInput, {nullable:true})
    @Type(() => DistrictUpsertWithoutBuildingsInput)
    upsert?: DistrictUpsertWithoutBuildingsInput;

    @Field(() => DistrictWhereUniqueInput, {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    connect?: DistrictWhereUniqueInput;

    @Field(() => DistrictUpdateWithoutBuildingsInput, {nullable:true})
    @Type(() => DistrictUpdateWithoutBuildingsInput)
    update?: DistrictUpdateWithoutBuildingsInput;
}
