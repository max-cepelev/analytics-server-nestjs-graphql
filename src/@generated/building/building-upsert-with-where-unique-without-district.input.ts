import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutDistrictInput } from './building-update-without-district.input';
import { BuildingCreateWithoutDistrictInput } from './building-create-without-district.input';

@InputType()
export class BuildingUpsertWithWhereUniqueWithoutDistrictInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutDistrictInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutDistrictInput)
    update!: BuildingUpdateWithoutDistrictInput;

    @Field(() => BuildingCreateWithoutDistrictInput, {nullable:false})
    @Type(() => BuildingCreateWithoutDistrictInput)
    create!: BuildingCreateWithoutDistrictInput;
}
