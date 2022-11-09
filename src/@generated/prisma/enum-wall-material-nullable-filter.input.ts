import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WallMaterial } from './wall-material.enum';
import { NestedEnumWallMaterialNullableFilter } from './nested-enum-wall-material-nullable-filter.input';

@InputType()
export class EnumWallMaterialNullableFilter {

    @Field(() => WallMaterial, {nullable:true})
    equals?: keyof typeof WallMaterial;

    @Field(() => [WallMaterial], {nullable:true})
    in?: Array<keyof typeof WallMaterial>;

    @Field(() => [WallMaterial], {nullable:true})
    notIn?: Array<keyof typeof WallMaterial>;

    @Field(() => NestedEnumWallMaterialNullableFilter, {nullable:true})
    not?: NestedEnumWallMaterialNullableFilter;
}
