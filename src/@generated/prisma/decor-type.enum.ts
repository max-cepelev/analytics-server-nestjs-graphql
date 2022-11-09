import { registerEnumType } from '@nestjs/graphql';

export enum DecorType {
    WITHOUT = "WITHOUT",
    UNDER_FINISHING = "UNDER_FINISHING",
    FINISHING = "FINISHING",
    FULL = "FULL",
    OPTIONALLY = "OPTIONALLY"
}


registerEnumType(DecorType, { name: 'DecorType', description: undefined })
