import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionUpdateManyWithoutGroupsNestedInput } from '../region/region-update-many-without-groups-nested.input';
import { BuildingUpdateManyWithoutGroupNestedInput } from '../building/building-update-many-without-group-nested.input';
import { ComplexUpdateManyWithoutGroupNestedInput } from '../complex/complex-update-many-without-group-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class GroupUpdateWithoutDevelopersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RegionUpdateManyWithoutGroupsNestedInput, {nullable:true})
    regions?: RegionUpdateManyWithoutGroupsNestedInput;

    @Field(() => BuildingUpdateManyWithoutGroupNestedInput, {nullable:true})
    buildings?: BuildingUpdateManyWithoutGroupNestedInput;

    @Field(() => ComplexUpdateManyWithoutGroupNestedInput, {nullable:true})
    complexes?: ComplexUpdateManyWithoutGroupNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
