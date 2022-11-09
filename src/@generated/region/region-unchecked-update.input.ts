import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CityUncheckedUpdateManyWithoutRegionNestedInput } from '../city/city-unchecked-update-many-without-region-nested.input';
import { GroupUncheckedUpdateManyWithoutRegionsNestedInput } from '../group/group-unchecked-update-many-without-regions-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class RegionUncheckedUpdateInput {
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  id?: IntFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  name?: StringFieldUpdateOperationsInput;

  @Field(() => CityUncheckedUpdateManyWithoutRegionNestedInput, {
    nullable: true,
  })
  cities?: CityUncheckedUpdateManyWithoutRegionNestedInput;

  @Field(() => GroupUncheckedUpdateManyWithoutRegionsNestedInput, {
    nullable: true,
  })
  groups?: GroupUncheckedUpdateManyWithoutRegionsNestedInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: DateTimeFieldUpdateOperationsInput;

  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: DateTimeFieldUpdateOperationsInput;
}
