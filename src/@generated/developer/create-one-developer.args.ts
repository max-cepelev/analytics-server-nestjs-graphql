import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperCreateInput } from './developer-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneDeveloperArgs {

    @Field(() => DeveloperCreateInput, {nullable:false})
    @Type(() => DeveloperCreateInput)
    data!: DeveloperCreateInput;
}
