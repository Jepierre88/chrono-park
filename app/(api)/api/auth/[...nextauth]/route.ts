import NextAuth from "next-auth"
import { ILoginResponseEntity } from "@/lib/auth/login-response.entity"
import { authOptions } from "@/lib/auth/nextAuthConfig"

declare module "next-auth" {
    interface User extends ILoginResponseEntity {
        id: string;
    }
    interface Session {
        user: User
    }
}

declare module "next-auth/jwt" {
    interface JWT extends ILoginResponseEntity {
        id: string;
    }
}


const handler = NextAuth(authOptions)


export { handler as GET, handler as POST }