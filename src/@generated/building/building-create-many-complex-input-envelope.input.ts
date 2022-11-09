import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateManyComplexInput } from './building-create-many-complex.input';
import { Type } from 'class-transformer';

@InputType()
export class BuildingCreateManyComplexInputEnvelope {

    @Field(() => [BuildingCreateManyComplexInput], {nullable:false})
    @Type(() => BuildingCreateManyComplexInput)
    data!: Array<BuildingCreateManyComplexInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
