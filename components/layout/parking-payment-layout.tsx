import { PropsWithChildren } from "react"
import Providers from "./parkin-payment.providers"
import { SidebarInset, SidebarTrigger } from "../ui/sidebar"
import { cookies } from "next/headers"
import { AppSidebar } from "./app-bar/AppBar"
import { DynamicBreadcrumb } from "./dynamic-breadcrumbs/dynamic-breadcrumbs.component"

export default async function ParkingPaymentLayout(props: PropsWithChildren) {
    const cookieStore = await cookies()
    const defaultOpenMenu = cookieStore.get("sidebar:state")?.value !== "false"
    
    return (
        <Providers defaultOpenMenu={defaultOpenMenu}>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <DynamicBreadcrumb />
                    </div>
                </header>
                
                <main className="flex-1 overflow-auto">
                    <div className="container mx-auto p-6">
                        {props.children}
                    </div>
                </main>
            </SidebarInset>
        </Providers>
    )
}