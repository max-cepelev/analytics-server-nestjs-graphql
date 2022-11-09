import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { RegionUpdateManyWithoutGroupsNestedInput } from '../region/region-update-many-without-groups-nested.input';
import { BuildingUpdateManyWithoutGroupNestedInput } from '../building/building-update-many-without-group-nested.input';
import { DeveloperUpdateManyWithoutGroupNestedInput } from '../developer/developer-update-many-without-group-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class GroupUpdateWithoutComplexesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => RegionUpdateManyWithoutGroupsNestedInput, {nullable:true})
    regions?: RegionUpdateManyWithoutGroupsNestedInput;

    @Field(() => BuildingUpdateManyWithoutGroupNestedInput, {nullable:true})
    buildings?: BuildingUpdateManyWithoutGroupNestedInput;

    @Field(() => DeveloperUpdateManyWithoutGroupNestedInput, {nullable:true})
    developers?: DeveloperUpdateManyWithoutGroupNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
