'use client'
import { PropsWithChildren } from "react";

export default function RootProviders(props: PropsWithChildren) {
  return (
    <>
      {props.children}
    </>
    );
}