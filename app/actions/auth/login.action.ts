import { ILoginParamsEntity } from "@/app/entities/auth/login-params.entity";
import { signIn } from "next-auth/react";

export async  function login(data: ILoginParamsEntity) {
    return await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: true,
        callbackUrl: "/parking-payment",
    });
}