import { PropsWithChildren } from "react"
import Providers from "./providers"

import {  AppSidebar } from "./AppBar"
import { SidebarTrigger } from "../ui/sidebar"
import { cookies } from "next/headers"
export default async function ParkingPaymentLayout(props: PropsWithChildren) {
    const cookieStore = await cookies()
    const defaultOpenMenu = cookieStore.get("sidebar_state")?.value === "true" || false
    return (
        <Providers defaultOpenMenu={defaultOpenMenu}>
            <AppSidebar />
            <SidebarTrigger/>
            <main>
                {props.children}
            </main>
        </Providers>
    )
}