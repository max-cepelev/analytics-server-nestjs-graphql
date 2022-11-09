import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DistrictUpdateManyWithoutCityNestedInput } from '../district/district-update-many-without-city-nested.input';
import { ComplexUpdateManyWithoutCityNestedInput } from '../complex/complex-update-many-without-city-nested.input';
import { BuildingUpdateManyWithoutCityNestedInput } from '../building/building-update-many-without-city-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CityUpdateWithoutRegionInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => DistrictUpdateManyWithoutCityNestedInput, {nullable:true})
    districts?: DistrictUpdateManyWithoutCityNestedInput;

    @Field(() => ComplexUpdateManyWithoutCityNestedInput, {nullable:true})
    complexes?: ComplexUpdateManyWithoutCityNestedInput;

    @Field(() => BuildingUpdateManyWithoutCityNestedInput, {nullable:true})
    buildings?: BuildingUpdateManyWithoutCityNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
