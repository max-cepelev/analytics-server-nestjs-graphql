import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutDistrictsInput } from './city-create-without-districts.input';

@InputType()
export class CityCreateOrConnectWithoutDistrictsInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: CityWhereUniqueInput;

    @Field(() => CityCreateWithoutDistrictsInput, {nullable:false})
    @Type(() => CityCreateWithoutDistrictsInput)
    create!: CityCreateWithoutDistrictsInput;
}
