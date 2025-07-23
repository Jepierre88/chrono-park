// lib/shared/axios-server.config.ts
import { authOptions } from '@/app/(api)/api/auth/[...nextauth]/route';
import { environment } from '@/config/environment';
import axios, { AxiosInstance } from 'axios';
import { getServerSession } from 'next-auth/next';

const axiosServerInstance: AxiosInstance = axios.create({
    baseURL: environment.API_URL,
    timeout: environment.AXIOS_TIMEOUT,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

// Interceptor para servidor
axiosServerInstance.interceptors.request.use(
    
    async (config) => {
        const session = await getServerSession(authOptions);
        if (session?.user?.token) {
            config.headers.Authorization = `Bearer ${session.user.token}`;
        }
        console.log(`🚀 Server Request: ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => {
        console.error('Server request error:', error);
        return Promise.reject(error);
    }
);

// Interceptor de respuesta simple (sin toasts)
axiosServerInstance.interceptors.response.use(
    (response) => {
        console.log(`✅ Server Response: ${response.status} ${response.config.url}`);
        return response;
    },
    (error) => {
        console.error('❌ Server Response Error:', {
            status: error.response?.status,
            message: error.message,
            url: error.config?.url,
        });
        
        // En servidor, solo loggear errores, no mostrar toasts
        return Promise.reject(error);
    }
);

export default axiosServerInstance;