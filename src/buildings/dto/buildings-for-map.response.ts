import { Field, Int, ObjectType, Float } from '@nestjs/graphql';
import { Complex, ComplexScalarFieldEnum, PropertyClass } from 'src/@generated';

@ObjectType()
export class BuildingsForMapResponse {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Complex)
  complex: Complex;

  @Field(() => Float)
  latitude: number;

  @Field(() => Float)
  longitude: number;

  @Field(() => PropertyClass, { nullable: true })
  propertyClass: keyof typeof PropertyClass | null;
}
