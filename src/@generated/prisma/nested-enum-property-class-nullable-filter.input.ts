import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyClass } from './property-class.enum';

@InputType()
export class NestedEnumPropertyClassNullableFilter {

    @Field(() => PropertyClass, {nullable:true})
    equals?: keyof typeof PropertyClass;

    @Field(() => [PropertyClass], {nullable:true})
    in?: Array<keyof typeof PropertyClass>;

    @Field(() => [PropertyClass], {nullable:true})
    notIn?: Array<keyof typeof PropertyClass>;

    @Field(() => NestedEnumPropertyClassNullableFilter, {nullable:true})
    not?: NestedEnumPropertyClassNullableFilter;
}
