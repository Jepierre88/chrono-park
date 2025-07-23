import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import axios, { AxiosResponse } from "axios"
import { environment } from "@/config/environment"
import { ILoginResponseEntity } from "@/lib/auth/login-response.entity"
import axiosServerInstance from "@/lib/shared/axios-server.config"

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

const handler = NextAuth({
    providers: [Credentials({
        credentials: {
            email: { label: "Email", type: "text", placeholder: "user@example.com" },
            password: { label: "Password", type: "password" }
        },
        name: "Credentials",
        authorize: async (credentials) => {
            let user = null
            const res = await axiosServerInstance.post<ILoginResponseEntity>("/login", {
                email: credentials?.email,
                password: credentials?.password
            })
            if (res.status === 200) {
                user = {
                    ...res.data,
                    id: res.data.token
                }
                return user
            }
            return null
        },
    })],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token = {
                    ...token,
                    ...user
                }
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user = {
                    ...token as ILoginResponseEntity,
                    id: token.id as string
                }
            }
            return session
        }
    },
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",

    },
    secret: environment.AUTH_SECRET,
})

export { handler as GET, handler as POST }