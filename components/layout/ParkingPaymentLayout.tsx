import { PropsWithChildren } from "react"
import Providers from "./providers"

import { AppTopBar } from "./AppTopBar"
export default function ParkingPaymentLayout(props: PropsWithChildren) {
    return (
        <Providers>
            <AppTopBar />
            <main>
                {props.children}
            </main>
        </Providers>
    )
}