interface LinkProps {
  href: string
  text?: string
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

export const Link = ({ href, text, className = "" , onClick, children}: LinkProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`px-4 py-2 outline-none relative overflow-hidden cursor-pointer
                text-[rgb(var(--text-link))] [text-shadow:0_0_2px_rgb(var(--text-shadow))] 
                text-[clamp(0.7rem,3.3vw,1.35rem)] hover:scale-[1.05] transition-transform
                ${className}`}
    >
      <span className="relative z-10"> {text || children}</span>
    </a>
  )
}