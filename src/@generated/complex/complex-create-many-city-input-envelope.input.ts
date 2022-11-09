import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateManyCityInput } from './complex-create-many-city.input';
import { Type } from 'class-transformer';

@InputType()
export class ComplexCreateManyCityInputEnvelope {

    @Field(() => [ComplexCreateManyCityInput], {nullable:false})
    @Type(() => ComplexCreateManyCityInput)
    data!: Array<ComplexCreateManyCityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
