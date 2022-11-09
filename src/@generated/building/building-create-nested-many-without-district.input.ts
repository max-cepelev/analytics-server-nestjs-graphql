import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutDistrictInput } from './building-create-without-district.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutDistrictInput } from './building-create-or-connect-without-district.input';
import { BuildingCreateManyDistrictInputEnvelope } from './building-create-many-district-input-envelope.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedManyWithoutDistrictInput {

    @Field(() => [BuildingCreateWithoutDistrictInput], {nullable:true})
    @Type(() => BuildingCreateWithoutDistrictInput)
    create?: Array<BuildingCreateWithoutDistrictInput>;

    @Field(() => [BuildingCreateOrConnectWithoutDistrictInput], {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutDistrictInput)
    connectOrCreate?: Array<BuildingCreateOrConnectWithoutDistrictInput>;

    @Field(() => BuildingCreateManyDistrictInputEnvelope, {nullable:true})
    @Type(() => BuildingCreateManyDistrictInputEnvelope)
    createMany?: BuildingCreateManyDistrictInputEnvelope;

    @Field(() => [BuildingWhereUniqueInput], {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: Array<BuildingWhereUniqueInput>;
}
