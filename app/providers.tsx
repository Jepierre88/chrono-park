'use client'
import { CommonProvider } from "@/lib/contexts/common/common.context";
import { ThemeProvider } from "next-themes";
import { PropsWithChildren } from "react";

export default function RootProviders(props: PropsWithChildren) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CommonProvider>{props.children}</CommonProvider>
    </ThemeProvider>
  );
}