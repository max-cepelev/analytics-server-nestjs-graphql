import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityUpdateWithoutComplexesInput } from './city-update-without-complexes.input';
import { Type } from 'class-transformer';
import { CityCreateWithoutComplexesInput } from './city-create-without-complexes.input';

@InputType()
export class CityUpsertWithoutComplexesInput {

    @Field(() => CityUpdateWithoutComplexesInput, {nullable:false})
    @Type(() => CityUpdateWithoutComplexesInput)
    update!: CityUpdateWithoutComplexesInput;

    @Field(() => CityCreateWithoutComplexesInput, {nullable:false})
    @Type(() => CityCreateWithoutComplexesInput)
    create!: CityCreateWithoutComplexesInput;
}
