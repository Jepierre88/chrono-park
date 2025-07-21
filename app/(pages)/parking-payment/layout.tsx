import ParkingPaymentLayout from "@/components/layout/ParkingPaymentLayout";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren){
    return (
        <ParkingPaymentLayout>
            {props.children}
        </ParkingPaymentLayout>
    )
}