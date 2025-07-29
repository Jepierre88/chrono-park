import AuthLayout from "@/components/layout/auth-layout";
import { PropsWithChildren } from "react";

export default function Layout(props: PropsWithChildren) {
    return (
        <AuthLayout>
            {props.children}
        </AuthLayout>
    )
}