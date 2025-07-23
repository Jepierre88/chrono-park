// lib/auth/login-service.ts
import { ILoginParamsEntity } from "@/lib/types/entities/auth/login-params.entity";
import { ILoginResponseEntity } from "@/lib/types/entities/auth/login-response.entity";
import { axiosWithToast } from "../shared/axios.config";

export const loginService = async (credentials: ILoginParamsEntity): Promise<ILoginResponseEntity> => {
    try {
        const response = await axiosWithToast.post<ILoginResponseEntity>("/login", {
            email: credentials.email,
            password: credentials.password,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};