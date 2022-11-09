import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutBuildingInput } from './property-create-without-building.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutBuildingInput } from './property-create-or-connect-without-building.input';
import { PropertyUpsertWithWhereUniqueWithoutBuildingInput } from './property-upsert-with-where-unique-without-building.input';
import { PropertyCreateManyBuildingInputEnvelope } from './property-create-many-building-input-envelope.input';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { PropertyUpdateWithWhereUniqueWithoutBuildingInput } from './property-update-with-where-unique-without-building.input';
import { PropertyUpdateManyWithWhereWithoutBuildingInput } from './property-update-many-with-where-without-building.input';
import { PropertyScalarWhereInput } from './property-scalar-where.input';

@InputType()
export class PropertyUncheckedUpdateManyWithoutBuildingNestedInput {

    @Field(() => [PropertyCreateWithoutBuildingInput], {nullable:true})
    @Type(() => PropertyCreateWithoutBuildingInput)
    create?: Array<PropertyCreateWithoutBuildingInput>;

    @Field(() => [PropertyCreateOrConnectWithoutBuildingInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutBuildingInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutBuildingInput>;

    @Field(() => [PropertyUpsertWithWhereUniqueWithoutBuildingInput], {nullable:true})
    @Type(() => PropertyUpsertWithWhereUniqueWithoutBuildingInput)
    upsert?: Array<PropertyUpsertWithWhereUniqueWithoutBuildingInput>;

    @Field(() => PropertyCreateManyBuildingInputEnvelope, {nullable:true})
    @Type(() => PropertyCreateManyBuildingInputEnvelope)
    createMany?: PropertyCreateManyBuildingInputEnvelope;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    set?: Array<PropertyWhereUniqueInput>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    disconnect?: Array<PropertyWhereUniqueInput>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    delete?: Array<PropertyWhereUniqueInput>;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<PropertyWhereUniqueInput>;

    @Field(() => [PropertyUpdateWithWhereUniqueWithoutBuildingInput], {nullable:true})
    @Type(() => PropertyUpdateWithWhereUniqueWithoutBuildingInput)
    update?: Array<PropertyUpdateWithWhereUniqueWithoutBuildingInput>;

    @Field(() => [PropertyUpdateManyWithWhereWithoutBuildingInput], {nullable:true})
    @Type(() => PropertyUpdateManyWithWhereWithoutBuildingInput)
    updateMany?: Array<PropertyUpdateManyWithWhereWithoutBuildingInput>;

    @Field(() => [PropertyScalarWhereInput], {nullable:true})
    @Type(() => PropertyScalarWhereInput)
    deleteMany?: Array<PropertyScalarWhereInput>;
}
