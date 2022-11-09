import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyCreateWithoutBuildingInput } from './property-create-without-building.input';

@InputType()
export class PropertyCreateOrConnectWithoutBuildingInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: PropertyWhereUniqueInput;

    @Field(() => PropertyCreateWithoutBuildingInput, {nullable:false})
    @Type(() => PropertyCreateWithoutBuildingInput)
    create!: PropertyCreateWithoutBuildingInput;
}
