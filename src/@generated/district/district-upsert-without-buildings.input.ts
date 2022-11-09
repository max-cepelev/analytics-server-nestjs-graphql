import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictUpdateWithoutBuildingsInput } from './district-update-without-buildings.input';
import { Type } from 'class-transformer';
import { DistrictCreateWithoutBuildingsInput } from './district-create-without-buildings.input';

@InputType()
export class DistrictUpsertWithoutBuildingsInput {

    @Field(() => DistrictUpdateWithoutBuildingsInput, {nullable:false})
    @Type(() => DistrictUpdateWithoutBuildingsInput)
    update!: DistrictUpdateWithoutBuildingsInput;

    @Field(() => DistrictCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => DistrictCreateWithoutBuildingsInput)
    create!: DistrictCreateWithoutBuildingsInput;
}
