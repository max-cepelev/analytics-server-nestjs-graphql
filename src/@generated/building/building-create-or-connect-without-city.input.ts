import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutCityInput } from './building-create-without-city.input';

@InputType()
export class BuildingCreateOrConnectWithoutCityInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingCreateWithoutCityInput, {nullable:false})
    @Type(() => BuildingCreateWithoutCityInput)
    create!: BuildingCreateWithoutCityInput;
}
