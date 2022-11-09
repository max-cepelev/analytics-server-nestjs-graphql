import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { WallMaterial } from './wall-material.enum';

@InputType()
export class NullableEnumWallMaterialFieldUpdateOperationsInput {

    @Field(() => WallMaterial, {nullable:true})
    set?: keyof typeof WallMaterial;
}
