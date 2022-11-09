import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Building } from 'src/@generated/building/building.model';

@ObjectType()
export class BuildingsResponse {
  @Field(() => [Building])
  buildings: Building[];

  @Field(() => Int)
  count: number;
}
