import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutRegionInput } from './city-create-without-region.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutRegionInput } from './city-create-or-connect-without-region.input';
import { CityCreateManyRegionInputEnvelope } from './city-create-many-region-input-envelope.input';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityUncheckedCreateNestedManyWithoutRegionInput {

    @Field(() => [CityCreateWithoutRegionInput], {nullable:true})
    @Type(() => CityCreateWithoutRegionInput)
    create?: Array<CityCreateWithoutRegionInput>;

    @Field(() => [CityCreateOrConnectWithoutRegionInput], {nullable:true})
    @Type(() => CityCreateOrConnectWithoutRegionInput)
    connectOrCreate?: Array<CityCreateOrConnectWithoutRegionInput>;

    @Field(() => CityCreateManyRegionInputEnvelope, {nullable:true})
    @Type(() => CityCreateManyRegionInputEnvelope)
    createMany?: CityCreateManyRegionInputEnvelope;

    @Field(() => [CityWhereUniqueInput], {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: Array<CityWhereUniqueInput>;
}
