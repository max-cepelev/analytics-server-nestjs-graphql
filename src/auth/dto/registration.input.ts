import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class RegistrationInput {
  @Field(() => String, {
    nullable: true,
    description: 'Имя пользователя',
  })
  name: string;

  @Field(() => String, { nullable: true, description: 'Телефон' })
  phone: string;

  @Field(() => String, { nullable: false, description: 'Email' })
  email: string;

  @Field(() => String, { nullable: false, description: 'Пароль' })
  password: string;
}
