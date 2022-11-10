import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperWhereInput } from '../developer/developer-where.input';
import { Type } from 'class-transformer';
import { DeveloperOrderByWithRelationInput } from '../developer/developer-order-by-with-relation.input';
import { DeveloperWhereUniqueInput } from '../developer/developer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DeveloperScalarFieldEnum } from '../developer/developer-scalar-field.enum';

@ArgsType()
export class FindFirstDeveloperOrThrowArgs {

    @Field(() => DeveloperWhereInput, {nullable:true})
    @Type(() => DeveloperWhereInput)
    where?: DeveloperWhereInput;

    @Field(() => [DeveloperOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DeveloperOrderByWithRelationInput>;

    @Field(() => DeveloperWhereUniqueInput, {nullable:true})
    cursor?: DeveloperWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [DeveloperScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof DeveloperScalarFieldEnum>;
}
