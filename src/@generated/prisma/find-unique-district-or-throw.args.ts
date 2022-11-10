import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DistrictWhereUniqueInput } from '../district/district-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueDistrictOrThrowArgs {

    @Field(() => DistrictWhereUniqueInput, {nullable:false})
    @Type(() => DistrictWhereUniqueInput)
    where!: DistrictWhereUniqueInput;
}
