import { useState } from 'react'

interface DynamicCopyProps {
  onSliderChange?: (users: string, price: number, minutes: string) => void
}

export function ScaleSlider({ onSliderChange }: DynamicCopyProps) {
  const [sliderValue, setSliderValue] = useState(50)
  const [isOpen, setIsOpen] = useState(false)
  
  // Calculate users based on slider position (exponential scale)
  const calculateUsers = (value: number) => {
    if (value <= 25) return Math.round(1000 + (value / 25) * 9000) // 1K to 10K
    if (value <= 50) return Math.round(10000 + ((value - 25) / 25) * 90000) // 10K to 100K
    if (value <= 75) return Math.round(100000 + ((value - 50) / 25) * 400000) // 100K to 500K
    return Math.round(500000 + ((value - 75) / 25) * 500000) // 500K to 1M
  }
  
  const users = calculateUsers(sliderValue)
  
  // Calculate pricing based on scale
  const calculatePricing = (userCount: number) => {
    if (userCount < 10000) return 30
    if (userCount < 100000) return 30
    if (userCount < 500000) return 149
    return 349
  }
  
  // Calculate deployment minutes based on scale
  const calculateMinutes = (userCount: number) => {
    if (userCount < 10000) return 10 // 10 minutes
    if (userCount < 100000) return 20 // 20 minutes
    if (userCount < 500000) return 45 // 45 minutes
    return 120 // 2 hours
  }
  
  const pricing = calculatePricing(users)
  const minutes = calculateMinutes(users)
  
  // Format minutes for display
  const formatMinutes = (mins: number) => {
    if (mins >= 60) return `${Math.round(mins / 60)} hour${mins > 60 ? 's' : ''}`
    return `less than ${mins} minutes`
  }
  
  // Format user count for display
  const formatUsers = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)} million`
    if (count >= 100000) return `${Math.round(count / 1000)}0K`
    if (count >= 10000) return `${Math.round(count / 1000)}K`
    return `${Math.round(count / 1000)}K`
  }

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    const newUsers = calculateUsers(value)
    const newPricing = calculatePricing(newUsers)
    const newMinutes = calculateMinutes(newUsers)
    if (onSliderChange) {
      onSliderChange(formatUsers(newUsers), newPricing, formatMinutes(newMinutes))
    }
  }

  return (
    <div className="relative inline-block">
      {/* Small adjust button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ml-1 text-xs text-[#2e7d32] opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
        aria-label="Adjust scale"
      >
        ⚙️
      </button>
      
      {/* Floating tooltip overlay */}
      {isOpen && (
        <div className="absolute top-6 left-0 bg-white border border-[#e0d6c9] rounded-lg p-3 shadow-lg z-50 w-48">
          <div className="text-xs text-[#6d4c41] mb-2">Adjust scale</div>
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
            className="w-full h-0.5 bg-[#e0d6c9] rounded-full appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #2e7d32 0%, #2e7d32 ${sliderValue}%, #e0d6c9 ${sliderValue}%, #e0d6c9 100%)`
            }}
          />
          <div className="flex justify-between mt-1 text-[9px] text-[#6d4c41] opacity-60">
            <span>1K</span>
            <span>100K</span>
            <span>1M+</span>
          </div>
        </div>
      )}
      
      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2e7d32;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(46, 125, 50, 0.2);
          transition: all 0.2s;
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 2px 6px rgba(46, 125, 50, 0.4);
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #2e7d32;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(46, 125, 50, 0.2);
          transition: all 0.2s;
          border: none;
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 2px 6px rgba(46, 125, 50, 0.4);
        }
      `}</style>
    </div>
  )
}