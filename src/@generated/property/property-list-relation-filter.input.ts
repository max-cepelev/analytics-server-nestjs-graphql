import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyWhereInput } from './property-where.input';

@InputType()
export class PropertyListRelationFilter {

    @Field(() => PropertyWhereInput, {nullable:true})
    every?: PropertyWhereInput;

    @Field(() => PropertyWhereInput, {nullable:true})
    some?: PropertyWhereInput;

    @Field(() => PropertyWhereInput, {nullable:true})
    none?: PropertyWhereInput;
}
