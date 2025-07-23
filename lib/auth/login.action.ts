import { signIn } from "next-auth/react";
import { ILoginParamsEntity } from "./login-params.entity";

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