import EIdentificationTypes from "../../enums/identification-types.enum";

export interface IValidateVisitorParams {
    deviceId?: number;
    identificationCode: string;
    identificationType: EIdentificationTypes;
    plate: string;
    discountCode?: string;
    payDay: boolean;
}