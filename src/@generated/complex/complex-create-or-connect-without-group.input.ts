import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexWhereUniqueInput } from './complex-where-unique.input';
import { Type } from 'class-transformer';
import { ComplexCreateWithoutGroupInput } from './complex-create-without-group.input';

@InputType()
export class ComplexCreateOrConnectWithoutGroupInput {

    @Field(() => ComplexWhereUniqueInput, {nullable:false})
    @Type(() => ComplexWhereUniqueInput)
    where!: ComplexWhereUniqueInput;

    @Field(() => ComplexCreateWithoutGroupInput, {nullable:false})
    @Type(() => ComplexCreateWithoutGroupInput)
    create!: ComplexCreateWithoutGroupInput;
}
