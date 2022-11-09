import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictScalarWhereInput } from './district-scalar-where.input';
import { Type } from 'class-transformer';
import { DistrictUpdateManyMutationInput } from './district-update-many-mutation.input';

@InputType()
export class DistrictUpdateManyWithWhereWithoutCityInput {

    @Field(() => DistrictScalarWhereInput, {nullable:false})
    @Type(() => DistrictScalarWhereInput)
    where!: DistrictScalarWhereInput;

    @Field(() => DistrictUpdateManyMutationInput, {nullable:false})
    @Type(() => DistrictUpdateManyMutationInput)
    data!: DistrictUpdateManyMutationInput;
}
