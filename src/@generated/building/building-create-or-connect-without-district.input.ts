import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutDistrictInput } from './building-create-without-district.input';

@InputType()
export class BuildingCreateOrConnectWithoutDistrictInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingCreateWithoutDistrictInput, {nullable:false})
    @Type(() => BuildingCreateWithoutDistrictInput)
    create!: BuildingCreateWithoutDistrictInput;
}
