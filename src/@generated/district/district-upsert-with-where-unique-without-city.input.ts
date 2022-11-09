import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';
import { DistrictUpdateWithoutCityInput } from './district-update-without-city.input';
import { DistrictCreateWithoutCityInput } from './district-create-without-city.input';

@InputType()
export class DistrictUpsertWithWhereUniqueWithoutCityInput {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: DistrictWhereUniqueInput;

    @Field(() => DistrictUpdateWithoutCityInput, {nullable:false})
    @Type(() => DistrictUpdateWithoutCityInput)
    update!: DistrictUpdateWithoutCityInput;

    @Field(() => DistrictCreateWithoutCityInput, {nullable:false})
    @Type(() => DistrictCreateWithoutCityInput)
    create!: DistrictCreateWithoutCityInput;
}
