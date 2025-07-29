import ParkingPaymentLayout from "@/components/layout/modules/parking-payment-layout";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
    return (
        <ParkingPaymentLayout>
            {props.children}
        </ParkingPaymentLayout>
    )
}