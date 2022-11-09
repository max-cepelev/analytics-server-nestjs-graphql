import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { EnumPropertyTypeFieldUpdateOperationsInput } from '../prisma/enum-property-type-field-update-operations.input';
import { BuildingUpdateOneRequiredWithoutSalesNestedInput } from '../building/building-update-one-required-without-sales-nested.input';

@InputType()
export class SaleUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    month?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    year?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    amount?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    area?: FloatFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    sum?: FloatFieldUpdateOperationsInput;

    @Field(() => EnumPropertyTypeFieldUpdateOperationsInput, {nullable:true})
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput;

    @Field(() => BuildingUpdateOneRequiredWithoutSalesNestedInput, {nullable:true})
    building?: BuildingUpdateOneRequiredWithoutSalesNestedInput;
}
