interface LinkProps {
  href: string
  text: string
}

export const Link = ({ href, text }: LinkProps) => {
  const isAnchorLink = href.startsWith('#')
  
  return (
    <a
      href={href}
      className="relative text-text-secondary hover:text-accent transition-colors duration-200 font-medium py-2 px-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
      {...(isAnchorLink && { 
        onClick: (e) => {
          e.preventDefault()
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })}
    >
      {text}
    </a>
  )
}