export const environment = {
    AUTH_SECRET: process.env.AUTH_SECRET,
    API_URL: process.env.NEXT_PUBLIC_API_URL,
    AXIOS_TIMEOUT: process.env.NEXT_PUBLIC_AXIOS_TIMEOUT ? parseInt(process.env.NEXT_PUBLIC_AXIOS_TIMEOUT, 10) : 10000,
}