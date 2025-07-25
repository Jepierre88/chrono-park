// Servicios encargados de consumir APIS desde el lado del cliente

import { axiosWithoutToast } from "@/lib/shared/axios.config";
import { ILoginParamsEntity } from "@/lib/types/entities/auth/login-params.entity";
import { ILoginResponseEntity } from "@/lib/types/entities/auth/login-response.entity";

export const loginService = async (credentials: ILoginParamsEntity): Promise<ILoginResponseEntity> => {
    try {
        const response = await axiosWithoutToast.post<ILoginResponseEntity>("/login", {
            email: credentials.email,
            password: credentials.password,
        }, {
            headers: {
                'X-Show-Toast': 'false', // Evita mostrar toasts en este servicio
            }   
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};