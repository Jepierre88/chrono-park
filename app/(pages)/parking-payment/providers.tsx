'use client'

import { CommonProvider } from "@/app/contexts/common/common.context";
import { PropsWithChildren } from "react";

export default function ParkingPaymentProviders(props: PropsWithChildren) {
  return (
    <CommonProvider>
      {props.children}
    </CommonProvider>
  );
}