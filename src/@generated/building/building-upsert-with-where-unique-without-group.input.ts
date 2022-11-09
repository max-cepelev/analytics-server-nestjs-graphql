import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutGroupInput } from './building-update-without-group.input';
import { BuildingCreateWithoutGroupInput } from './building-create-without-group.input';

@InputType()
export class BuildingUpsertWithWhereUniqueWithoutGroupInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutGroupInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutGroupInput)
    update!: BuildingUpdateWithoutGroupInput;

    @Field(() => BuildingCreateWithoutGroupInput, {nullable:false})
    @Type(() => BuildingCreateWithoutGroupInput)
    create!: BuildingCreateWithoutGroupInput;
}
