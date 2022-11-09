import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
    LIVING = "LIVING",
    COMMERCIAL = "COMMERCIAL",
    PARKING = "PARKING"
}


registerEnumType(PropertyType, { name: 'PropertyType', description: undefined })
