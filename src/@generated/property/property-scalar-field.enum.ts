import { registerEnumType } from '@nestjs/graphql';

export enum PropertyScalarFieldEnum {
    id = "id",
    number = "number",
    floor = "floor",
    entrance = "entrance",
    totalArea = "totalArea",
    livingArea = "livingArea",
    rooms = "rooms",
    wallHeight = "wallHeight",
    propertyType = "propertyType",
    buildingId = "buildingId"
}


registerEnumType(PropertyScalarFieldEnum, { name: 'PropertyScalarFieldEnum', description: undefined })
