import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingUpdateWithoutPropertiesInput } from './building-update-without-properties.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutPropertiesInput } from './building-create-without-properties.input';

@InputType()
export class BuildingUpsertWithoutPropertiesInput {

    @Field(() => BuildingUpdateWithoutPropertiesInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutPropertiesInput)
    update!: BuildingUpdateWithoutPropertiesInput;

    @Field(() => BuildingCreateWithoutPropertiesInput, {nullable:false})
    @Type(() => BuildingCreateWithoutPropertiesInput)
    create!: BuildingCreateWithoutPropertiesInput;
}
