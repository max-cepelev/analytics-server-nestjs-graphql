import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { ComplexUncheckedUpdateManyWithoutDistrictNestedInput } from '../complex/complex-unchecked-update-many-without-district-nested.input';
import { BuildingUncheckedUpdateManyWithoutDistrictNestedInput } from '../building/building-unchecked-update-many-without-district-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class DistrictUncheckedUpdateWithoutCityInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => ComplexUncheckedUpdateManyWithoutDistrictNestedInput, {nullable:true})
    complexes?: ComplexUncheckedUpdateManyWithoutDistrictNestedInput;

    @Field(() => BuildingUncheckedUpdateManyWithoutDistrictNestedInput, {nullable:true})
    buildings?: BuildingUncheckedUpdateManyWithoutDistrictNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
