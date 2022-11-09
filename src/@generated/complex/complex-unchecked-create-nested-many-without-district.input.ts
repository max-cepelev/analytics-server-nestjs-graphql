import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateWithoutDistrictInput } from './complex-create-without-district.input';
import { Type } from 'class-transformer';
import { ComplexCreateOrConnectWithoutDistrictInput } from './complex-create-or-connect-without-district.input';
import { ComplexCreateManyDistrictInputEnvelope } from './complex-create-many-district-input-envelope.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';

@InputType()
export class ComplexUncheckedCreateNestedManyWithoutDistrictInput {

    @Field(() => [ComplexCreateWithoutDistrictInput], {nullable:true})
    @Type(() => ComplexCreateWithoutDistrictInput)
    create?: Array<ComplexCreateWithoutDistrictInput>;

    @Field(() => [ComplexCreateOrConnectWithoutDistrictInput], {nullable:true})
    @Type(() => ComplexCreateOrConnectWithoutDistrictInput)
    connectOrCreate?: Array<ComplexCreateOrConnectWithoutDistrictInput>;

    @Field(() => ComplexCreateManyDistrictInputEnvelope, {nullable:true})
    @Type(() => ComplexCreateManyDistrictInputEnvelope)
    createMany?: ComplexCreateManyDistrictInputEnvelope;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    connect?: Array<ComplexWhereUniqueInput>;
}
