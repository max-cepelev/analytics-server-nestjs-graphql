import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionUncheckedUpdateManyWithoutGroupsNestedInput } from '../region/region-unchecked-update-many-without-groups-nested.input';
import { DeveloperUncheckedUpdateManyWithoutGroupNestedInput } from '../developer/developer-unchecked-update-many-without-group-nested.input';
import { ComplexUncheckedUpdateManyWithoutGroupNestedInput } from '../complex/complex-unchecked-update-many-without-group-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class GroupUncheckedUpdateWithoutBuildingsInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RegionUncheckedUpdateManyWithoutGroupsNestedInput, {nullable:true})
    regions?: RegionUncheckedUpdateManyWithoutGroupsNestedInput;

    @Field(() => DeveloperUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    developers?: DeveloperUncheckedUpdateManyWithoutGroupNestedInput;

    @Field(() => ComplexUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    complexes?: ComplexUncheckedUpdateManyWithoutGroupNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
