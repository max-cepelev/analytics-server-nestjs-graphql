import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { EnumPropertyTypeFieldUpdateOperationsInput } from '../prisma/enum-property-type-field-update-operations.input';
import { BuildingUpdateOneRequiredWithoutPropertiesNestedInput } from '../building/building-update-one-required-without-properties-nested.input';

@InputType()
export class PropertyUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    number?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    floor?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    entrance?: NullableIntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    totalArea?: FloatFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    livingArea?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    rooms?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    wallHeight?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput;

    @Field(() => BuildingUpdateOneRequiredWithoutPropertiesNestedInput, {nullable:true})
    building?: BuildingUpdateOneRequiredWithoutPropertiesNestedInput;
}
