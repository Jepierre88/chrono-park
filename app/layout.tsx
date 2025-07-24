import "./globals.css";
import { ubuntu, ubuntuSans } from "@/config/fonts";
import RootProviders from "./providers";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <title>ChronoPark</title>
      </head>
      <body
        className={`${ubuntuSans.className} ${ubuntu.className} antialiased`}
      >
        <RootProviders>
          {children}
        </RootProviders>
      </body>
    </html>
  );
}
