import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DistrictUncheckedUpdateManyWithoutCityNestedInput } from '../district/district-unchecked-update-many-without-city-nested.input';
import { ComplexUncheckedUpdateManyWithoutCityNestedInput } from '../complex/complex-unchecked-update-many-without-city-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class CityUncheckedUpdateWithoutBuildingsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    regionId?: IntFieldUpdateOperationsInput;

    @Field(() => DistrictUncheckedUpdateManyWithoutCityNestedInput, {nullable:true})
    districts?: DistrictUncheckedUpdateManyWithoutCityNestedInput;

    @Field(() => ComplexUncheckedUpdateManyWithoutCityNestedInput, {nullable:true})
    complexes?: ComplexUncheckedUpdateManyWithoutCityNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
