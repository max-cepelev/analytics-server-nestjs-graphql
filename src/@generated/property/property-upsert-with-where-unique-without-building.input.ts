import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutBuildingInput } from './property-update-without-building.input';
import { PropertyCreateWithoutBuildingInput } from './property-create-without-building.input';

@InputType()
export class PropertyUpsertWithWhereUniqueWithoutBuildingInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: PropertyWhereUniqueInput;

    @Field(() => PropertyUpdateWithoutBuildingInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutBuildingInput)
    update!: PropertyUpdateWithoutBuildingInput;

    @Field(() => PropertyCreateWithoutBuildingInput, {nullable:false})
    @Type(() => PropertyCreateWithoutBuildingInput)
    create!: PropertyCreateWithoutBuildingInput;
}
