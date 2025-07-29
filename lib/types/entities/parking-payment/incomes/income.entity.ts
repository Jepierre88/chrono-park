export default interface IIncome {
	datetime?: string;
	id: number;
	identificationId: string;
	identificationMethod: string;
	incomePointId: number;
	peopleAmount: number;
	plate: string;
	plateImage: string;
	processId: number;
	state: number;
	vehicle: string;
	vehicleKind: string;
}


export interface IPrintIncome {
	data: IIncome;
	printInformation: {
		privacyPolicyInfo: string;
		endDatePolicy: string;
		paymentPointInfo: string
	}
}