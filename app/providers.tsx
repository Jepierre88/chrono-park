'use client'
import { CommonProvider } from "@/lib/contexts/common/common.context";
import { PropsWithChildren } from "react";

export default function RootProviders(props: PropsWithChildren) {
  return (
    <CommonProvider>
      {props.children}
    </CommonProvider>
  );
}