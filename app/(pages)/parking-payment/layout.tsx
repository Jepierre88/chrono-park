import { CommonProvider } from "@/app/contexts/common/common.context";
import ParkingPaymentLayout from "@/components/layout/ParkingPaymentLayout";
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