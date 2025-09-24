import { useState } from 'react'

export function ScaleCalculator() {
  const [sliderValue, setSliderValue] = useState(30)
  const [inputValue, setInputValue] = useState("")
  
  // Calculate users based on slider position (exponential scale)
  const calculateUsers = (value: number) => {
    if (value <= 25) return Math.round(1000 + (value / 25) * 4000) // 1K to 5K
    if (value <= 50) return Math.round(5000 + ((value - 25) / 25) * 15000) // 5K to 20K
    if (value <= 75) return Math.round(20000 + ((value - 50) / 25) * 30000) // 20K to 50K
    return Math.round(50000 + ((value - 75) / 25) * 50000) // 50K to 100K
  }
  
  const users = calculateUsers(sliderValue)
  
  // Calculate pricing and deploy time based on scale
  const calculatePricing = (userCount: number) => {
    if (userCount <= 5000) return "Free"
    if (userCount < 20000) return 30
    if (userCount < 50000) return 149
    return "349+"
  }
  
  const calculateDeployTime = (userCount: number) => {
    if (userCount <= 5000) return "under 10 minutes"
    if (userCount < 20000) return "under 15 minutes"
    if (userCount < 50000) return "under 30 minutes" 
    return "under an hour"
  }
  
  const pricing = calculatePricing(users)
  const deployTime = calculateDeployTime(users)
  
  // Format user count for display
  const formatUsers = (count: number) => {
    if (count >= 100000) return "100K+"
    if (count >= 10000) return `${Math.round(count / 1000)}K`
    if (count >= 1000) return `${Math.round(count / 1000)}K`
    return count.toString()
  }
  
  const handleGenerateClick = () => {
    if (inputValue) {
      window.location.href = `https://leap.new/?build=${encodeURIComponent(inputValue)}`;
    } else {
      window.location.href = "https://leap.new/";
    }
  }
  
  return (
    <section id="scale-calculator" className="py-16 mb-12">
      <div className="max-w-6xl mx-auto px-4 md:px-12">
        {/* Unified container */}
        <div className="bg-gradient-to-br from-[#fafaf9] to-[#f8f5f0] rounded-2xl border border-[#e0d6c9] p-8 md:p-12">
          
          {/* Top: Scale visualization */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3e2723] mb-8">
              Your app can scale up to{" "}
              <span className="text-[#2e7d32] bg-[#2e7d32]/10 px-2 py-1 rounded">{formatUsers(users)}</span> users
            </h2>
            
            {/* Slider centered */}
            <div className="max-w-2xl mx-auto mb-8">
              <input
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full h-2 bg-[#e0d6c9] rounded-full appearance-none cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(to right, #2e7d32 0%, #2e7d32 ${sliderValue}%, #e0d6c9 ${sliderValue}%, #e0d6c9 100%)`
                }}
              />
              <div className="flex justify-between mt-3 text-xs text-[#6d4c41] opacity-60">
                <span>startup</span>
                <span>growth</span>
                <span>enterprise</span>
              </div>
            </div>
            
            {/* Dynamic stats */}
            <div className="flex justify-center gap-8 md:gap-16 text-sm">
              <div>
                <span className="text-[#6d4c41] opacity-70">Starting from: </span>
                <span className="font-semibold text-[#2e7d32]">{pricing === "Free" ? "Free" : pricing.toString().includes("+") ? `$${pricing}/mo` : `$${pricing}/mo`}</span>
              </div>
              <div>
                <span className="text-[#6d4c41] opacity-70">Can be built in: </span>
                <span className="font-semibold text-[#2e7d32]">{deployTime}</span>
              </div>
            </div>
          </div>
          
          {/* Bottom: Build prompt */}
          <div className="border-t border-[#e0d6c9] pt-8">
            <div className="max-w-2xl mx-auto">
              <p className="text-center text-[#6d4c41] mb-4">
                Ready to build something at this scale?
              </p>
              <div className="relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="w-full px-4 py-4 pr-20 bg-white border border-[#e0d6c9] rounded-xl text-[#3e2723] placeholder-[#6d4c41]/50 focus:outline-none focus:border-[#2e7d32] transition-all resize-none min-h-[120px]"
                  placeholder="Describe your app idea..."
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' && e.shiftKey === false) {
                      e.preventDefault();
                      handleGenerateClick();
                    }
                  }}
                />
                <button
                  onClick={handleGenerateClick}
                  className="absolute bottom-3 right-3 p-2 bg-[#2e7d32] text-white rounded-lg hover:bg-[#1b5e20] transition-colors"
                  aria-label="Send"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
              <p className="text-center text-xs text-[#6d4c41] opacity-50 mt-4">
                AI generates everything • Deploy instantly
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2e7d32;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(46, 125, 50, 0.3);
          transition: all 0.2s;
        }
        
        input[type="range"]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #2e7d32;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(46, 125, 50, 0.3);
          border: none;
          transition: all 0.2s;
        }
        
        input[type="range"]::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  )
}