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
  
  // Calculate infrastructure needs
  const getInfrastructure = (userCount: number) => {
    if (userCount < 10000) return { servers: 1, db: 'Basic', cache: false }
    if (userCount < 100000) return { servers: 3, db: 'Clustered', cache: true }
    if (userCount < 500000) return { servers: 8, db: 'Sharded', cache: true }
    return { servers: 15, db: 'Multi-region', cache: true }
  }
  
  const infra = getInfrastructure(users)
  
  // Format user count for display
  const formatUsers = (count: number) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M`
    if (count >= 1000) return `${Math.round(count / 1000)}K`
    return count.toString()
  }

  return (
    <div className="mt-8 mb-8 p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-[#e0d6c9]">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-sm text-[#6d4c41]">Your app can handle:</span>
            <span className="text-2xl font-bold text-[#2e7d32] font-mono">
              {formatUsers(users)}
            </span>
            <span className="text-sm text-[#6d4c41]">concurrent users</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#6d4c41]">
            <span className="w-2 h-2 bg-[#2e7d32] rounded-full animate-pulse"></span>
            <span>Auto-scales in real-time</span>
          </div>
        </div>

        {/* Slider */}
        <div className="relative">
          <input
            type="range"
            min="0"
            max="100"
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="w-full h-2 bg-[#e0d6c9] rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, #2e7d32 0%, #2e7d32 ${sliderValue}%, #e0d6c9 ${sliderValue}%, #e0d6c9 100%)`
            }}
          />
          
          {/* Scale labels */}
          <div className="flex justify-between mt-2 text-xs text-[#6d4c41]">
            <span>1K</span>
            <span>10K</span>
            <span>100K</span>
            <span>500K</span>
            <span>1M+</span>
          </div>
        </div>

        {/* Infrastructure display */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#e0d6c9]">
          <div className="flex items-center gap-4">
            {/* Servers */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {Array.from({ length: Math.min(infra.servers, 5) }).map((_, i) => (
                  <div 
                    key={i}
                    className="w-2 h-2 bg-[#2e7d32] rounded-sm animate-pulse"
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
                {infra.servers > 5 && (
                  <span className="text-xs text-[#6d4c41] ml-1">+{infra.servers - 5}</span>
                )}
              </div>
              <span className="text-xs text-[#6d4c41]">{infra.servers} servers</span>
            </div>
            
            {/* Database */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full"></div>
              <span className="text-xs text-[#6d4c41]">{infra.db} DB</span>
            </div>
            
            {/* Cache */}
            {infra.cache && (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full"></div>
                <span className="text-xs text-[#6d4c41]">Redis cache</span>
              </div>
            )}
          </div>
          
          <div className="text-xs text-[#6d4c41]">
            <span className="font-medium">10 min</span> to deploy
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2e7d32;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(46, 125, 50, 0.3);
          transition: all 0.2s;
        }
        
        .slider::-webkit-slider-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 2px 12px rgba(46, 125, 50, 0.5);
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #2e7d32;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(46, 125, 50, 0.3);
          transition: all 0.2s;
          border: none;
        }
        
        .slider::-moz-range-thumb:hover {
          transform: scale(1.2);
          box-shadow: 0 2px 12px rgba(46, 125, 50, 0.5);
        }
      `}</style>
    </div>
  )
}