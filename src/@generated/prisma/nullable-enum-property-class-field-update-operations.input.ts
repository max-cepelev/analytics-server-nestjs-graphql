import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyClass } from './property-class.enum';

@InputType()
export class NullableEnumPropertyClassFieldUpdateOperationsInput {

    @Field(() => PropertyClass, {nullable:true})
    set?: keyof typeof PropertyClass;
}
