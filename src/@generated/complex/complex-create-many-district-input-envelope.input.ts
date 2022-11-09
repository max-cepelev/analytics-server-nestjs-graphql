import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ComplexCreateManyDistrictInput } from './complex-create-many-district.input';
import { Type } from 'class-transformer';

@InputType()
export class ComplexCreateManyDistrictInputEnvelope {

    @Field(() => [ComplexCreateManyDistrictInput], {nullable:false})
    @Type(() => ComplexCreateManyDistrictInput)
    data!: Array<ComplexCreateManyDistrictInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
