import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { Type } from 'class-transformer';
import { RegionCreateWithoutCitiesInput } from './region-create-without-cities.input';

@InputType()
export class RegionCreateOrConnectWithoutCitiesInput {

    @Field(() => RegionWhereUniqueInput, {nullable:false})
    @Type(() => RegionWhereUniqueInput)
    where!: RegionWhereUniqueInput;

    @Field(() => RegionCreateWithoutCitiesInput, {nullable:false})
    @Type(() => RegionCreateWithoutCitiesInput)
    create!: RegionCreateWithoutCitiesInput;
}
