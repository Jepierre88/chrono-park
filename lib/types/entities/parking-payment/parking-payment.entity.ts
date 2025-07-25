import EIdentificationTypes from "../../enums/identification-types.enum";

export interface IPaymentData{
    IVAPercentage: number;
	IVATotal: number;
	concept: string;
	datetime: string;
	deviceId: number;
	discountCode: string;
	discountTotal: number;
	grossTotal: number;
	identificationCode: string;
	identificationType: EIdentificationTypes;
	isSuccess: boolean;
	messageBody: string;
	messageTitle: string;
	optionalFields?: unknown[];
	plate: string;
	plateImage: string;
	requiredFields?: unknown[];
	status: number;
	subtotal: number;
	total: number;
	validationDetail: ValidationDetail;
	vehicleKind: string;
	selectedService: number | string;
	totalParking?: number;
	totalServices: number;
	netTotalServices?: number;
	services?: unknown[];
	netTotal?: number;
	totalCost?: number;
	extraServices: unknown[];
	customType: string;
	selectedServiceChanged?: boolean;
	validTo?: string;
	numberMonths?: number,
	monthsForPay?: number;
	apportionmentStartDatetime?: string; 
	apportionmentEndDatetime?: string;
	isApportionment?: boolean;
	cashier: string;
	startDateTime?: string;
	customerIdentificationNumber?: string;
}

export interface ValidationDetail {
	validationDatetime: string;
	timeInParking: string;
	processId: number;
	incomeDatetime: string;
	paidDatetime: string;
	expectedOutcomeDatetime: string;
	requestedMonthlySubscriptionStartDatetime?: string;
	requestedMonthlySubscriptionEndDatetime?: string;
	lastMonthlySubscriptionEndDatetime?: string;
}


export const initialPaymentData: IPaymentData = {
    selectedService: "",
    identificationCode: "",
    plate: "",
    discountCode: "",
	totalServices: 0,
    cashier: "",
    concept: "",
    customType: "",
    datetime: "",
    discountTotal: 0,
    total: 0,
    extraServices: [],
    grossTotal: 0,
    identificationType: EIdentificationTypes.CC,
    isSuccess: false,
    IVAPercentage: 0,
    IVATotal: 0,
    messageBody : "",
    messageTitle: "",
    plateImage: "",
    requiredFields  : [],
    status: 0,
    subtotal: 0,
    deviceId: 0,
    vehicleKind: "",
    validationDetail: {
        timeInParking: "",
        processId: 0,
        incomeDatetime: "",
        paidDatetime: "",
        expectedOutcomeDatetime: "",
        validationDatetime: "",
    },
	startDateTime: "",

}
