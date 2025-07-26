'use client'

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export function ThemeSwitch() {
    const theme = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <Button variant="outline" size="icon" className="h-9 w-9">
                <div className="h-4 w-4" />
                <span className="sr-only">Cargando theme</span>
            </Button>
        )
    }

    const isDark = theme.resolvedTheme === 'dark'

    return (
        <Button
            variant="outline"
            size="icon"
            onClick={() => theme.setTheme(isDark ? 'light' : 'dark')}
            className="h-9 w-9 shadow-md hover:shadow-lg transition-shadow"
        >
            {isDark ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </Button>
    )
}
