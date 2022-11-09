import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutRegionInput } from './city-create-without-region.input';

@InputType()
export class CityCreateOrConnectWithoutRegionInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: CityWhereUniqueInput;

    @Field(() => CityCreateWithoutRegionInput, {nullable:false})
    @Type(() => CityCreateWithoutRegionInput)
    create!: CityCreateWithoutRegionInput;
}
