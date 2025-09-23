import type { ReactNode } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

interface FluidRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
  delay?: number
  duration?: number
  className?: string
}

export function FluidReveal({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 800,
  className = '' 
}: FluidRevealProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '-50px'
  })

  const getTransform = () => {
    if (isIntersecting) return 'translate3d(0, 0, 0)'
    
    switch (direction) {
      case 'up':
        return 'translate3d(0, 40px, 0)'
      case 'down':
        return 'translate3d(0, -40px, 0)'
      case 'left':
        return 'translate3d(40px, 0, 0)'
      case 'right':
        return 'translate3d(-40px, 0, 0)'
      default:
        return 'translate3d(0, 0, 0)'
    }
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: getTransform(),
        transition: `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) ${delay}ms`,
        willChange: 'transform, opacity'
      }}
    >
      {children}
    </div>
  )
}