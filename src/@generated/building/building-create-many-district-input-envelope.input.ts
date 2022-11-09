import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateManyDistrictInput } from './building-create-many-district.input';
import { Type } from 'class-transformer';

@InputType()
export class BuildingCreateManyDistrictInputEnvelope {

    @Field(() => [BuildingCreateManyDistrictInput], {nullable:false})
    @Type(() => BuildingCreateManyDistrictInput)
    data!: Array<BuildingCreateManyDistrictInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
