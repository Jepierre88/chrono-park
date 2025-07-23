import { environment } from '@/config/environment';
import axios, { AxiosInstance, AxiosResponse, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';
import { toast } from 'sonner';

const axiosInstance: AxiosInstance = axios.create({
    baseURL: environment.API_URL,
    timeout: environment.AXIOS_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

axiosInstance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const session = await getSession();
        if (session?.user?.token) {
            config.headers.Authorization = `Bearer ${session.user.token}`;
        }

        if (process.env.NODE_ENV === 'development') {
            console.log(`🚀 Request: ${config.method?.toUpperCase()} ${config.url}`, {
                data: config.data,
                params: config.params,
            });
        }

        return config;
    },
    (error: AxiosError) => {
        console.error('Error en configuración de request:', error);
        return Promise.reject(error);
    }
);


// Interceptor de Response
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        // Log de responses exitosas en desarrollo
        if (process.env.NODE_ENV === 'development') {
            console.log(`✅ Response: ${response.status} ${response.config.url}`, response.data);
        }

        return response;
    },
    async (error: AxiosError) => {
        // Log de errores
        console.error('❌ Response Error:', {
            status: error.response?.status,
            message: error.message,
            url: error.config?.url,
            data: error.response?.data,
        });

        // Manejo de errores específicos
        switch (error.response?.status) {
            case 401:
                // Token expirado o no válido
                toast.error('Sesión expirada. Por favor, inicia sesión nuevamente.');
                
                // Redirigir al login si no estamos ya ahí
                if (typeof window !== 'undefined' && !window.location.pathname.includes('/auth/login')) {
                    window.location.href = '/auth/login';
                }
                break;

            case 403:
                toast.error('No tienes permisos para realizar esta acción.');
                break;

            case 404:
                toast.error('Recurso no encontrado.');
                break;

            case 422:
                // Errores de validación
                const validationErrors = error.response?.data;
                if (validationErrors && typeof validationErrors === 'object') {
                    const errorMessages = Object.values(validationErrors).flat().join(', ');
                    toast.error(`Error de validación: ${errorMessages}`);
                } else {
                    toast.error('Error de validación en los datos enviados.');
                }
                break;

            case 500:
                toast.error('Error interno del servidor. Intenta nuevamente más tarde.');
                break;

            case 502:
            case 503:
            case 504:
                toast.error('Servicio no disponible. Intenta nuevamente más tarde.');
                break;

            default:
                if (error.code === 'ECONNABORTED') {
                    toast.error('La petición tardó demasiado. Verifica tu conexión.');
                } else if (error.code === 'NETWORK_ERROR') {
                    toast.error('Error de conexión. Verifica tu conexión a internet.');
                } else {
                    toast.error('Ha ocurrido un error inesperado.');
                }
                break;
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;