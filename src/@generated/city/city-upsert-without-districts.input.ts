import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUpdateWithoutDistrictsInput } from './city-update-without-districts.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutDistrictsInput } from './city-create-without-districts.input';

@InputType()
export class CityUpsertWithoutDistrictsInput {

    @Field(() => CityUpdateWithoutDistrictsInput, {nullable:false})
    @Type(() => CityUpdateWithoutDistrictsInput)
    update!: CityUpdateWithoutDistrictsInput;

    @Field(() => CityCreateWithoutDistrictsInput, {nullable:false})
    @Type(() => CityCreateWithoutDistrictsInput)
    create!: CityCreateWithoutDistrictsInput;
}
