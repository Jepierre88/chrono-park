'use client'

import { usePathname } from "next/navigation"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../../ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { Users, TrendingUp, ArrowRightLeft, TrendingDown, DollarSign, Lock } from "lucide-react"

const routeConfig: Record<string, { 
    name: string; 
    icon?: React.ElementType;
}> = {
    'parking-payment': { name: 'Pago de Parqueo', icon: DollarSign },
    'users': { name: 'Usuarios', icon: Users },
    'incomes': { name: 'Ingresos', icon: TrendingUp },
    'transactions': { name: 'Transacciones', icon: ArrowRightLeft },
    'outcomes': { name: 'Salidas', icon: TrendingDown },
    'admin': { name: 'Administración', icon: Lock },
}

// Rutas que NO deben ser enlaces clicables
const nonClickableRoutes = ['/admin']

export function DynamicBreadcrumb() {
    const pathname = usePathname()
    const pathSegments = pathname.split('/').filter(Boolean)
    
    return (
        <>
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="/">
                            Chrono Park
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    
                    {pathSegments.map((segment, index) => {
                        const href = '/' + pathSegments.slice(0, index + 1).join('/')
                        const isLast = index === pathSegments.length - 1
                        const config = routeConfig[segment]
                        const name = config?.name || segment.charAt(0).toUpperCase() + segment.slice(1)
                        const Icon = config?.icon
                        const isNonClickable = nonClickableRoutes.includes(href)
                        
                        return (
                            <div key={href} className="flex items-center">
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    {isLast ? (
                                        <BreadcrumbPage className="flex items-center gap-1 select-none">
                                            {Icon && <Icon className="h-4 w-4" />}
                                            {name}
                                        </BreadcrumbPage>
                                    ) : isNonClickable ? (
                                        <div className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground select-none">
                                            {Icon && <Icon className="h-4 w-4" />}
                                            {name}
                                        </div>
                                    ) : (
                                        <BreadcrumbLink href={href} className="flex items-center gap-1">
                                            {Icon && <Icon className="h-4 w-4" />}
                                            {name}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </div>
                        )
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </>
    )
}