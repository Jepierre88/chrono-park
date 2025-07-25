"use client"

import * as React from "react"
import { DollarSign, Users } from "lucide-react"
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
      title: "Parqueadero",
      url: "/parking-payment",
      icon: DollarSign,
      requiredPermissions: [EPermissions.VIEW_PARKING_PAYMENT],
      items: [
        {
          title: "Pago de Parqueadero",
          url: "/parking-payment",
          requiredPermissions: [EPermissions.VIEW_PARKING_PAYMENT],
        },
        {
          title:"Ingresos",
          url: "/parking-payment/incomes",
          requiredPermissions: [EPermissions.VIEW_INCOMES],
        },
        {
          title: "Transacciones",
          url: "/parking-payment/transactions",
          requiredPermissions: [EPermissions.VIEW_TRANSACTIONS],
        },
        {
          title: "Salidas",
          url: "/parking-payment/outcomes",
          requiredPermissions: [EPermissions.VIEW_OUTCOMES],
        },
      ],
    },
    {
      title: "Administración",
      url: "/admin",
      icon: Users,
      requiredPermissions: [EPermissions.VIEW_USERS],
      items: [
        {
          title: "Usuarios",
          url: "/admin/users",
          requiredPermissions: [EPermissions.VIEW_USERS],
        }
      ],
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