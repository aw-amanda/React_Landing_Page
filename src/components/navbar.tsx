import { useState } from 'react'
import logo from '../assets/logo.png'
import { Link } from './utils/link'
import { ThemeButton } from './utils/theme-button'

export const navItems = [
  { href: '#', text: 'Home' },
  { href: '#about', text: 'About Us' },
  { href: '#services', text: 'Services' },
  { href: '#contact', text: 'Contact' }
]

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-99 h-20 nav-style backdrop-blur-2xl">
      <nav className="w-full py-2 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center gap-3">
              <img src={logo} alt="Logo" className="w-10 h-12" />
              <span className="hidden sm:block">
                Landscaping Services
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-5">
            <ul className="flex space-x-4">
              {navItems.map((item, key) => (
                <Link href={item.href} text={item.text} key={key} />
              ))}
            </ul>
            
            <ThemeButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="rounded-full p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`nav-style rounded-b-xl md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-1 mt-2 h-full flex flex-col justify-between">
            <div className="space-y-1">
              {navItems.map((item, key) => (
                <a
                  href={item.href}
                  key={key}
                  className="block px-3 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </a>
              ))}
            </div>
            <div className="mx-3 my-2">
              <ThemeButton />
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}