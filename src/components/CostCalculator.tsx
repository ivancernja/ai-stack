import { useState, useEffect } from 'react'

export function CostCalculator() {
  const [users, setUsers] = useState(10000)
  const [requests, setRequests] = useState(1000000)
  const [engineers, setEngineers] = useState(3)
  
  // Calculate costs
  const traditionalCost = {
    devOps: engineers * 150000, // DevOps engineers
    infrastructure: users * 2.5 + (requests / 1000) * 0.1, // AWS costs
    tools: 12000, // Various SaaS tools
    maintenance: engineers * 50000 // Maintenance overhead
  }

  const leapCost = {
    platform: Math.min(5000 + (users * 0.1), 25000), // Leap platform costs
    infrastructure: users * 1.2 + (requests / 1000) * 0.05, // Optimized costs
    tools: 0, // All included
    maintenance: 0 // No maintenance needed
  }

  const traditionalTotal = Object.values(traditionalCost).reduce((a, b) => a + b, 0)
  const leapTotal = Object.values(leapCost).reduce((a, b) => a + b, 0)
  const savings = traditionalTotal - leapTotal
  const savingsPercent = Math.round((savings / traditionalTotal) * 100)

  const [animatedSavings, setAnimatedSavings] = useState(0)

  useEffect(() => {
    const duration = 1000
    const steps = 60
    const savingsStep = savings / steps
    
    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      setAnimatedSavings(Math.round(savingsStep * currentStep))
      
      if (currentStep >= steps) {
        clearInterval(interval)
        setAnimatedSavings(savings)
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [savings, savingsPercent])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="border border-[#E5E5E5] rounded-lg p-8 bg-white mb-16">
      <div className="text-center mb-8">
        <div className="text-sm font-medium mb-2">Cost Analysis</div>
        <div className="text-xs text-[#A3A3A3] uppercase tracking-wide">
          <span className="w-2 h-2 bg-[#22C55E] rounded-full inline-block mr-2 animate-pulse"></span>
          Real-time savings calculation
        </div>
      </div>

      {/* Main Calculator Interface */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 origin-top-left scale-95 rotate-[-1deg] skew-x-[1deg]"
          style={{
            maskImage: 'linear-gradient(to bottom, #000 70%, transparent 100%), linear-gradient(to left, #000 85%, transparent 100%)',
            maskComposite: 'intersect'
          }}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-[0_0_0_1px_#00000022,0_8px_24px_#00000011] p-6">
            {/* Calculator Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Cost Calculator</h3>
              <div className="flex items-center gap-2 text-sm text-[#737373]">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                Live calculation
              </div>
            </div>

            {/* Input Controls */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {/* Users */}
              <div className="bg-[#FAFAFA] rounded-lg p-3">
                <div className="text-xs text-[#737373] uppercase tracking-wide mb-2">Users</div>
                <div className="text-lg font-bold text-[#0A0A0A] mb-2">
                  {users.toLocaleString()}
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={users}
                  onChange={(e) => setUsers(Number(e.target.value))}
                  className="w-full h-1 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Requests */}
              <div className="bg-[#FAFAFA] rounded-lg p-3">
                <div className="text-xs text-[#737373] uppercase tracking-wide mb-2">Requests/mo</div>
                <div className="text-lg font-bold text-[#0A0A0A] mb-2">
                  {(requests / 1000000).toFixed(1)}M
                </div>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={requests}
                  onChange={(e) => setRequests(Number(e.target.value))}
                  className="w-full h-1 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>

              {/* Engineers */}
              <div className="bg-[#FAFAFA] rounded-lg p-3">
                <div className="text-xs text-[#737373] uppercase tracking-wide mb-2">DevOps</div>
                <div className="text-lg font-bold text-[#0A0A0A] mb-2">
                  {engineers}
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={engineers}
                  onChange={(e) => setEngineers(Number(e.target.value))}
                  className="w-full h-1 bg-[#E5E5E5] rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
            </div>

            {/* Savings Display */}
            <div className="space-y-3">
              <div className="text-sm font-medium">Annual Cost Comparison</div>
              
              {/* Traditional vs Leap */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#737373]">Traditional Setup</span>
                <span className="text-sm font-medium">{formatCurrency(traditionalTotal)}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#22C55E]">Leap Stack</span>
                <span className="text-sm font-medium text-[#22C55E]">{formatCurrency(leapTotal)}</span>
              </div>

              {/* Savings Bar */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#737373]">Savings</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-2 bg-[#E5E5E5] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] transition-all duration-1000 ease-out"
                      style={{ width: `${Math.min(savingsPercent, 100)}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium text-[#22C55E]">{savingsPercent}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating savings notification */}
        <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#22C55E] to-[#16A34A] text-white px-4 py-3 rounded-lg text-sm animate-slide-up">
          <div className="font-semibold">{formatCurrency(animatedSavings)}</div>
          <div className="text-xs opacity-90">Annual savings</div>
        </div>

        {/* ROI indicator */}
        <div className="absolute top-4 right-4 bg-[#0A0A0A] text-white px-3 py-2 rounded-lg text-xs">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse"></div>
            ROI in {Math.ceil((leapCost.platform / (savings / 12)))} months
          </div>
        </div>
      </div>

      <style>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #22C55E;
          cursor: pointer;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 12px;
          width: 12px;
          border-radius: 50%;
          background: #22C55E;
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}