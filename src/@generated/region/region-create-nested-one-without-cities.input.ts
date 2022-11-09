import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RegionCreateWithoutCitiesInput } from './region-create-without-cities.input';
import { Type } from 'class-transformer';
import { RegionCreateOrConnectWithoutCitiesInput } from './region-create-or-connect-without-cities.input';
import { RegionWhereUniqueInput } from './region-where-unique.input';

@InputType()
export class RegionCreateNestedOneWithoutCitiesInput {

    @Field(() => RegionCreateWithoutCitiesInput, {nullable:true})
    @Type(() => RegionCreateWithoutCitiesInput)
    create?: RegionCreateWithoutCitiesInput;

    @Field(() => RegionCreateOrConnectWithoutCitiesInput, {nullable:true})
    @Type(() => RegionCreateOrConnectWithoutCitiesInput)
    connectOrCreate?: RegionCreateOrConnectWithoutCitiesInput;

    @Field(() => RegionWhereUniqueInput, {nullable:true})
    @Type(() => RegionWhereUniqueInput)
    connect?: RegionWhereUniqueInput;
}
