// USADO PARA PROTEGER COMPONEENTES COMO BOTONES
'use client'

import { usePermissions } from "@/lib/hooks/use-permissions.hook";
import EPermissions from "@/lib/shared/enums/permissions.enum";
import { PropsWithChildren } from "react";

interface PermissionGuardProps extends PropsWithChildren {
    permissions: EPermissions[];
    requireAll?: boolean; // Si necesita TODOS los permisos o solo uno
    fallback?: React.ReactNode;
    showFallback?: boolean;
}

export function PermissionGuard({ 
    children, 
    permissions, 
    requireAll = false, 
    fallback = null,
    showFallback = true 
}: PermissionGuardProps) {
    const { hasAllPermissions, hasAnyPermission } = usePermissions();
    
    const hasAccess = requireAll 
        ? hasAllPermissions(permissions)
        : hasAnyPermission(permissions);
    
    if (!hasAccess) {
        return showFallback ? <>{fallback}</> : null;
    }
    
    return <>{children}</>;
}