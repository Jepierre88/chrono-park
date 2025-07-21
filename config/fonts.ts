import { Ubuntu, Ubuntu_Mono, Ubuntu_Sans } from "next/font/google";

export const ubuntu = Ubuntu({
    weight:["400","500", "700"],
    subsets: ["latin"],
})

export const ubuntuMono = Ubuntu_Mono({
    weight:["400", "700"],
    subsets: ["latin"],
})

export const ubuntuSans = Ubuntu_Sans({
    weight:["400","500", "700"],
    subsets: ["latin"],
})
