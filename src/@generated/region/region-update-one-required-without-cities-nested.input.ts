import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutCitiesInput } from './region-create-without-cities.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutCitiesInput } from './region-create-or-connect-without-cities.input';
import { RegionUpsertWithoutCitiesInput } from './region-upsert-without-cities.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';
import { RegionUpdateWithoutCitiesInput } from './region-update-without-cities.input';

@InputType()
export class RegionUpdateOneRequiredWithoutCitiesNestedInput {

    @Field(() => RegionCreateWithoutCitiesInput, {nullable:true})
    @Type(() => RegionCreateWithoutCitiesInput)
    create?: RegionCreateWithoutCitiesInput;

    @Field(() => RegionCreateOrConnectWithoutCitiesInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutCitiesInput)
    connectOrCreate?: RegionCreateOrConnectWithoutCitiesInput;

    @Field(() => RegionUpsertWithoutCitiesInput, {nullable:true})
    @Type(() => RegionUpsertWithoutCitiesInput)
    upsert?: RegionUpsertWithoutCitiesInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: RegionWhereUniqueInput;

    @Field(() => RegionUpdateWithoutCitiesInput, {nullable:true})
    @Type(() => RegionUpdateWithoutCitiesInput)
    update?: RegionUpdateWithoutCitiesInput;
}
