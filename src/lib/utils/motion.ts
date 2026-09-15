import { useEffect, useState } from "react"

export function usePrefersMotion(): boolean {
    const [prefersMotion, setPrefersMotion] = useState(true)

    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: no-preference)")
        setPrefersMotion(mq.matches)
        const handler = (e: MediaQueryListEvent) => setPrefersMotion(e.matches)
        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [])

    return prefersMotion
}