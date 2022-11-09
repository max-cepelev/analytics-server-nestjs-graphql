import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingCreateManyDeveloperInput } from './building-create-many-developer.input';
import { Type } from 'class-transformer';

@InputType()
export class BuildingCreateManyDeveloperInputEnvelope {

    @Field(() => [BuildingCreateManyDeveloperInput], {nullable:false})
    @Type(() => BuildingCreateManyDeveloperInput)
    data!: Array<BuildingCreateManyDeveloperInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
