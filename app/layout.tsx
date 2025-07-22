import "./globals.css";
import { ubuntu, ubuntuSans } from "@/config/fonts";
import RootProviders from "./providers";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${ubuntuSans.className} ${ubuntu.className} antialiased light`}
      >
        <RootProviders>{children}
          <Toaster richColors/>
        </RootProviders>
      </body>
    </html>
  );
}
