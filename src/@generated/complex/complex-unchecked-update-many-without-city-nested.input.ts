import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateWithoutCityInput } from './complex-create-without-city.input';
import { Type } from 'class-transformer';
import { ComplexCreateOrConnectWithoutCityInput } from './complex-create-or-connect-without-city.input';
import { ComplexUpsertWithWhereUniqueWithoutCityInput } from './complex-upsert-with-where-unique-without-city.input';
import { ComplexCreateManyCityInputEnvelope } from './complex-create-many-city-input-envelope.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { ComplexUpdateWithWhereUniqueWithoutCityInput } from './complex-update-with-where-unique-without-city.input';
import { ComplexUpdateManyWithWhereWithoutCityInput } from './complex-update-many-with-where-without-city.input';
import { ComplexScalarWhereInput } from './complex-scalar-where.input';

@InputType()
export class ComplexUncheckedUpdateManyWithoutCityNestedInput {

    @Field(() => [ComplexCreateWithoutCityInput], {nullable:true})
    @Type(() => ComplexCreateWithoutCityInput)
    create?: Array<ComplexCreateWithoutCityInput>;

    @Field(() => [ComplexCreateOrConnectWithoutCityInput], {nullable:true})
    @Type(() => ComplexCreateOrConnectWithoutCityInput)
    connectOrCreate?: Array<ComplexCreateOrConnectWithoutCityInput>;

    @Field(() => [ComplexUpsertWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => ComplexUpsertWithWhereUniqueWithoutCityInput)
    upsert?: Array<ComplexUpsertWithWhereUniqueWithoutCityInput>;

    @Field(() => ComplexCreateManyCityInputEnvelope, {nullable:true})
    @Type(() => ComplexCreateManyCityInputEnvelope)
    createMany?: ComplexCreateManyCityInputEnvelope;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    set?: Array<ComplexWhereUniqueInput>;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    disconnect?: Array<ComplexWhereUniqueInput>;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    delete?: Array<ComplexWhereUniqueInput>;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    connect?: Array<ComplexWhereUniqueInput>;

    @Field(() => [ComplexUpdateWithWhereUniqueWithoutCityInput], {nullable:true})
    @Type(() => ComplexUpdateWithWhereUniqueWithoutCityInput)
    update?: Array<ComplexUpdateWithWhereUniqueWithoutCityInput>;

    @Field(() => [ComplexUpdateManyWithWhereWithoutCityInput], {nullable:true})
    @Type(() => ComplexUpdateManyWithWhereWithoutCityInput)
    updateMany?: Array<ComplexUpdateManyWithWhereWithoutCityInput>;

    @Field(() => [ComplexScalarWhereInput], {nullable:true})
    @Type(() => ComplexScalarWhereInput)
    deleteMany?: Array<ComplexScalarWhereInput>;
}
