// USADO PARA PROTEGER PÁGINAS COMPLETAS
'use client'

import { usePermissions } from '@/lib/hooks/use-permissions.hook'
import { useSession } from 'next-auth/react'
import EPermissions from '@/lib/shared/enums/permissions.enum'
import { Skeleton } from '@/components/ui/skeleton'
import { AlertCircle } from 'lucide-react'

interface PageGuardProps {
  children: React.ReactNode
  requiredPermissions: EPermissions[]
  requireAll?: boolean
  loadingComponent?: React.ReactNode
  noAccessComponent?: React.ReactNode
}

export function PageGuard({
  children,
  requiredPermissions,
  requireAll = false,
  loadingComponent,
  noAccessComponent
}: PageGuardProps) {
  const { status } = useSession()
  const { hasAllPermissions, hasAnyPermission } = usePermissions()

  // Mostrar loading mientras verifica la sesión
  if (status === 'loading') {
    return loadingComponent || <PageLoadingSkeleton />
  }

  // Verificar permisos
  const hasAccess = requireAll 
    ? hasAllPermissions(requiredPermissions)
    : hasAnyPermission(requiredPermissions)

  if (!hasAccess) {
    return noAccessComponent || <AccessDeniedFallback />
  }

  return <>{children}</>
}

function PageLoadingSkeleton() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton className="h-8 w-64" />
      <Skeleton className="h-4 w-96" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  )
}

function AccessDeniedFallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />
      <h2 className="text-xl font-semibold mb-2">Acceso Denegado</h2>
      <p className="text-muted-foreground">
        No tienes permisos suficientes para acceder a esta página.
      </p>
    </div>
  )
}