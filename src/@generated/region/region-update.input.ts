import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CityUpdateManyWithoutRegionNestedInput } from '../city/city-update-many-without-region-nested.input';
import { GroupUpdateManyWithoutRegionsNestedInput } from '../group/group-update-many-without-regions-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class RegionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CityUpdateManyWithoutRegionNestedInput, {nullable:true})
    cities?: CityUpdateManyWithoutRegionNestedInput;

    @Field(() => GroupUpdateManyWithoutRegionsNestedInput, {nullable:true})
    groups?: GroupUpdateManyWithoutRegionsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
