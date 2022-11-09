import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutPropertiesInput } from './building-create-without-properties.input';

@InputType()
export class BuildingCreateOrConnectWithoutPropertiesInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingCreateWithoutPropertiesInput, {nullable:false})
    @Type(() => BuildingCreateWithoutPropertiesInput)
    create!: BuildingCreateWithoutPropertiesInput;
}
