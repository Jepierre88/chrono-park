// lib/hooks/use-permissions.hook.ts
'use client'

import { useSession } from "next-auth/react";
import { permissionsService } from "@/lib/services/permissions/permissions.service";
import EPermissions from "@/lib/shared/enums/permissions.enum";
import { useMemo } from "react";

export function usePermissions() {
    const { data: session } = useSession();
    const userPermissions = session?.user?.permissions || [];

    const permissions = useMemo(() => ({
        // Métodos principales
        hasPermission: (permission: EPermissions) => 
            permissionsService.hasPermission(userPermissions, permission),
        
        hasAllPermissions: (permissions: EPermissions[]) => 
            permissionsService.hasAllPermissions(userPermissions, permissions),
        
        hasAnyPermission: (permissions: EPermissions[]) => 
            permissionsService.hasAnyPermission(userPermissions, permissions),
        
        // Filtrar elementos
        filterByPermissions: <T extends { requiredPermissions?: EPermissions[] }>(items: T[]) =>
            permissionsService.filterByPermissions(items, userPermissions),
        
        // Array de permisos del usuario
        userPermissions,
    }), [userPermissions]);

    return permissions;
}