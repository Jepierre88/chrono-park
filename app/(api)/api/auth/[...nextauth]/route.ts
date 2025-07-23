import NextAuth from "next-auth"
import { ILoginResponseEntity } from "@/lib/types/entities/auth/login-response.entity"
import { authOptions } from "@/lib/shared/next-auth.config";

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