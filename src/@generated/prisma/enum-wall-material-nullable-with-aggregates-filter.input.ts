import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WallMaterial } from './wall-material.enum';
import { NestedEnumWallMaterialNullableWithAggregatesFilter } from './nested-enum-wall-material-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumWallMaterialNullableFilter } from './nested-enum-wall-material-nullable-filter.input';

@InputType()
export class EnumWallMaterialNullableWithAggregatesFilter {

    @Field(() => WallMaterial, {nullable:true})
    equals?: keyof typeof WallMaterial;

    @Field(() => [WallMaterial], {nullable:true})
    in?: Array<keyof typeof WallMaterial>;

    @Field(() => [WallMaterial], {nullable:true})
    notIn?: Array<keyof typeof WallMaterial>;

    @Field(() => NestedEnumWallMaterialNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumWallMaterialNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumWallMaterialNullableFilter, {nullable:true})
    _min?: NestedEnumWallMaterialNullableFilter;

    @Field(() => NestedEnumWallMaterialNullableFilter, {nullable:true})
    _max?: NestedEnumWallMaterialNullableFilter;
}
