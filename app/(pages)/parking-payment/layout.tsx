import ParkingPaymentLayout from "@/components/layout/parking-payment-layout";
import { CommonProvider } from "@/lib/shared/common.context";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren){
    return (
        <CommonProvider>
            <ParkingPaymentLayout>
                {props.children}
            </ParkingPaymentLayout>
        </CommonProvider>
    )
}