// lib/services/permissions.service.ts
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/shared/next-auth.config";
import EPermissions from "@/lib/shared/enums/permissions.enum";

class PermissionsService {
    private static instance: PermissionsService;
    
    private constructor() {}
    
    static getInstance(): PermissionsService {
        if (!PermissionsService.instance) {
            PermissionsService.instance = new PermissionsService();
        }
        return PermissionsService.instance;
    }

    /**
     * Verifica si el usuario tiene un permiso específico
     */
    hasPermission(userPermissions: number[], permission: EPermissions): boolean {
        return userPermissions.includes(permission);
    }

    /**
     * Verifica si el usuario tiene TODOS los permisos especificados
     */
    hasAllPermissions(userPermissions: number[], permissions: EPermissions[]): boolean {
        return permissions.every(permission => userPermissions.includes(permission));
    }

    /**
     * Verifica si el usuario tiene AL MENOS UNO de los permisos especificados
     */
    hasAnyPermission(userPermissions: number[], permissions: EPermissions[]): boolean {
        return permissions.some(permission => userPermissions.includes(permission));
    }

    /**
     * Filtra una lista de elementos basado en permisos
     */
    filterByPermissions<T extends { requiredPermissions?: EPermissions[] }>(
        items: T[],
        userPermissions: number[]
    ): T[] {
        return items.filter(item => {
            if (!item.requiredPermissions || item.requiredPermissions.length === 0) {
                return true; // Si no requiere permisos, mostrar
            }
            return this.hasAnyPermission(userPermissions, item.requiredPermissions);
        });
    }

    /**
     * Obtiene permisos del usuario en el servidor
     */
    async getServerUserPermissions(): Promise<number[]> {
        const session = await getServerSession(authOptions);
        return session?.user?.permissions || [];
    }

    /**
     * Verifica permisos en el servidor
     */
    async hasServerPermission(permission: EPermissions): Promise<boolean> {
        const permissions = await this.getServerUserPermissions();
        return this.hasPermission(permissions, permission);
    }

    /**
     * Middleware para verificar permisos
     */
    requirePermissions(requiredPermissions: EPermissions[]) {
        return async () => {
            const userPermissions = await this.getServerUserPermissions();
            const hasAccess = this.hasAnyPermission(userPermissions, requiredPermissions);
            
            if (!hasAccess) {
                throw new Error('No tienes permisos suficientes para acceder a este recurso');
            }
            
            return true;
        };
    }
}

export const permissionsService = PermissionsService.getInstance();