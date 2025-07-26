import { ubuntu, ubuntuSans } from "@/config/fonts";
import RootProviders from "./root-providers";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="es" suppressHydrationWarning>
      <Head>
        <title>ChronoPark</title>
      </Head>
      <body
        className={`${ubuntuSans.className} ${ubuntu.className} antialiased`}
      >
        <RootProviders>
          {children}
          <Toaster richColors/>
        </RootProviders>
      </body>
    </html>
  );
}
