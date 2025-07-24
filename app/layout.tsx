import "./globals.css";
import { ubuntu, ubuntuSans } from "@/config/fonts";
import RootProviders from "./providers";
import { Toaster } from "@/components/ui/sonner";

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
          <Toaster richColors/>
        </RootProviders>
      </body>
    </html>
  );
}
