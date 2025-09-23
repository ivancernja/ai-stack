import { useState, useEffect } from 'react'

interface SlotMachineProps {
  words: string[]
  className?: string
}

export function SlotMachine({ words, className = '' }: SlotMachineProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length)
    }, 2000) // Change word every 2 seconds

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span 
      className={`inline-block relative overflow-hidden ${className}`}
      style={{ 
        height: '64px',
        width: '280px',
        verticalAlign: 'baseline'
      }}
    >
      <span
        className="transition-transform duration-500 ease-in-out block"
        style={{
          transform: `translateY(-${currentIndex * 64}px)`,
        }}
      >
        {words.map((word, index) => (
          <span 
            key={index} 
            className="block"
            style={{ 
              height: '64px',
              lineHeight: '64px',
              fontSize: '64px',
              fontWeight: '400',
              letterSpacing: '-0.04em'
            }}
          >
            {word}
          </span>
        ))}
      </span>
    </span>
  )
}