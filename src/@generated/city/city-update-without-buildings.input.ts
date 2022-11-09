import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionUpdateOneRequiredWithoutCitiesNestedInput } from '../region/region-update-one-required-without-cities-nested.input';
import { DistrictUpdateManyWithoutCityNestedInput } from '../district/district-update-many-without-city-nested.input';
import { ComplexUpdateManyWithoutCityNestedInput } from '../complex/complex-update-many-without-city-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CityUpdateWithoutBuildingsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RegionUpdateOneRequiredWithoutCitiesNestedInput, {nullable:true})
    region?: RegionUpdateOneRequiredWithoutCitiesNestedInput;

    @Field(() => DistrictUpdateManyWithoutCityNestedInput, {nullable:true})
    districts?: DistrictUpdateManyWithoutCityNestedInput;

    @Field(() => ComplexUpdateManyWithoutCityNestedInput, {nullable:true})
    complexes?: ComplexUpdateManyWithoutCityNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
