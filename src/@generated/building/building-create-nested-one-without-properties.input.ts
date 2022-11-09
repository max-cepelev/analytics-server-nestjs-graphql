import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateWithoutPropertiesInput } from './building-create-without-properties.input';
import { Type } from 'class-transformer';
import { BuildingCreateOrConnectWithoutPropertiesInput } from './building-create-or-connect-without-properties.input';
import { BuildingWhereUniqueInput } from './building-where-unique.input';

@InputType()
export class BuildingCreateNestedOneWithoutPropertiesInput {

    @Field(() => BuildingCreateWithoutPropertiesInput, {nullable:true})
    @Type(() => BuildingCreateWithoutPropertiesInput)
    create?: BuildingCreateWithoutPropertiesInput;

    @Field(() => BuildingCreateOrConnectWithoutPropertiesInput, {nullable:true})
    @Type(() => BuildingCreateOrConnectWithoutPropertiesInput)
    connectOrCreate?: BuildingCreateOrConnectWithoutPropertiesInput;

    @Field(() => BuildingWhereUniqueInput, {nullable:true})
    @Type(() => BuildingWhereUniqueInput)
    connect?: BuildingWhereUniqueInput;
}
