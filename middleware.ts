import { withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server"
import EPermissions from "@/lib/shared/enums/permissions.enum"

// Mapeo de rutas a permisos requeridos
const routePermissions: Record<string, EPermissions[]> = {
  '/parking-payment': [EPermissions.VIEW_PARKING_PAYMENT],
  '/parking-payment/incomes': [EPermissions.VIEW_INCOMES],
  '/parking-payment/transactions': [EPermissions.VIEW_TRANSACTIONS],
  '/parking-payment/outcomes': [EPermissions.VIEW_OUTCOMES],
  '/admin': [EPermissions.VIEW_USERS],
  '/admin/users': [EPermissions.VIEW_USERS],
}

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl
    const token = req.nextauth.token

    // Si no hay token, redirigir al login
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', req.url))
    }

    // // Verificar permisos para la ruta específica
    // const requiredPermissions = routePermissions[pathname]
    // if (requiredPermissions) {
    //   const userPermissions = token.permissions as number[] || []
    //   const hasPermission = requiredPermissions.some(permission => 
    //     userPermissions.includes(permission)
    //   )

    //   if (!hasPermission) {
    //     // Redirigir a página de acceso denegado o home
    //     return NextResponse.redirect(new URL('/access-denied', req.url))
    //   }
    // }

    return NextResponse.next()
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
)

export const config = {
  matcher: [
    '/parking-payment/:path*',
    '/admin/:path*',
    // Agregar más rutas protegidas aquí
  ]
}