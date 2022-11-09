import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyType } from './property-type.enum';

@InputType()
export class NestedEnumPropertyTypeFilter {

    @Field(() => PropertyType, {nullable:true})
    equals?: keyof typeof PropertyType;

    @Field(() => [PropertyType], {nullable:true})
    in?: Array<keyof typeof PropertyType>;

    @Field(() => [PropertyType], {nullable:true})
    notIn?: Array<keyof typeof PropertyType>;

    @Field(() => NestedEnumPropertyTypeFilter, {nullable:true})
    not?: NestedEnumPropertyTypeFilter;
}
