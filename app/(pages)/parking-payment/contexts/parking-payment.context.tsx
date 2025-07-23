import { IPaymentData } from "@/lib/types/entities/parking-payment/parking-payment.entity";
import { createContext, PropsWithChildren, useContext } from "react";

type TParkingPaymentContext = {
  isLoading: boolean;  
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
  const value = {
    isLoading: false, 
    paymentData: {} as IPaymentData
  };

  return (
    <ParkingPaymentContext.Provider value={value}>
      {children}
    </ParkingPaymentContext.Provider>
  );
};


