import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LogCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    operation!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
