import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityWhereUniqueInput } from './city-where-unique.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutComplexesInput } from './city-create-without-complexes.input';

@InputType()
export class CityCreateOrConnectWithoutComplexesInput {

    @Field(() => CityWhereUniqueInput, {nullable:false})
    @Type(() => CityWhereUniqueInput)
    where!: CityWhereUniqueInput;

    @Field(() => CityCreateWithoutComplexesInput, {nullable:false})
    @Type(() => CityCreateWithoutComplexesInput)
    create!: CityCreateWithoutComplexesInput;
}
