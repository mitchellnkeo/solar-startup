import { useState, useEffect, useRef } from 'react'

interface CountUpProps {
  value: string
  duration?: number
}

export default function CountUp({ value, duration = 2000 }: CountUpProps) {
  const [displayValue, setDisplayValue] = useState('0')
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true)
            animateValue()
          }
        })
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [hasAnimated])

  const animateValue = () => {
    // Extract numeric value and any suffix (%, +, etc.)
    const match = value.match(/([\d.-]+)(.*)/)
    if (!match) {
      setDisplayValue(value)
      return
    }

    const numericValue = parseFloat(match[1])
    const suffix = match[2] || ''
    const isRange = value.includes('-')
    
    if (isRange) {
      // For ranges like "25-35%", just show the value immediately
      setDisplayValue(value)
      return
    }

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = startValue + (numericValue - startValue) * easeOut

      if (progress < 1) {
        // Format based on whether it's a percentage or number
        if (suffix === '%') {
          setDisplayValue(`${Math.round(currentValue)}${suffix}`)
        } else {
          setDisplayValue(`${Math.round(currentValue)}${suffix}`)
        }
        requestAnimationFrame(animate)
      } else {
        setDisplayValue(value)
      }
    }

    animate()
  }

  return <span ref={elementRef}>{displayValue}</span>
}

