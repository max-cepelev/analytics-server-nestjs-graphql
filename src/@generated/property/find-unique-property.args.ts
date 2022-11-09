import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PropertyWhereUniqueInput } from './property-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePropertyArgs {

    @Field(() => PropertyWhereUniqueInput, {nullable:false})
    @Type(() => PropertyWhereUniqueInput)
    where!: PropertyWhereUniqueInput;
}
