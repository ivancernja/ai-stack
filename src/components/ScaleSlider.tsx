import { useState } from 'react'

export function ScaleSlider() {
  const [sliderValue, setSliderValue] = useState(30)
  
  // Calculate users based on slider position (exponential scale)
  const calculateUsers = (value: number) => {
    if (value <= 25) return Math.round(1000 + (value / 25) * 9000) // 1K to 10K
    if (value <= 50) return Math.round(10000 + ((value - 25) / 25) * 90000) // 10K to 100K
    if (value <= 75) return Math.round(100000 + ((value - 50) / 25) * 400000) // 100K to 500K
    return Math.round(500000 + ((value - 75) / 25) * 500000) // 500K to 1M
  }
  
  const users = calculateUsers(sliderValue)
  
  // Calculate pricing based on scale (simplified example)
  const calculatePricing = (userCount: number) => {
    if (userCount < 10000) return { monthly: 49, plan: 'Starter' }
    if (userCount < 100000) return { monthly: 149, plan: 'Growth' }
    if (userCount < 500000) return { monthly: 349, plan: 'Scale' }
    return { monthly: 749, plan: 'Enterprise' }
  }
  
  const pricing = calculatePricing(users)
  
  // Format user count for display
  const formatUsers = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
    if (count >= 1000) return `${Math.round(count / 1000)}K`
    return count.toString()
  }

  return (
    <div className="mt-8 mb-8 max-w-3xl mx-auto">
      {/* Main Display */}
      <div className="text-center space-y-6">
        {/* Primary Message */}
        <div className="space-y-2">
          <div className="text-sm text-[#6d4c41] font-medium">Your app scales to</div>
          <div className="text-4xl sm:text-5xl font-bold text-[#2e7d32] font-mono tracking-tight">
            {formatUsers(users)}
          </div>
          <div className="text-sm text-[#6d4c41]">concurrent users</div>
        </div>

        {/* Slider */}
        <div className="relative px-4">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-1 bg-[#e0d6c9] rounded-full appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #2e7d32 0%, #2e7d32 ${sliderValue}%, #e0d6c9 ${sliderValue}%, #e0d6c9 100%)`
            }}
          />
          
          {/* Scale labels */}
          <div className="flex justify-between mt-2 text-xs text-[#6d4c41] font-mono">
            <span>1K</span>
            <span>10K</span>
            <span>100K</span>
            <span>500K</span>
            <span>1M+</span>
          </div>
        </div>

        {/* Typography-based info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-center">
          {/* Time to Deploy */}
          <div className="space-y-1">
            <div className="text-2xl font-bold text-[#2e7d32] font-mono">10</div>
            <div className="text-sm text-[#6d4c41]">minutes to deploy</div>
          </div>
          
          {/* Pricing */}
          <div className="space-y-1">
            <div className="text-2xl font-bold text-[#2e7d32] font-mono">${pricing.monthly}</div>
            <div className="text-sm text-[#6d4c41]">{pricing.plan} plan /month</div>
          </div>
          
          {/* Infrastructure */}
          <div className="space-y-1">
            <div className="text-2xl font-bold text-[#2e7d32] font-mono">∞</div>
            <div className="text-sm text-[#6d4c41]">auto-scaling</div>
          </div>
        </div>
        
        {/* Subtitle */}
        <div className="flex items-center justify-center gap-2 text-xs text-[#6d4c41]">
          <span className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full animate-pulse"></span>
          <span>Infrastructure provisions automatically</span>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2e7d32;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(46, 125, 50, 0.3);
          transition: all 0.2s;
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.3);
          box-shadow: 0 2px 10px rgba(46, 125, 50, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2e7d32;
          cursor: pointer;
          box-shadow: 0 2px 6px rgba(46, 125, 50, 0.3);
          transition: all 0.2s;
          border: none;
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.3);
          box-shadow: 0 2px 10px rgba(46, 125, 50, 0.5);
        }
      `}</style>
    </div>
  )
}