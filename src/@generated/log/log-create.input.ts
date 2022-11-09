import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutLogsInput } from '../user/user-create-nested-one-without-logs.input';

@InputType()
export class LogCreateInput {

    @Field(() => String, {nullable:false})
    operation!: string;

    @Field(() => UserCreateNestedOneWithoutLogsInput, {nullable:false})
    user!: UserCreateNestedOneWithoutLogsInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
