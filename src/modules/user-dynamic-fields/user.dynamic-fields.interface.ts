export enum FIELD_TYPES_ENUM {
    TEXT,
    NUMBER,
    DROPDOWN,
    EMAIL,
    PASSWORD,
    RADIO,
    CHECKBOX,
}

export interface IOptions {
    label: string;
}

export interface IValidations {
    isRequired: boolean;
    regex: string;
}
