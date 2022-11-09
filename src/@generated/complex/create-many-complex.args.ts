import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ComplexCreateManyInput } from './complex-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyComplexArgs {

    @Field(() => [ComplexCreateManyInput], {nullable:false})
    @Type(() => ComplexCreateManyInput)
    data!: Array<ComplexCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
