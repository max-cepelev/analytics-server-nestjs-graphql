import { registerEnumType } from '@nestjs/graphql';

export enum OfferScalarFieldEnum {
    id = "id",
    floor = "floor",
    floors = "floors",
    price = "price",
    address = "address",
    buildingId = "buildingId",
    building = "building",
    developer = "developer",
    developerId = "developerId",
    complex = "complex",
    complexId = "complexId",
    area = "area",
    rooms = "rooms",
    image = "image",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(OfferScalarFieldEnum, { name: 'OfferScalarFieldEnum', description: undefined })
