import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  className?: string
}

export default function Button({ 
  children, 
  variant = 'primary',
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200'
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#FF9500] to-[#FFB800] text-white hover:shadow-lg hover:shadow-[#FF9500]/50',
    secondary: 'bg-transparent border-2 border-white/20 text-white hover:bg-white/10'
  }
  
  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

