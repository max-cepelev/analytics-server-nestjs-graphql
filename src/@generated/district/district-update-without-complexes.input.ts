import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CityUpdateOneRequiredWithoutDistrictsNestedInput } from '../city/city-update-one-required-without-districts-nested.input';
import { BuildingUpdateManyWithoutDistrictNestedInput } from '../building/building-update-many-without-district-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class DistrictUpdateWithoutComplexesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CityUpdateOneRequiredWithoutDistrictsNestedInput, {nullable:true})
    city?: CityUpdateOneRequiredWithoutDistrictsNestedInput;

    @Field(() => BuildingUpdateManyWithoutDistrictNestedInput, {nullable:true})
    buildings?: BuildingUpdateManyWithoutDistrictNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
