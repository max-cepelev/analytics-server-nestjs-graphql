import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyType } from './property-type.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPropertyTypeFilter } from './nested-enum-property-type-filter.input';

@InputType()
export class NestedEnumPropertyTypeWithAggregatesFilter {

    @Field(() => PropertyType, {nullable:true})
    equals?: keyof typeof PropertyType;

    @Field(() => [PropertyType], {nullable:true})
    in?: Array<keyof typeof PropertyType>;

    @Field(() => [PropertyType], {nullable:true})
    notIn?: Array<keyof typeof PropertyType>;

    @Field(() => NestedEnumPropertyTypeWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPropertyTypeWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    _min?: NestedEnumPropertyTypeFilter;

    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    _max?: NestedEnumPropertyTypeFilter;
}
