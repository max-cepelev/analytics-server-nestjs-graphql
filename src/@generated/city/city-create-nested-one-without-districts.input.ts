import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutDistrictsInput } from './city-create-without-districts.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutDistrictsInput } from './city-create-or-connect-without-districts.input';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityCreateNestedOneWithoutDistrictsInput {

    @Field(() => CityCreateWithoutDistrictsInput, {nullable:true})
    @Type(() => CityCreateWithoutDistrictsInput)
    create?: CityCreateWithoutDistrictsInput;

    @Field(() => CityCreateOrConnectWithoutDistrictsInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutDistrictsInput)
    connectOrCreate?: CityCreateOrConnectWithoutDistrictsInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: CityWhereUniqueInput;
}
