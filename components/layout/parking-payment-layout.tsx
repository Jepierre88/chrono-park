import { PropsWithChildren } from "react"
import Providers from "./providers"

import {  AppSidebar } from "./AppBar"
import { SidebarTrigger } from "../ui/sidebar"
export default function ParkingPaymentLayout(props: PropsWithChildren) {
    return (
        <Providers>
            <AppSidebar />
            <SidebarTrigger/>
            <main>
                {props.children}
            </main>
        </Providers>
    )
}