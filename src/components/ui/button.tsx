interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
  className?: string
}

export const Button = ({ onClick, children, className = "" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-4 m-[5px] relative overflow-hidden rounded-full cursor-pointer
                sm:text-2xl md:text-3xl lg:text-4xl border-0
                bg-emerald-950/70 backdrop-blur-md text-white text-shadow-xl
                hover:scale-103 focus:bg-emerald-950 focus-visible:bg-emerald-950 transition-all duration-250
                ${className}`}
    >
      {children}
    </button>
  )
}