import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutPropertiesInput } from './building-create-without-properties.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutPropertiesInput } from './building-create-or-connect-without-properties.input';
import { BuildingUpsertWithoutPropertiesInput } from './building-upsert-without-properties.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { BuildingUpdateWithoutPropertiesInput } from './building-update-without-properties.input';

@InputType()
export class BuildingUpdateOneRequiredWithoutPropertiesNestedInput {

    @Field(() => BuildingCreateWithoutPropertiesInput, {nullable:true})
    @Type(() => BuildingCreateWithoutPropertiesInput)
    create?: BuildingCreateWithoutPropertiesInput;

    @Field(() => BuildingCreateOrConnectWithoutPropertiesInput, {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutPropertiesInput)
    connectOrCreate?: BuildingCreateOrConnectWithoutPropertiesInput;

    @Field(() => BuildingUpsertWithoutPropertiesInput, {nullable:true})
    @Type(() => BuildingUpsertWithoutPropertiesInput)
    upsert?: BuildingUpsertWithoutPropertiesInput;

    @Field(() => BuildingWhereUniqueInput, {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutPropertiesInput, {nullable:true})
    @Type(() => BuildingUpdateWithoutPropertiesInput)
    update?: BuildingUpdateWithoutPropertiesInput;
}
