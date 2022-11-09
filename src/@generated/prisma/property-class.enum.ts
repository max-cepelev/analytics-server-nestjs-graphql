import { registerEnumType } from '@nestjs/graphql';

export enum PropertyClass {
    TYPICAL = "TYPICAL",
    ECONOMY = "ECONOMY",
    COMFORT = "COMFORT",
    BUSINESS = "BUSINESS",
    PREMIUM = "PREMIUM"
}


registerEnumType(PropertyClass, { name: 'PropertyClass', description: undefined })
