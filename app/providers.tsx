'use client'
import { SidebarProvider } from "@/components/ui/sidebar";
import { CommonProvider } from "@/lib/contexts/common/common.context";
import { PropsWithChildren } from "react";

export default function RootProviders(props: PropsWithChildren) {
  return (
    <CommonProvider>
      <SidebarProvider>{props.children}</SidebarProvider>
    </CommonProvider>
  );
}