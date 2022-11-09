import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutBuildingsInput } from './city-create-without-buildings.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutBuildingsInput } from './city-create-or-connect-without-buildings.input';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityCreateNestedOneWithoutBuildingsInput {

    @Field(() => CityCreateWithoutBuildingsInput, {nullable:true})
    @Type(() => CityCreateWithoutBuildingsInput)
    create?: CityCreateWithoutBuildingsInput;

    @Field(() => CityCreateOrConnectWithoutBuildingsInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutBuildingsInput)
    connectOrCreate?: CityCreateOrConnectWithoutBuildingsInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: CityWhereUniqueInput;
}
