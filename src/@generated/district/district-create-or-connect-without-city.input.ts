import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';
import { DistrictCreateWithoutCityInput } from './district-create-without-city.input';

@InputType()
export class DistrictCreateOrConnectWithoutCityInput {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: DistrictWhereUniqueInput;

    @Field(() => DistrictCreateWithoutCityInput, {nullable:false})
    @Type(() => DistrictCreateWithoutCityInput)
    create!: DistrictCreateWithoutCityInput;
}
