import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';
import { DistrictCreateInput } from './district-create.input';
import { DistrictUpdateInput } from './district-update.input';

@ArgsType()
export class UpsertOneDistrictArgs {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: DistrictWhereUniqueInput;

    @Field(() => DistrictCreateInput, {nullable:false})
    @Type(() => DistrictCreateInput)
    create!: DistrictCreateInput;

    @Field(() => DistrictUpdateInput, {nullable:false})
    @Type(() => DistrictUpdateInput)
    update!: DistrictUpdateInput;
}
