'use client';
import { ParkingPaymentProvider } from "@/lib/contexts/parking-payment/parking-payment.context";
import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";
import { Toaster } from "../../ui/sonner";
import { SidebarProvider } from "../../ui/sidebar";

export default function Providers(props: PropsWithChildren & {
    defaultOpenMenu?: boolean;
}) {
    return (
        <SessionProvider>
            <SidebarProvider defaultOpen={props.defaultOpenMenu}>
                <ParkingPaymentProvider>
                    {props.children}
                    <Toaster richColors />
                </ParkingPaymentProvider>
            </SidebarProvider>
        </SessionProvider>
    )
}