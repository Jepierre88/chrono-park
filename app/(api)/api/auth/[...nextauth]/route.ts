import { ILoginResponseEntity } from "@/app/entities/auth/login-response.entity"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

declare module "next-auth" {
    interface User extends ILoginResponseEntity{

    }
    interface Session {
        user: User
    }
}

const handler = NextAuth({
    providers: [Credentials({
        credentials: {
            email: { label: "Email", type: "text", placeholder: "user@example.com" },
            password: { label: "Password", type: "password" }
        },
        authorize: async (credentials) => {
            if (
                credentials &&
                credentials.email === "user@example.com" &&
                credentials.password === "pass123123"
            ) {
                return { id: "1", name: "User", email: "user@example.com" }
            }
            return null
        }
    })],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id as string
            }
            return session
        },
        redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return new URL(url, baseUrl).toString()
            return url
        }
    },
    pages:{
        signIn: "/auth/login",
        error: "/auth/error"
    },
    secret: process.env.AUTH_SECRET,
})

export { handler as GET, handler as POST }