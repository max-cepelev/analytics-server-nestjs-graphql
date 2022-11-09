import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { GroupUpdateOneRequiredWithoutComplexesNestedInput } from '../group/group-update-one-required-without-complexes-nested.input';
import { CityUpdateOneRequiredWithoutComplexesNestedInput } from '../city/city-update-one-required-without-complexes-nested.input';
import { DistrictUpdateOneRequiredWithoutComplexesNestedInput } from '../district/district-update-one-required-without-complexes-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class ComplexUpdateWithoutBuildingsInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    shortName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    website?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    info?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    domRfId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    domClickId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => GroupUpdateOneRequiredWithoutComplexesNestedInput, {nullable:true})
    group?: GroupUpdateOneRequiredWithoutComplexesNestedInput;

    @Field(() => CityUpdateOneRequiredWithoutComplexesNestedInput, {nullable:true})
    city?: CityUpdateOneRequiredWithoutComplexesNestedInput;

    @Field(() => DistrictUpdateOneRequiredWithoutComplexesNestedInput, {nullable:true})
    district?: DistrictUpdateOneRequiredWithoutComplexesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
