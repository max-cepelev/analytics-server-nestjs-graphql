import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingUpdateWithoutDistrictInput } from './building-update-without-district.input';

@InputType()
export class BuildingUpdateWithWhereUniqueWithoutDistrictInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingUpdateWithoutDistrictInput, {nullable:false})
    @Type(() => BuildingUpdateWithoutDistrictInput)
    data!: BuildingUpdateWithoutDistrictInput;
}
