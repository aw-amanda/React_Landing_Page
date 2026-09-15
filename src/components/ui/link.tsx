import { useLenis } from "lenis/react"
import { anchorScrollOptions } from "../../lib/utils/scroll"

interface LinkProps {
  href: string
  text: string
}

export const Link = ({ href, text }: LinkProps) => {
  const lenis = useLenis()
  const isAnchorLink = href.startsWith("#")

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!isAnchorLink) return
    e.preventDefault()
    if (lenis) {
      lenis.scrollTo(href, anchorScrollOptions)
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }
    // Move focus to the target for keyboard/SR users
    const target = document.querySelector(href) as HTMLElement | null
    if (target) {
      target.setAttribute("tabindex", "-1")
      target.focus({ preventScroll: true })
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className="relative inline-flex items-center text-secondary hover:text-accent transition-colors duration-200 font-medium py-2 px-3 rounded-lg"
    >
      {text}
    </a>
  )
}