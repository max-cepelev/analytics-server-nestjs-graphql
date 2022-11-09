import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutGroupInput } from './building-update-without-group.input';

@InputType()
export class BuildingUpdateWithWhereUniqueWithoutGroupInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutGroupInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutGroupInput)
    data!: BuildingUpdateWithoutGroupInput;
}
