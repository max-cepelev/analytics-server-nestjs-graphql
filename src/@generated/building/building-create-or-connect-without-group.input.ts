import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BuildingWhereUniqueInput } from './building-where-unique.input';
import { Type } from 'class-transformer';
import { BuildingCreateWithoutGroupInput } from './building-create-without-group.input';

@InputType()
export class BuildingCreateOrConnectWithoutGroupInput {

    @Field(() => BuildingWhereUniqueInput, {nullable:false})
    @Type(() => BuildingWhereUniqueInput)
    where!: BuildingWhereUniqueInput;

    @Field(() => BuildingCreateWithoutGroupInput, {nullable:false})
    @Type(() => BuildingCreateWithoutGroupInput)
    create!: BuildingCreateWithoutGroupInput;
}
