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
  return (
    <button 
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  )
}

