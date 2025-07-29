import AuthLayout from "@/components/layout/modules/auth-layout";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
    return (
        <AuthLayout>
            {props.children}
        </AuthLayout>
    )
}