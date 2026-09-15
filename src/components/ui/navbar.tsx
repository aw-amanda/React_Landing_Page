import { useEffect, useRef, useState } from "react"
import logo from "../../assets/logo.png"
import { Link } from "./link"
import { ThemeButton } from "./theme-button"

export const navItems = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#contact", text: "Contact" },
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 10)
        ticking = false
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (!isOpen) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    const onClick = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
      document.body.style.overflow = prevOverflow
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300",
        "bg-[var(--color-card)]/85 backdrop-blur-md supports-[backdrop-filter]:bg-[var(--color-card)]/70",
        isScrolled ? "shadow-elegant border-b border-border" : "",
      ].join(" ")}
    >
      <nav className="container-responsive py-3 sm:py-4" aria-label="Primary">
        <div className="flex justify-between items-center gap-3">
          <a href="#home" className="flex items-center gap-2 sm:gap-3 min-w-0" aria-label="Landscaping Services — Home">
            <img
              src={logo}
              alt=""
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0"
              width={48}
              height={48}
              decoding="async"
            />
            <span className="hidden sm:inline font-semibold text-base lg:text-lg text-primary truncate">
              Landscaping Services
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <ul className="flex gap-1 lg:gap-2" role="list">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} text={item.text} />
                </li>
              ))}
            </ul>
            <ThemeButton />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-1">
            <ThemeButton />
            <button
              ref={buttonRef}
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="rounded-full p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center text-primary hover:bg-secondary transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor" className="w-6 h-6" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          ref={menuRef}
          hidden={!isOpen}
          className="md:hidden absolute left-0 right-0 top-full bg-[var(--color-card)] border-t border-border shadow-elegant"
        >
          <ul className="py-2" role="list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block body-text font-semibold py-3.5 px-5 hover:bg-secondary focus-visible:bg-secondary transition-colors"
                  onClick={closeMenu}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}