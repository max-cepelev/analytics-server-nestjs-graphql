import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutBuildingsInput } from './city-create-without-buildings.input';

@InputType()
export class CityCreateOrConnectWithoutBuildingsInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: CityWhereUniqueInput;

    @Field(() => CityCreateWithoutBuildingsInput, {nullable:false})
    @Type(() => CityCreateWithoutBuildingsInput)
    create!: CityCreateWithoutBuildingsInput;
}
