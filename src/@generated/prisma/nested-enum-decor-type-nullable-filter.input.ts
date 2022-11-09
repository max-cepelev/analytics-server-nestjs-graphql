import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DecorType } from './decor-type.enum';

@InputType()
export class NestedEnumDecorTypeNullableFilter {

    @Field(() => DecorType, {nullable:true})
    equals?: keyof typeof DecorType;

    @Field(() => [DecorType], {nullable:true})
    in?: Array<keyof typeof DecorType>;

    @Field(() => [DecorType], {nullable:true})
    notIn?: Array<keyof typeof DecorType>;

    @Field(() => NestedEnumDecorTypeNullableFilter, {nullable:true})
    not?: NestedEnumDecorTypeNullableFilter;
}
