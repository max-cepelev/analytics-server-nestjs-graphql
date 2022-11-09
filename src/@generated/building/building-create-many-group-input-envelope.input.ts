import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateManyGroupInput } from './building-create-many-group.input';
import { Type } from 'class-transformer';

@InputType()
export class BuildingCreateManyGroupInputEnvelope {

    @Field(() => [BuildingCreateManyGroupInput], {nullable:false})
    @Type(() => BuildingCreateManyGroupInput)
    data!: Array<BuildingCreateManyGroupInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
