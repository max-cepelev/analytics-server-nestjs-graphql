import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableEnumPropertyClassFieldUpdateOperationsInput } from '../prisma/nullable-enum-property-class-field-update-operations.input';
import { NullableEnumDecorTypeFieldUpdateOperationsInput } from '../prisma/nullable-enum-decor-type-field-update-operations.input';
import { NullableEnumWallMaterialFieldUpdateOperationsInput } from '../prisma/nullable-enum-wall-material-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { DistrictUpdateOneRequiredWithoutBuildingsNestedInput } from '../district/district-update-one-required-without-buildings-nested.input';
import { DeveloperUpdateOneRequiredWithoutBuildingsNestedInput } from '../developer/developer-update-one-required-without-buildings-nested.input';
import { GroupUpdateOneRequiredWithoutBuildingsNestedInput } from '../group/group-update-one-required-without-buildings-nested.input';
import { ComplexUpdateOneRequiredWithoutBuildingsNestedInput } from '../complex/complex-update-one-required-without-buildings-nested.input';
import { SaleUpdateManyWithoutBuildingNestedInput } from '../sale/sale-update-many-without-building-nested.input';
import { PropertyUpdateManyWithoutBuildingNestedInput } from '../property/property-update-many-without-building-nested.input';

@InputType()
export class BuildingUpdateWithoutCityInput {

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

    @Field(() => DistrictUpdateOneRequiredWithoutBuildingsNestedInput, {nullable:true})
    district?: DistrictUpdateOneRequiredWithoutBuildingsNestedInput;

    @Field(() => DeveloperUpdateOneRequiredWithoutBuildingsNestedInput, {nullable:true})
    developer?: DeveloperUpdateOneRequiredWithoutBuildingsNestedInput;

    @Field(() => GroupUpdateOneRequiredWithoutBuildingsNestedInput, {nullable:true})
    group?: GroupUpdateOneRequiredWithoutBuildingsNestedInput;

    @Field(() => ComplexUpdateOneRequiredWithoutBuildingsNestedInput, {nullable:true})
    complex?: ComplexUpdateOneRequiredWithoutBuildingsNestedInput;

    @Field(() => SaleUpdateManyWithoutBuildingNestedInput, {nullable:true})
    sales?: SaleUpdateManyWithoutBuildingNestedInput;

    @Field(() => PropertyUpdateManyWithoutBuildingNestedInput, {nullable:true})
    properties?: PropertyUpdateManyWithoutBuildingNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
