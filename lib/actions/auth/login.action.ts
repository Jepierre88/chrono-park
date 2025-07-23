import { ILoginParamsEntity } from "@/lib/types/entities/auth/login-params.entity";
import { signIn } from "next-auth/react";

export async  function login(data: ILoginParamsEntity) {
    try {
        const result = await signIn("credentials", {
            ...data,
            redirect: false
        });
        return result;
    } catch (error) {
        throw error;
    }
}