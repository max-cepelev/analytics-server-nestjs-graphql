import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateWithoutBuildingInput } from './property-create-without-building.input';
import { Type } from 'class-transformer';
import { PropertyCreateOrConnectWithoutBuildingInput } from './property-create-or-connect-without-building.input';
import { PropertyCreateManyBuildingInputEnvelope } from './property-create-many-building-input-envelope.input';
import { PropertyWhereUniqueInput } from './property-where-unique.input';

@InputType()
export class PropertyCreateNestedManyWithoutBuildingInput {

    @Field(() => [PropertyCreateWithoutBuildingInput], {nullable:true})
    @Type(() => PropertyCreateWithoutBuildingInput)
    create?: Array<PropertyCreateWithoutBuildingInput>;

    @Field(() => [PropertyCreateOrConnectWithoutBuildingInput], {nullable:true})
    @Type(() => PropertyCreateOrConnectWithoutBuildingInput)
    connectOrCreate?: Array<PropertyCreateOrConnectWithoutBuildingInput>;

    @Field(() => PropertyCreateManyBuildingInputEnvelope, {nullable:true})
    @Type(() => PropertyCreateManyBuildingInputEnvelope)
    createMany?: PropertyCreateManyBuildingInputEnvelope;

    @Field(() => [PropertyWhereUniqueInput], {nullable:true})
    @Type(() => PropertyWhereUniqueInput)
    connect?: Array<PropertyWhereUniqueInput>;
}
