'use client';
import { ParkingPaymentProvider } from "@/lib/contexts/parking-payment/parking-payment.context";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export default function Providers(props: PropsWithChildren) {
    return (
        <SessionProvider>
            <ParkingPaymentProvider>
                {props.children}
            </ParkingPaymentProvider>
        </SessionProvider>
    )
}