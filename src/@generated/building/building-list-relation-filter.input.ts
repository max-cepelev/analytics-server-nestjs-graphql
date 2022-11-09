import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereInput } from './building-where.input';

@InputType()
export class BuildingListRelationFilter {

    @Field(() => BuildingWhereInput, {nullable:true})
    every?: BuildingWhereInput;

    @Field(() => BuildingWhereInput, {nullable:true})
    some?: BuildingWhereInput;

    @Field(() => BuildingWhereInput, {nullable:true})
    none?: BuildingWhereInput;
}
