import "./globals.css";
import { ubuntu, ubuntuSans } from "@/config/fonts";
import RootProviders from "./providers";

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
        <RootProviders>
          {children}
        </RootProviders>
      </body>
    </html>
  );
}
