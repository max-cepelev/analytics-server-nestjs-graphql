import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityUpdateWithoutRegionInput } from './city-update-without-region.input';
import { CityCreateWithoutRegionInput } from './city-create-without-region.input';

@InputType()
export class CityUpsertWithWhereUniqueWithoutRegionInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: CityWhereUniqueInput;

    @Field(() => CityUpdateWithoutRegionInput, {nullable:false})
    @Type(() => CityUpdateWithoutRegionInput)
    update!: CityUpdateWithoutRegionInput;

    @Field(() => CityCreateWithoutRegionInput, {nullable:false})
    @Type(() => CityCreateWithoutRegionInput)
    create!: CityCreateWithoutRegionInput;
}
