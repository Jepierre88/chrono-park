"use client"

import * as React from "react"
import { DollarSign, Users, TrendingUp, ArrowRightLeft, TrendingDown } from "lucide-react"
import { useSession } from "next-auth/react"
import EPermissions from "@/lib/shared/enums/permissions.enum"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./team-switcher.component"
import { NavMain } from "./nav-main.component"
import { NavUser } from "./nav-user.component"

// Datos con permisos requeridos
const data = {
  navMain: [
    {
      title: "PAGOS",
      url: "/parking-payment",
      icon: DollarSign,
      requiredPermissions: [EPermissions.VIEW_PARKING_PAYMENT],
      items: [
        {
          title: "QR VISITANTE",
          url: "/parking-payment",
          requiredPermissions: [EPermissions.VIEW_PARKING_PAYMENT],
        },
        {
          title: "QR RESIDENTE",
          url: "/parking-payment/qr-resident",
          requiredPermissions: [EPermissions.VIEW_PARKING_PAYMENT],
        },
        {
          title: "QR EMPLEADO",
          url: "/parking-payment/qr-employee",
          requiredPermissions: [EPermissions.VIEW_PARKING_PAYMENT],
        },
      ],
    },
    {
      title: "USUARIOS",
      url: "/parking-payment/users",
      icon: Users,
      requiredPermissions: [EPermissions.VIEW_USERS],
      items: [
        {
          title: "Lista de Usuarios",
          url: "/parking-payment/users",
          requiredPermissions: [EPermissions.VIEW_USERS],
        },
        {
          title: "Crear Usuario",
          url: "/parking-payment/users/create",
          requiredPermissions: [EPermissions.CREATE_USERS],
        },
      ],
    },
    {
      title: "INGRESOS",
      url: "/parking-payment/incomes",
      icon: TrendingUp,
      requiredPermissions: [EPermissions.VIEW_INCOMES],
      items: [],
    },
    {
      title: "TRANSACCIONES",
      url: "/parking-payment/transactions",
      icon: ArrowRightLeft,
      requiredPermissions: [EPermissions.VIEW_TRANSACTIONS],
      items: [],
    },
    {
      title: "EGRESOS",
      url: "/parking-payment/outcomes",
      icon: TrendingDown,
      requiredPermissions: [EPermissions.VIEW_OUTCOMES],
      items: [],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: session } = useSession()
  
  const userData = {
    name: session?.user?.name || "Usuario",
    email: session?.user?.email || "usuario@example.com",
    avatar: session?.user?.image || undefined,
  }

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}