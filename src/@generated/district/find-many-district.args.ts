import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictWhereInput } from './district-where.input';
import { Type } from 'class-transformer';
import { DistrictOrderByWithRelationInput } from './district-order-by-with-relation.input';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DistrictScalarFieldEnum } from './district-scalar-field.enum';

@ArgsType()
export class FindManyDistrictArgs {

    @Field(() => DistrictWhereInput, {nullable:true})
    @Type(() => DistrictWhereInput)
    where?: DistrictWhereInput;

    @Field(() => [DistrictOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DistrictOrderByWithRelationInput>;

    @Field(() => DistrictWhereUniqueInput, {nullable:true})
    cursor?: DistrictWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DistrictScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DistrictScalarFieldEnum>;
}
