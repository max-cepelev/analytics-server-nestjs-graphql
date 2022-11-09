import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUpdateWithoutBuildingsInput } from './city-update-without-buildings.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutBuildingsInput } from './city-create-without-buildings.input';

@InputType()
export class CityUpsertWithoutBuildingsInput {

    @Field(() => CityUpdateWithoutBuildingsInput, {nullable:false})
    @Type(() => CityUpdateWithoutBuildingsInput)
    update!: CityUpdateWithoutBuildingsInput;

    @Field(() => CityCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => CityCreateWithoutBuildingsInput)
    create!: CityCreateWithoutBuildingsInput;
}
