import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ComplexUpdateManyWithoutDistrictNestedInput } from '../complex/complex-update-many-without-district-nested.input';
import { BuildingUpdateManyWithoutDistrictNestedInput } from '../building/building-update-many-without-district-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class DistrictUpdateWithoutCityInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ComplexUpdateManyWithoutDistrictNestedInput, {nullable:true})
    complexes?: ComplexUpdateManyWithoutDistrictNestedInput;

    @Field(() => BuildingUpdateManyWithoutDistrictNestedInput, {nullable:true})
    buildings?: BuildingUpdateManyWithoutDistrictNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
