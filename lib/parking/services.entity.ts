export interface IServicesEntity {
    id: number;
    name: string;
    shortName: string;
    printName: string;
    isActive: number;
    code: string;
    serviceType: string;
    IVAPercentage: number;
    graceTimeInMinutes: number;
    noAdditionalPaymentTimeInMinutes: number;
    graceTimeInMinutesForCar: number;

}