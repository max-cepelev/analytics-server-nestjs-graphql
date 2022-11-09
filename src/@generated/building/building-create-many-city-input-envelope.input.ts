import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateManyCityInput } from './building-create-many-city.input';
import { Type } from 'class-transformer';

@InputType()
export class BuildingCreateManyCityInputEnvelope {

    @Field(() => [BuildingCreateManyCityInput], {nullable:false})
    @Type(() => BuildingCreateManyCityInput)
    data!: Array<BuildingCreateManyCityInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
