import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyWhereInput } from '../property/property-where.input';
import { Type } from 'class-transformer';
import { PropertyOrderByWithRelationInput } from '../property/property-order-by-with-relation.input';
import { PropertyWhereUniqueInput } from '../property/property-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PropertyScalarFieldEnum } from '../property/property-scalar-field.enum';

@ArgsType()
export class FindFirstPropertyOrThrowArgs {

    @Field(() => PropertyWhereInput, {nullable:true})
    @Type(() => PropertyWhereInput)
    where?: PropertyWhereInput;

    @Field(() => [PropertyOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PropertyOrderByWithRelationInput>;

    @Field(() => PropertyWhereUniqueInput, {nullable:true})
    cursor?: PropertyWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PropertyScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PropertyScalarFieldEnum>;
}
