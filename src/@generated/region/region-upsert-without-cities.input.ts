import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionUpdateWithoutCitiesInput } from './region-update-without-cities.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutCitiesInput } from './region-create-without-cities.input';

@InputType()
export class RegionUpsertWithoutCitiesInput {

    @Field(() => RegionUpdateWithoutCitiesInput, {nullable:false})
    @Type(() => RegionUpdateWithoutCitiesInput)
    update!: RegionUpdateWithoutCitiesInput;

    @Field(() => RegionCreateWithoutCitiesInput, {nullable:false})
    @Type(() => RegionCreateWithoutCitiesInput)
    create!: RegionCreateWithoutCitiesInput;
}
