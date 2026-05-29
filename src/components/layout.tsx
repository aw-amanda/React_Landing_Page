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
    <div className="min-h-screen flex flex-col bg-primary">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn-primary">
        Skip to main content
      </a>
      
      <Navbar />
      
      <main id="main-content" className="flex-1 pt-16">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}