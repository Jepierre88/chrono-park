'use client';
import { ParkingPaymentProvider } from "@/lib/contexts/parking-payment/parking-payment.context";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { Toaster } from "../ui/sonner";

export default function Providers(props: PropsWithChildren) {
    return (
        <SessionProvider>
            <ParkingPaymentProvider>
                {props.children}
                <Toaster richColors/>
            </ParkingPaymentProvider>
        </SessionProvider>
    )
}