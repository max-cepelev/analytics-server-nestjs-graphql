import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutLogsNestedInput } from '../user/user-update-one-required-without-logs-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class LogUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    operation?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutLogsNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutLogsNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;
}
