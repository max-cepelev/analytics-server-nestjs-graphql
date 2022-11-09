import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionUncheckedUpdateManyWithoutGroupsNestedInput } from '../region/region-unchecked-update-many-without-groups-nested.input';
import { BuildingUncheckedUpdateManyWithoutGroupNestedInput } from '../building/building-unchecked-update-many-without-group-nested.input';
import { ComplexUncheckedUpdateManyWithoutGroupNestedInput } from '../complex/complex-unchecked-update-many-without-group-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class GroupUncheckedUpdateWithoutDevelopersInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RegionUncheckedUpdateManyWithoutGroupsNestedInput, {nullable:true})
    regions?: RegionUncheckedUpdateManyWithoutGroupsNestedInput;

    @Field(() => BuildingUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    buildings?: BuildingUncheckedUpdateManyWithoutGroupNestedInput;

    @Field(() => ComplexUncheckedUpdateManyWithoutGroupNestedInput, {nullable:true})
    complexes?: ComplexUncheckedUpdateManyWithoutGroupNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
