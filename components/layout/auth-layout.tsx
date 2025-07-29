import Image from "next/image";
import { PropsWithChildren } from "react";
import DARK_LOGO from "@/public/images/DARK_LOGO.png";
import LIGHT_LOGO from "@/public/images/WHITE_LOGO.png";

export default function AuthLayout({
    children,
}: PropsWithChildren) {
    return (
        <section className="flex flex-col lg:flex-row min-h-screen">

            <picture className="relative hidden lg:flex flex-[0.6] bg-cover bg-center lg:h-screen lg:rounded-lg lg:shadow-lg">
                <Image
                    src="https://images.unsplash.com/photo-1710438399422-2fca27686bcd?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJzdHJhY3RvJTIwb3NjdXJvfGVufDB8fDB8fHww"
                    alt="Auth Background"
                    fill
                    className="w-full h-full object-cover lg:rounded-lg"
                />
            </picture>

            <article className="flex-1 lg:flex-[0.4] flex justify-between bg-muted p-4 sm:p-6 lg:p-8 min-h-screen flex-col">
                <div className="flex items-center justify-center flex-1">
                    <div className="w-full max-w-md">
                        {children}
                    </div>
                </div>
                <div className="flex justify-center w-full flex-col justify-center items-center">
                    <Image
                        src={LIGHT_LOGO}
                        alt="Logo"
                        width={150}
                        height={50}
                        className="dark:hidden"
                    />
                    <Image
                        src={DARK_LOGO}
                        alt="Logo"
                        width={150}
                        height={50}
                        className="hidden dark:block"
                    />
                    <small>© 2025 ChronoSoft. Todos los derechos reservados.</small>
                </div>
            </article>

        </section>
    );
}