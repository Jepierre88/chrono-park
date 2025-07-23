import { environment } from "@/config/environment"
import { AuthOptions } from "next-auth"
import axiosServerInstance from "./axios-server.config"
import { ILoginResponseEntity } from "../auth/login-response.entity"
import Credentials from "next-auth/providers/credentials"

export const authOptions:AuthOptions = {
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
                    ...token,
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
} satisfies AuthOptions