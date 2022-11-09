import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableEnumPropertyClassFieldUpdateOperationsInput } from '../prisma/nullable-enum-property-class-field-update-operations.input';
import { NullableEnumDecorTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-decor-type-field-update-operations.input';
import { NullableEnumWallMaterialFieldUpdateOperationsInput } from '../prisma/nullable-enum-wall-material-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { SaleUncheckedUpdateManyWithoutBuildingNestedInput } from '../sale/sale-unchecked-update-many-without-building-nested.input';
import { PropertyUncheckedUpdateManyWithoutBuildingNestedInput } from '../property/property-unchecked-update-many-without-building-nested.input';

@InputType()
export class BuildingUncheckedUpdateWithoutCityInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    completionDate?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    completed?: BoolFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    latitude?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    longitude?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableEnumPropertyClassFieldUpdateOperationsInput, {nullable:true})
    propertyClass?: NullableEnumPropertyClassFieldUpdateOperationsInput;

    @Field(() => NullableEnumDecorTypeFieldUpdateOperationsInput, {nullable:true})
    decorType?: NullableEnumDecorTypeFieldUpdateOperationsInput;

    @Field(() => NullableEnumWallMaterialFieldUpdateOperationsInput, {nullable:true})
    wallMaterial?: NullableEnumWallMaterialFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    img?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    domRfId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    domClickId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    districtId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    developerId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    groupId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    complexId?: IntFieldUpdateOperationsInput;

    @Field(() => SaleUncheckedUpdateManyWithoutBuildingNestedInput, {nullable:true})
    sales?: SaleUncheckedUpdateManyWithoutBuildingNestedInput;

    @Field(() => PropertyUncheckedUpdateManyWithoutBuildingNestedInput, {nullable:true})
    properties?: PropertyUncheckedUpdateManyWithoutBuildingNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
