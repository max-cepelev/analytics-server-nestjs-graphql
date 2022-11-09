import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutCityInput } from './building-update-without-city.input';
import { BuildingCreateWithoutCityInput } from './building-create-without-city.input';

@InputType()
export class BuildingUpsertWithWhereUniqueWithoutCityInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutCityInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutCityInput)
    update!: BuildingUpdateWithoutCityInput;

    @Field(() => BuildingCreateWithoutCityInput, {nullable:false})
    @Type(() => BuildingCreateWithoutCityInput)
    create!: BuildingCreateWithoutCityInput;
}
