import { registerEnumType } from '@nestjs/graphql';

export enum LogScalarFieldEnum {
    id = "id",
    operation = "operation",
    userId = "userId",
    createdAt = "createdAt"
}


registerEnumType(LogScalarFieldEnum, { name: 'LogScalarFieldEnum', description: undefined })
