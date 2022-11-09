import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Role } from '../prisma/role.enum';
import { LogCreateNestedManyWithoutUserInput } from '../log/log-create-nested-many-without-user.input';
import { TokenCreateNestedOneWithoutUserInput } from '../token/token-create-nested-one-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    activationLink?: string;

    @Field(() => Boolean, {nullable:true})
    activated?: boolean;

    @Field(() => Role, {nullable:true})
    role?: keyof typeof Role;

    @Field(() => LogCreateNestedManyWithoutUserInput, {nullable:true})
    logs?: LogCreateNestedManyWithoutUserInput;

    @Field(() => TokenCreateNestedOneWithoutUserInput, {nullable:true})
    token?: TokenCreateNestedOneWithoutUserInput;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
