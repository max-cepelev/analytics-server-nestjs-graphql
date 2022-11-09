import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CityCreateManyRegionInput } from './city-create-many-region.input';
import { Type } from 'class-transformer';

@InputType()
export class CityCreateManyRegionInputEnvelope {

    @Field(() => [CityCreateManyRegionInput], {nullable:false})
    @Type(() => CityCreateManyRegionInput)
    data!: Array<CityCreateManyRegionInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
