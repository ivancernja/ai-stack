import { useState, useEffect } from 'react'

export function ScaleDemo() {
  const [users, setUsers] = useState(1247)
  const [requests, setRequests] = useState(34567)
  const [instances, setInstances] = useState(3)
  const [cpu, setCpu] = useState(23)
  const [memory, setMemory] = useState(67)

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate scaling up
      setUsers(prev => prev + Math.floor(Math.random() * 50) + 10)
      setRequests(prev => prev + Math.floor(Math.random() * 200) + 50)
      
      // Auto-scale instances based on load
      setInstances(prev => {
        const currentLoad = (cpu + memory) / 2
        if (currentLoad > 80 && prev < 12) return prev + 1
        if (currentLoad < 30 && prev > 2) return prev - 1
        return prev
      })
      
      // CPU fluctuates based on load
      setCpu(prev => {
        const target = Math.min(85, 15 + (users / 100))
        const change = (target - prev) * 0.3 + (Math.random() - 0.5) * 10
        return Math.max(5, Math.min(95, prev + change))
      })
      
      // Memory follows similar pattern
      setMemory(prev => {
        const target = Math.min(80, 20 + (users / 150))
        const change = (target - prev) * 0.2 + (Math.random() - 0.5) * 8
        return Math.max(10, Math.min(90, prev + change))
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [cpu, memory, users])

  return (
    <div className="border border-[#e0d6c9] rounded-lg p-3 sm:p-4 lg:p-6 bg-[#f8f5f0]">
      {/* Main Dashboard */}
      <div className="relative overflow-hidden">
        <div className="w-full">
          <div className="w-full bg-[#f8f5f0] rounded-lg shadow-lg p-3 sm:p-4 lg:p-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold">Production Dashboard</h3>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#6d4c41]">
                <span className="w-2 h-2 bg-[#2e7d32] rounded-full flex-shrink-0"></span>
                <span className="whitespace-nowrap">All systems operational</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
              {/* Active Users */}
              <div className="bg-[#f0e9e0] rounded-lg p-2 sm:p-3 lg:p-4">
                <div className="text-[10px] sm:text-xs text-[#6d4c41] uppercase tracking-wide mb-1">Active Users</div>
                <div className="text-base sm:text-xl lg:text-2xl font-bold text-[#3e2723]">
                  {users.toLocaleString()}
                </div>
                <div className="text-[10px] sm:text-xs text-[#2e7d32] mt-1">↗ +{Math.floor(users * 0.023)}/min</div>
              </div>

              {/* Requests/sec */}
              <div className="bg-[#f0e9e0] rounded-lg p-2 sm:p-3 lg:p-4">
                <div className="text-[10px] sm:text-xs text-[#6d4c41] uppercase tracking-wide mb-1">Requests/sec</div>
                <div className="text-base sm:text-xl lg:text-2xl font-bold text-[#3e2723]">
                  {Math.floor(requests / 60).toLocaleString()}
                </div>
                <div className="text-[10px] sm:text-xs text-[#2e7d32] mt-1">↗ Peak: {Math.floor(requests / 45).toLocaleString()}</div>
              </div>
            </div>

            {/* Infrastructure */}
            <div className="space-y-2 sm:space-y-3">
              <div className="text-xs sm:text-sm font-medium">Auto-scaled Infrastructure</div>
              
              {/* Instances */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm text-[#6d4c41]">Instances</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="flex gap-0.5 sm:gap-1">
                    {Array.from({ length: Math.min(instances, 6) }).map((_, i) => (
                      <div 
                        key={i} 
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-[#2e7d32] rounded transition-all duration-500"
                        style={{ 
                          animationDelay: `${i * 100}ms`,
                          opacity: i < instances ? 1 : 0.3 
                        }}
                      />
                    ))}
                    {instances > 6 && (
                      <span className="text-[10px] sm:text-xs text-[#6d4c41] ml-1">+{instances - 6}</span>
                    )}
                  </div>
                  <span className="text-xs sm:text-sm font-medium">{instances}</span>
                </div>
              </div>

              {/* CPU Usage */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm text-[#6d4c41] whitespace-nowrap">CPU</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-[#e0d6c9] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#2e7d32] to-[#1b5e20] transition-all duration-1000 ease-out"
                      style={{ width: `${cpu}%` }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium w-8 text-right">{Math.round(cpu)}%</span>
                </div>
              </div>

              {/* Memory */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs sm:text-sm text-[#6d4c41] whitespace-nowrap">Memory</span>
                <div className="flex items-center gap-1 sm:gap-2">
                  <div className="w-16 sm:w-20 h-1.5 sm:h-2 bg-[#e0d6c9] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] transition-all duration-1000 ease-out"
                      style={{ width: `${memory}%` }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium w-8 text-right">{Math.round(memory)}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}