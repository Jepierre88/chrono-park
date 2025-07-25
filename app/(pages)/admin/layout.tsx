import { PropsWithChildren } from "react";
import ParkingPaymentLayout from "@/components/layout/parking-payment-layout";

export default function Layout(props: PropsWithChildren){
    return (
        <ParkingPaymentLayout>
            {props.children}
        </ParkingPaymentLayout>
    )
}