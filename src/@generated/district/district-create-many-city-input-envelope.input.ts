import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DistrictCreateManyCityInput } from './district-create-many-city.input';
import { Type } from 'class-transformer';

@InputType()
export class DistrictCreateManyCityInputEnvelope {

    @Field(() => [DistrictCreateManyCityInput], {nullable:false})
    @Type(() => DistrictCreateManyCityInput)
    data!: Array<DistrictCreateManyCityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
