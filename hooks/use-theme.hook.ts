'use client'
import { useTheme } from "next-themes";

export default function useAppTheme(){
    const theme = useTheme()
    const isDark = theme.resolvedTheme === "dark";
    const isLight = theme.resolvedTheme === "light";
    return { theme, isDark, isLight };
}