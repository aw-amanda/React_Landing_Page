import { useEffect } from "react"
import { useThemeStore } from "../../store/theme-store"

export const ThemeScript = () => {
    const theme = useThemeStore((s) => s.theme)

    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle("dark", theme === "dark")
        root.style.colorScheme = theme

        const meta = document.querySelector('meta[name="theme-color"]')
        if (meta) {
            meta.setAttribute("content", theme === "dark" ? "#141b17" : "#f7f5ef")
        }
    }, [theme])

    return null
}