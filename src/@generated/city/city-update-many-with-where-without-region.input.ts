import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityScalarWhereInput } from './city-scalar-where.input';
import { Type } from 'class-transformer';
import { CityUpdateManyMutationInput } from './city-update-many-mutation.input';

@InputType()
export class CityUpdateManyWithWhereWithoutRegionInput {

    @Field(() => CityScalarWhereInput, {nullable:false})
    @Type(() => CityScalarWhereInput)
    where!: CityScalarWhereInput;

    @Field(() => CityUpdateManyMutationInput, {nullable:false})
    @Type(() => CityUpdateManyMutationInput)
    data!: CityUpdateManyMutationInput;
}
