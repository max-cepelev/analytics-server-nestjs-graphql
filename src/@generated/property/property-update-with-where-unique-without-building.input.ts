import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';
import { PropertyUpdateWithoutBuildingInput } from './property-update-without-building.input';

@InputType()
export class PropertyUpdateWithWhereUniqueWithoutBuildingInput {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: PropertyWhereUniqueInput;

    @Field(() => PropertyUpdateWithoutBuildingInput, {nullable:false})
    @Type(() => PropertyUpdateWithoutBuildingInput)
    data!: PropertyUpdateWithoutBuildingInput;
}
