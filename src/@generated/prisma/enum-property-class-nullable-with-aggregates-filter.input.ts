import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyClass } from './property-class.enum';
import { NestedEnumPropertyClassNullableWithAggregatesFilter } from './nested-enum-property-class-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumPropertyClassNullableFilter } from './nested-enum-property-class-nullable-filter.input';

@InputType()
export class EnumPropertyClassNullableWithAggregatesFilter {

    @Field(() => PropertyClass, {nullable:true})
    equals?: keyof typeof PropertyClass;

    @Field(() => [PropertyClass], {nullable:true})
    in?: Array<keyof typeof PropertyClass>;

    @Field(() => [PropertyClass], {nullable:true})
    notIn?: Array<keyof typeof PropertyClass>;

    @Field(() => NestedEnumPropertyClassNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPropertyClassNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumPropertyClassNullableFilter, {nullable:true})
    _min?: NestedEnumPropertyClassNullableFilter;

    @Field(() => NestedEnumPropertyClassNullableFilter, {nullable:true})
    _max?: NestedEnumPropertyClassNullableFilter;
}
