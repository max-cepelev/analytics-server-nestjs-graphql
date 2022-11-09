import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';
import { DistrictCreateWithoutBuildingsInput } from './district-create-without-buildings.input';

@InputType()
export class DistrictCreateOrConnectWithoutBuildingsInput {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: DistrictWhereUniqueInput;

    @Field(() => DistrictCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => DistrictCreateWithoutBuildingsInput)
    create!: DistrictCreateWithoutBuildingsInput;
}
