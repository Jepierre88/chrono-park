import { ubuntu, ubuntuSans } from "@/config/fonts";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import RootProviders from "../providers/root-providers";

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
          <Toaster richColors />
        </RootProviders>
      </body>
    </html>
  );
}
