import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: "primary" | "secondary"
  className?: string
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  const variantClass = variant === "primary" ? "btn-primary" : "btn-secondary"
  return (
    <button type={type} className={`${variantClass} ${className}`} {...props}>
      {children}
    </button>
  )
}