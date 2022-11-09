import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateNestedOneWithoutDistrictsInput } from '../city/city-create-nested-one-without-districts.input';
import { BuildingCreateNestedManyWithoutDistrictInput } from '../building/building-create-nested-many-without-district.input';

@InputType()
export class DistrictCreateWithoutComplexesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CityCreateNestedOneWithoutDistrictsInput, {nullable:false})
    city!: CityCreateNestedOneWithoutDistrictsInput;

    @Field(() => BuildingCreateNestedManyWithoutDistrictInput, {nullable:true})
    buildings?: BuildingCreateNestedManyWithoutDistrictInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
