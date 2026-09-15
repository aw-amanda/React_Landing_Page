import { useEffect } from "react"
import { Footer } from "./ui/footer"
import { Navbar } from "./ui/navbar"

interface LayoutProps {
  title: string
  children: React.ReactNode
}

export const Layout = ({ title, children }: LayoutProps) => {
  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <div className="min-h-dvh flex flex-col bg-primary text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] btn-primary shadow-elegant"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1 pt-16 sm:pt-18">
        {children}
      </main>

      <Footer />
    </div>
  )
}