import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateWithoutCityInput } from './complex-create-without-city.input';
import { Type } from 'class-transformer';
import { ComplexCreateOrConnectWithoutCityInput } from './complex-create-or-connect-without-city.input';
import { ComplexCreateManyCityInputEnvelope } from './complex-create-many-city-input-envelope.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';

@InputType()
export class ComplexUncheckedCreateNestedManyWithoutCityInput {

    @Field(() => [ComplexCreateWithoutCityInput], {nullable:true})
    @Type(() => ComplexCreateWithoutCityInput)
    create?: Array<ComplexCreateWithoutCityInput>;

    @Field(() => [ComplexCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => ComplexCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<ComplexCreateOrConnectWithoutCityInput>;

    @Field(() => ComplexCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => ComplexCreateManyCityInputEnvelope)
    createMany?: ComplexCreateManyCityInputEnvelope;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    connect?: Array<ComplexWhereUniqueInput>;
}
