import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecorType } from './decor-type.enum';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumDecorTypeNullableFilter } from './nested-enum-decor-type-nullable-filter.input';

@InputType()
export class NestedEnumDecorTypeNullableWithAggregatesFilter {

    @Field(() => DecorType, {nullable:true})
    equals?: keyof typeof DecorType;

    @Field(() => [DecorType], {nullable:true})
    in?: Array<keyof typeof DecorType>;

    @Field(() => [DecorType], {nullable:true})
    notIn?: Array<keyof typeof DecorType>;

    @Field(() => NestedEnumDecorTypeNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumDecorTypeNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumDecorTypeNullableFilter, {nullable:true})
    _min?: NestedEnumDecorTypeNullableFilter;

    @Field(() => NestedEnumDecorTypeNullableFilter, {nullable:true})
    _max?: NestedEnumDecorTypeNullableFilter;
}
