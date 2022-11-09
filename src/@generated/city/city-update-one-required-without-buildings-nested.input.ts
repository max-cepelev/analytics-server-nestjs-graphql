import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutBuildingsInput } from './city-create-without-buildings.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutBuildingsInput } from './city-create-or-connect-without-buildings.input';
import { CityUpsertWithoutBuildingsInput } from './city-upsert-without-buildings.input';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateWithoutBuildingsInput } from './city-update-without-buildings.input';

@InputType()
export class CityUpdateOneRequiredWithoutBuildingsNestedInput {

    @Field(() => CityCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => CityCreateWithoutBuildingsInput)
    create?: CityCreateWithoutBuildingsInput;

    @Field(() => CityCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: CityCreateOrConnectWithoutBuildingsInput;

    @Field(() => CityUpsertWithoutBuildingsInput, {nullable:true})
    @Type(() => CityUpsertWithoutBuildingsInput)
    upsert?: CityUpsertWithoutBuildingsInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: CityWhereUniqueInput;

    @Field(() => CityUpdateWithoutBuildingsInput, {nullable:true})
    @Type(() => CityUpdateWithoutBuildingsInput)
    update?: CityUpdateWithoutBuildingsInput;
}
