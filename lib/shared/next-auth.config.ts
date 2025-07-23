import { environment } from "@/config/environment"
import { AuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions: AuthOptions = {
    providers: [Credentials({
        credentials: {
            cellphoneNumber: { label: "Cellphone Number", type: "text", placeholder: "Enter your cellphone number" },
            deviceNme: { label: "Device Name", type: "text", placeholder: "Enter your device name" },
            expirationDateInMinutes: { label: "Expiration Date (in minutes)", type: "number", placeholder: "Enter expiration date in minutes" },
            id: { label: "ID", type: "text", placeholder: "Enter your ID" },
            name: { label: "Name", type: "text", placeholder: "Enter your name" },
            lastName: { label: "Last Name", type: "text", placeholder: "Enter your last name" },
            permissions: { label: "Permissions", type: "array", placeholder: "Enter your permissions" },
            realm: { label: "Realm", type: "text", placeholder: "Enter your realm" },
            token: { label: "Token", type: "text", placeholder: "Enter your token" },
            username: { label: "Username", type: "text", placeholder: "Enter your username" },
            email: { label: "Email", type: "email", placeholder: "Enter your email" },
            image: { label: "Image", type: "text", placeholder: "Enter your image URL" },
        },
        name: "Credentials",
        authorize: async (credentials) => {
            if (!credentials) {
                console.log("No credentials provided");
                return null;
            } else {
                const user = {
                    id: credentials.token,
                    name: credentials.name,
                    email: credentials.email,
                    image: credentials.image,
                    cellPhoneNumber: credentials.cellphoneNumber,
                    deviceNme: credentials.deviceNme,
                    expirationDateInMinutes: Number(credentials.expirationDateInMinutes),
                    lastName: credentials.lastName,
                    permissions:
                        typeof credentials.permissions === "string"
                            ? credentials.permissions.split(",").map(Number)
                            : credentials.permissions,

                    realm: credentials.realm,
                    token: credentials.token,
                    username: credentials.username,
                };

                return user;
            }
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