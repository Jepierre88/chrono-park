'use client'

import { Menubar, MenubarMenu, MenubarTrigger, MenubarContent, MenubarItem, MenubarShortcut, MenubarSeparator } from "@/components/ui/menubar";
import { LogOut, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export function AppTopBar() {
  const {data: session} = useSession();
  return (
    <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground">

      <Menubar className="bg-transparent border-0">

        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>Edit</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Undo</MenubarItem>
            <MenubarItem>Redo</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Select All</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
      <Menubar className="bg-transparent border-0">
        <MenubarMenu>
          <MenubarTrigger>
            <User />
            {session?.user?.name || "User"}
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem onClick={async () => await signOut()}><LogOut /> Cerrar sesión</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  )
}