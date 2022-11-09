import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyType } from './property-type.enum';

@InputType()
export class EnumPropertyTypeFieldUpdateOperationsInput {

    @Field(() => PropertyType, {nullable:true})
    set?: keyof typeof PropertyType;
}
