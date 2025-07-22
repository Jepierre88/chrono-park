'use client'
import { PropsWithChildren } from "react";
import { CommonProvider } from "./contexts/common/common.context";

export default function RootProviders(props: PropsWithChildren) {
  return <CommonProvider>{props.children}</CommonProvider>;
}