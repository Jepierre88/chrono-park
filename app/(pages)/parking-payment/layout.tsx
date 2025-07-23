import ParkingPaymentLayout from "@/components/layout/ParkingPaymentLayout";
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