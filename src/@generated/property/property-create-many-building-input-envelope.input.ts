import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PropertyCreateManyBuildingInput } from './property-create-many-building.input';
import { Type } from 'class-transformer';

@InputType()
export class PropertyCreateManyBuildingInputEnvelope {

    @Field(() => [PropertyCreateManyBuildingInput], {nullable:false})
    @Type(() => PropertyCreateManyBuildingInput)
    data!: Array<PropertyCreateManyBuildingInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
