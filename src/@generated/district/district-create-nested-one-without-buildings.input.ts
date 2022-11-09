import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateWithoutBuildingsInput } from './district-create-without-buildings.input';
import { Type } from 'class-transformer';
import { DistrictCreateOrConnectWithoutBuildingsInput } from './district-create-or-connect-without-buildings.input';
import { DistrictWhereUniqueInput } from './district-where-unique.input';

@InputType()
export class DistrictCreateNestedOneWithoutBuildingsInput {

    @Field(() => DistrictCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => DistrictCreateWithoutBuildingsInput)
    create?: DistrictCreateWithoutBuildingsInput;

    @Field(() => DistrictCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => DistrictCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: DistrictCreateOrConnectWithoutBuildingsInput;

    @Field(() => DistrictWhereUniqueInput, {nullable:true})
    @Type(() => DistrictWhereUniqueInput)
    connect?: DistrictWhereUniqueInput;
}
