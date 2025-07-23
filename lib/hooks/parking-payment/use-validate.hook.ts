import { axiosWithToast } from "@/lib/shared/axios.config";
import { initialPaymentData, IPaymentData } from "@/lib/types/entities/parking-payment/parking-payment.entity";
import { IValidateVisitorParams } from "@/lib/types/entities/parking-payment/validate-visitor-params.entity";
import {  useState } from "react";


export default function useValidateParkingPayment() {

    const [paymentData, setPaymentData] = useState<IPaymentData>(initialPaymentData as IPaymentData);


    const validatePayment = async (params:IValidateVisitorParams) =>{
        try {
            const response = await axiosWithToast.post<IPaymentData>("/validatePaymentVisitorService", params);
            setPaymentData(response.data);
            return response.data;
        } catch (error) {
            console.error("Error validating payment:", error);
            throw error; 
        }
    }
    
    return { validatePayment, paymentData, setPaymentData };
}