'use client'

import { CommonProvider } from "@/lib/shared/common.context";
import { PropsWithChildren } from "react";
import { ParkingPaymentProvider } from "./contexts/parking-payment.context";

export default function ParkingPaymentProviders(props: PropsWithChildren) {
  return (
    <CommonProvider>
      <ParkingPaymentProvider>
        {props.children}
      </ParkingPaymentProvider>
    </CommonProvider>
  );
}