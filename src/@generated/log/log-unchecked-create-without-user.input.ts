import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class LogUncheckedCreateWithoutUserInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    operation!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
