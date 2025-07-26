"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"
import EPermissions from "@/lib/shared/enums/permissions.enum"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { usePermissions } from "@/lib/hooks/use-permissions.hook"
import { NavSkeleton } from "./nav-skeleton.component"

interface NavMainProps {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    requiredPermissions?: EPermissions[]
    items?: {
      title: string
      url: string
      requiredPermissions?: EPermissions[]
    }[]
  }[]
}

export function NavMain({ items }: NavMainProps) {
  const pathname = usePathname()
  const { status } = useSession()
  const { filterByPermissions } = usePermissions()

  const isRouteActive = (href: string) => pathname === href
  const isRouteActiveOrChild = (href: string) => 
    pathname === href || pathname.startsWith(`${href}/`)

  // Mostrar skeleton mientras carga la sesión
  if (status === "loading") {
    return <NavSkeleton />
  }

  const filteredItems = filterByPermissions(items)

  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navegación</SidebarGroupLabel>
      <SidebarMenu>
        {filteredItems.map((item) => {
          const filteredSubItems = item.items ? filterByPermissions(item.items) : []
          
          return (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={isRouteActiveOrChild(item.url)}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton 
                    tooltip={item.title}
                    isActive={isRouteActiveOrChild(item.url)}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {filteredSubItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild isActive={isRouteActive(subItem.url)}>
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}