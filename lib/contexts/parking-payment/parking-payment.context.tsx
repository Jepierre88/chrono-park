import useValidateParkingPayment from "@/lib/hooks/parking-payment/use-validate.hook";
import { IPaymentData } from "@/lib/types/entities/parking-payment/parking-payment.entity";
import { IValidateVisitorParams } from "@/lib/types/entities/parking-payment/validate-visitor-params.entity";
import { createContext, PropsWithChildren, useContext } from "react";

type TParkingPaymentContext = {
  isLoading: boolean;  
  paymentData: IPaymentData;
  validatePayment: (params:IValidateVisitorParams)=>void;
  setPaymentData: (prev:IPaymentData)=>void
}

const ParkingPaymentContext = createContext<TParkingPaymentContext | undefined>(undefined);

export const useParkingPaymentContext = () => {
  const context = useContext(ParkingPaymentContext);
  if (!context) {
    throw new Error("useParkingPaymentContext must be used within a ParkingPaymentProvider");
  }
  return context;
}

export const ParkingPaymentProvider= ({ children }: PropsWithChildren) => {
  const {paymentData,validatePayment, setPaymentData } = useValidateParkingPayment()


  const value: TParkingPaymentContext = {
    isLoading: false, 
    paymentData,
    validatePayment,
    setPaymentData
  };


  return (
    <ParkingPaymentContext.Provider value={value}>
      {children}
    </ParkingPaymentContext.Provider>
  );
};


