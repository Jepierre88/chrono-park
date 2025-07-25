import RootLayout from "@/components/layout/root-layout";
import "./globals.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
}
