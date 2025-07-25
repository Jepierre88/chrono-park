// components/ui/nav-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"

export function NavSkeleton() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>
        <Skeleton className="h-4 w-20" />
      </SidebarGroupLabel>
      <SidebarMenu>
        {/* Simular 3-4 items principales */}
        {Array.from({ length: 4 }).map((_, index) => (
          <SidebarMenuItem key={index}>
            <SidebarMenuButton>
              <Skeleton className="h-4 w-4 rounded" /> {/* Icono */}
              <Skeleton className="h-4 w-24" /> {/* Título */}
              <Skeleton className="h-4 w-4 ml-auto" /> {/* ChevronRight */}
            </SidebarMenuButton>
            
            {/* Simular algunos subitems */}
            {index < 2 && (
              <SidebarMenuSub>
                {Array.from({ length: 2 }).map((_, subIndex) => (
                  <SidebarMenuSubItem key={subIndex}>
                    <div className="flex items-center gap-2 px-4 py-2">
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            )}
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}