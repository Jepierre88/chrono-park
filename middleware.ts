import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"

export default withAuth(
  function middleware(req) {
    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        if (!token) {
          return false
        }
    
        return true
      },
    },
    pages: {
      signIn: "/auth/login",
      error: "/auth/error",
    },
  }
)

export const config = {
  matcher: [
    "/parking-payment",
    "/parking-payment/:path*",
    "/api/protected/:path*",
    "/((?!api/auth|_next/static|_next/image|favicon.ico|auth).*)",
  ]
}