import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateWithoutComplexesInput } from './city-create-without-complexes.input';
import { Type } from 'class-transformer';
import { CityCreateOrConnectWithoutComplexesInput } from './city-create-or-connect-without-complexes.input';
import { CityWhereUniqueInput } from './city-where-unique.input';

@InputType()
export class CityCreateNestedOneWithoutComplexesInput {

    @Field(() => CityCreateWithoutComplexesInput, {nullable:true})
    @Type(() => CityCreateWithoutComplexesInput)
    create?: CityCreateWithoutComplexesInput;

    @Field(() => CityCreateOrConnectWithoutComplexesInput, {nullable:true})
    @Type(() => CityCreateOrConnectWithoutComplexesInput)
    connectOrCreate?: CityCreateOrConnectWithoutComplexesInput;

    @Field(() => CityWhereUniqueInput, {nullable:true})
    @Type(() => CityWhereUniqueInput)
    connect?: CityWhereUniqueInput;
}
