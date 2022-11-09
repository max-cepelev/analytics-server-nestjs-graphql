import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictWhereUniqueInput } from './district-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneDistrictArgs {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: DistrictWhereUniqueInput;
}
