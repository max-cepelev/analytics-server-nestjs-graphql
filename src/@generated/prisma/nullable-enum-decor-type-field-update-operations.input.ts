import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecorType } from './decor-type.enum';

@InputType()
export class NullableEnumDecorTypeFieldUpdateOperationsInput {

    @Field(() => DecorType, {nullable:true})
    set?: keyof typeof DecorType;
}
