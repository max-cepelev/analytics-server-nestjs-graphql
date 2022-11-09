import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictWhereInput } from './district-where.input';

@InputType()
export class DistrictListRelationFilter {

    @Field(() => DistrictWhereInput, {nullable:true})
    every?: DistrictWhereInput;

    @Field(() => DistrictWhereInput, {nullable:true})
    some?: DistrictWhereInput;

    @Field(() => DistrictWhereInput, {nullable:true})
    none?: DistrictWhereInput;
}
