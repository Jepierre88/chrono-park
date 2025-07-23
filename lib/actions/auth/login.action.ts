import { ILoginResponseEntity } from "@/lib/types/entities/auth/login-response.entity";
import { signIn } from "next-auth/react";

export async  function login(data: ILoginResponseEntity) {
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