import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateWithoutGroupInput } from './complex-create-without-group.input';
import { Type } from 'class-transformer';
import { ComplexCreateOrConnectWithoutGroupInput } from './complex-create-or-connect-without-group.input';
import { ComplexCreateManyGroupInputEnvelope } from './complex-create-many-group-input-envelope.input';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';

@InputType()
export class ComplexCreateNestedManyWithoutGroupInput {

    @Field(() => [ComplexCreateWithoutGroupInput], {nullable:true})
    @Type(() => ComplexCreateWithoutGroupInput)
    create?: Array<ComplexCreateWithoutGroupInput>;

    @Field(() => [ComplexCreateOrConnectWithoutGroupInput], {nullable:true})
    @Type(() => ComplexCreateOrConnectWithoutGroupInput)
    connectOrCreate?: Array<ComplexCreateOrConnectWithoutGroupInput>;

    @Field(() => ComplexCreateManyGroupInputEnvelope, {nullable:true})
    @Type(() => ComplexCreateManyGroupInputEnvelope)
    createMany?: ComplexCreateManyGroupInputEnvelope;

    @Field(() => [ComplexWhereUniqueInput], {nullable:true})
    @Type(() => ComplexWhereUniqueInput)
    connect?: Array<ComplexWhereUniqueInput>;
}
