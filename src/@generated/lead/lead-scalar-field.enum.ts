import { registerEnumType } from '@nestjs/graphql';

export enum LeadScalarFieldEnum {
    id = "id",
    uniq_id = "uniq_id",
    host = "host",
    name = "name",
    phone = "phone",
    email = "email",
    form_name = "form_name",
    form_id = "form_id",
    tran_id = "tran_id",
    utm_source = "utm_source",
    utm_medium = "utm_medium",
    utm_campaign = "utm_campaign",
    utm_term = "utm_term"
}


registerEnumType(LeadScalarFieldEnum, { name: 'LeadScalarFieldEnum', description: undefined })
