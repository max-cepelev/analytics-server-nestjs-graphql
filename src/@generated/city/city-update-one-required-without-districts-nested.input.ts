import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutDistrictsInput } from './city-create-without-districts.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutDistrictsInput } from './city-create-or-connect-without-districts.input';
import { CityUpsertWithoutDistrictsInput } from './city-upsert-without-districts.input';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { CityUpdateWithoutDistrictsInput } from './city-update-without-districts.input';

@InputType()
export class CityUpdateOneRequiredWithoutDistrictsNestedInput {

    @Field(() => CityCreateWithoutDistrictsInput, {nullable:true})
    @Type(() => CityCreateWithoutDistrictsInput)
    create?: CityCreateWithoutDistrictsInput;

    @Field(() => CityCreateOrConnectWithoutDistrictsInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutDistrictsInput)
    connectOrCreate?: CityCreateOrConnectWithoutDistrictsInput;

    @Field(() => CityUpsertWithoutDistrictsInput, {nullable:true})
    @Type(() => CityUpsertWithoutDistrictsInput)
    upsert?: CityUpsertWithoutDistrictsInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: CityWhereUniqueInput;

    @Field(() => CityUpdateWithoutDistrictsInput, {nullable:true})
    @Type(() => CityUpdateWithoutDistrictsInput)
    update?: CityUpdateWithoutDistrictsInput;
}
