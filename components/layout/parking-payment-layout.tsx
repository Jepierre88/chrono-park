import { PropsWithChildren } from "react"
import Providers from "./parkin-payment.providers"
import { SidebarInset, SidebarTrigger } from "../ui/sidebar"
import { cookies } from "next/headers"
import { AppSidebar } from "./app-bar/AppBar"
import { DynamicBreadcrumb } from "./dynamic-breadcrumbs/dynamic-breadcrumbs.component"
import { ThemeSwitch } from "./theme-switch.component"

export default async function ParkingPaymentLayout(props: PropsWithChildren) {
    const cookieStore = await cookies()
    const defaultOpenMenu = cookieStore.get("sidebar_state")?.value !== "false"
    
    return (
        <Providers defaultOpenMenu={defaultOpenMenu}>
            <AppSidebar />
            <SidebarInset className="flex flex-col h-screen overflow-hidden">
                <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background sticky top-0 z-10 w-full">
                    <div className="flex items-center gap-2 px-4 min-w-0 w-full">
                        <SidebarTrigger className="-ml-1 shrink-0"/>
                        <div className="min-w-0 overflow-hidden flex-1">
                            <DynamicBreadcrumb />
                        </div>
                    </div>
                </header>
                <main className="flex-1 overflow-hidden w-full">
                    <div className="h-full overflow-auto w-full">
                        <div className="w-full max-w-none p-6">
                            {props.children}
                        </div>
                    </div>
                </main>

                <div className="fixed bottom-6 right-6 z-50">
                    <ThemeSwitch />
                </div>
            </SidebarInset>
        </Providers>
    )
}