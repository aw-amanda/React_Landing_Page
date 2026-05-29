import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: 'primary' | 'secondary'
    className?: string
}

export const Button = ({ children, variant = 'primary', className = '', ...props }: ButtonProps) => {
    const buttonClass = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
    
    return (
        <button 
            className={`${buttonClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}