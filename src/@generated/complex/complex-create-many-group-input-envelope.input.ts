import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateManyGroupInput } from './complex-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class ComplexCreateManyGroupInputEnvelope {

    @Field(() => [ComplexCreateManyGroupInput], {nullable:false})
    @Type(() => ComplexCreateManyGroupInput)
    data!: Array<ComplexCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
