import { useEffect } from "react"
import { Footer } from "./sections/footer"
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
    <div className="min-h-screen flex flex-col bg-style">
      <Navbar />

      <main className="flex-1 flex flex-col overflow-hidden">
        {children}
      </main>

      <Footer />
    </div>
  )
}