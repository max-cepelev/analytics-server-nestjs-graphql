import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DeveloperCreateManyGroupInput } from './developer-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class DeveloperCreateManyGroupInputEnvelope {

    @Field(() => [DeveloperCreateManyGroupInput], {nullable:false})
    @Type(() => DeveloperCreateManyGroupInput)
    data!: Array<DeveloperCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
