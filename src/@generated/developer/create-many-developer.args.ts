import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DeveloperCreateManyInput } from './developer-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDeveloperArgs {

    @Field(() => [DeveloperCreateManyInput], {nullable:false})
    @Type(() => DeveloperCreateManyInput)
    data!: Array<DeveloperCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
