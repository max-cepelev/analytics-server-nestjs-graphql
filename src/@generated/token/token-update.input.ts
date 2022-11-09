import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneRequiredWithoutTokenNestedInput } from '../user/user-update-one-required-without-token-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class TokenUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    refreshToken?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutTokenNestedInput, {nullable:true})
    user?: UserUpdateOneRequiredWithoutTokenNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;
}
