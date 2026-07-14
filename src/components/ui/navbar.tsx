import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import { Link } from './link'
import { ThemeButton } from './theme-button'

export const navItems = [
  { href: '/', text: 'Home' },
  { href: '#about', text: 'About' },
  { href: '#services', text: 'Services' },
  { href: '#contact', text: 'Contact' }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-card shadow-lg' : 'bg-card/80'
    } backdrop-blur-md`}>
      <nav className="container-responsive py-3 sm:py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-2 sm:gap-3" aria-label="Home">
              <img src={logo} alt="Landscaping Services Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
              <span className="hidden sm:inline font-semibold text-lg">Landscaping Services</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <ul className="flex gap-4 lg:gap-6">
              {navItems.map((item, key) => (
                <Link href={item.href} text={item.text} key={key} />
              ))}
            </ul>
            <ThemeButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeButton />
            <button
              onClick={toggleMenu}
              className="rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full bg-primary shadow-lg border-t border-border mt-0">
            <ul className="py-2">
              {navItems.map((item, key) => (
                <li key={key}>
                  <a
                    href={item.href}
                    className="block body-text font-semibold py-3 px-4 hover:bg-secondary transition-colors"
                    onClick={closeMenu}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}