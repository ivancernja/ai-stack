import { useState } from 'react'

interface StackComponent {
  id: string
  name: string
  position: { x: number; y: number }
  description: string
  specs: string[]
  color: string
  connections: string[]
}

const stackComponents: StackComponent[] = [
  {
    id: 'leap',
    name: 'Leap',
    position: { x: 50, y: 20 },
    description: 'AI agent that generates production-grade microservices',
    specs: ['Claude 3.5 Sonnet', 'TypeScript generation', 'Architecture planning', 'Real-time coding'],
    color: '#667eea',
    connections: ['encore']
  },
  {
    id: 'encore',
    name: 'Encore',
    position: { x: 20, y: 60 },
    description: 'Backend framework for distributed systems',
    specs: ['9x faster than Express', 'Auto infrastructure', 'Type-safe APIs', 'Built-in tracing'],
    color: '#22C55E',
    connections: ['clerk', 'polar', 'aws']
  },
  {
    id: 'clerk',
    name: 'Clerk',
    position: { x: 50, y: 80 },
    description: 'Enterprise authentication platform',
    specs: ['SAML & SSO', 'Multi-factor auth', 'User management', 'Compliance ready'],
    color: '#3B82F6',
    connections: ['encore']
  },
  {
    id: 'polar',
    name: 'Polar',
    position: { x: 80, y: 60 },
    description: 'Modern payment infrastructure',
    specs: ['Lower fees than Stripe', 'Subscription billing', 'Global payments', 'Revenue analytics'],
    color: '#8B5CF6',
    connections: ['encore']
  },
  {
    id: 'aws',
    name: 'AWS/GCP',
    position: { x: 20, y: 100 },
    description: 'Auto-provisioned cloud infrastructure',
    specs: ['Auto-scaling', 'Load balancing', 'CDN deployment', '99.99% uptime'],
    color: '#F59E0B',
    connections: []
  }
]

export function StackExplorer() {
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null)
  const isComponentConnected = (componentId: string) => {
    if (!hoveredComponent) return false
    const hoveredComp = stackComponents.find(c => c.id === hoveredComponent)
    return hoveredComp?.connections.includes(componentId) || 
           stackComponents.find(c => c.id === componentId)?.connections.includes(hoveredComponent)
  }

  return (
    <div className="border border-[#E5E5E5] rounded-lg p-8 bg-white mb-16">
      <div className="text-center mb-8">
        <div className="text-sm font-medium mb-2">Stack Architecture</div>
        <div className="text-xs text-[#A3A3A3] uppercase tracking-wide">
          <span className="w-2 h-2 bg-[#22C55E] rounded-full inline-block mr-2 animate-pulse"></span>
          Hover to explore connections
        </div>
      </div>

      {/* Main Architecture Visualization */}
      <div className="relative h-80 overflow-hidden">
        <div 
          className="absolute inset-0 origin-top-right scale-90 rotate-1 skew-x-[-1deg]"
          style={{
            maskImage: 'linear-gradient(to bottom, #000 75%, transparent 100%), linear-gradient(to right, #000 90%, transparent 100%)',
            maskComposite: 'intersect'
          }}
        >
          <div className="w-full h-full bg-white rounded-lg shadow-[0_0_0_1px_#00000022,0_8px_24px_#00000011] p-6">
            {/* Architecture Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Production Architecture</h3>
              <div className="flex items-center gap-2 text-sm text-[#737373]">
                <span className="w-2 h-2 bg-[#22C55E] rounded-full"></span>
                All services connected
              </div>
            </div>

            {/* Stack Components Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {stackComponents.slice(0, 4).map(component => {
                const isHovered = hoveredComponent === component.id
                const isConnected = isComponentConnected(component.id)
                
                return (
                  <div
                    key={component.id}
                    className={`
                      relative bg-[#FAFAFA] rounded-lg p-4 cursor-pointer transition-all duration-300
                      ${isHovered ? 'bg-white shadow-lg scale-105' : ''}
                      ${isConnected && !isHovered ? 'bg-white shadow-md' : ''}
                    `}
                    onMouseEnter={() => setHoveredComponent(component.id)}
                    onMouseLeave={() => setHoveredComponent(null)}
                    style={{
                      borderLeft: `3px solid ${isHovered || isConnected ? component.color : '#E5E5E5'}`
                    }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${isHovered ? 'animate-pulse' : ''}`}
                        style={{ backgroundColor: component.color }}
                      />
                      <div className="text-sm font-medium">{component.name}</div>
                    </div>
                    <div className="text-xs text-[#737373] mb-3">
                      {component.description}
                    </div>
                    
                    {/* Connection indicators */}
                    {component.connections.length > 0 && (
                      <div className="flex gap-1">
                        {component.connections.map(connectionId => {
                          const targetComp = stackComponents.find(c => c.id === connectionId)
                          return targetComp ? (
                            <div 
                              key={connectionId}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: targetComp.color }}
                            />
                          ) : null
                        })}
                      </div>
                    )}

                    {/* Hover tooltip */}
                    {isHovered && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-[#0A0A0A] text-white p-3 rounded-lg text-xs z-20 animate-slide-up">
                        <div className="space-y-1">
                          {component.specs.slice(0, 2).map((spec, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-white rounded-full" />
                              <span>{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Infrastructure Status */}
            <div className="space-y-3">
              <div className="text-sm font-medium">Infrastructure Status</div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#737373]">Services</span>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {stackComponents.slice(0, 4).map((component) => (
                      <div 
                        key={component.id}
                        className={`w-2 h-2 rounded transition-all duration-300 ${
                          hoveredComponent === component.id ? 'animate-pulse' : ''
                        }`}
                        style={{ 
                          backgroundColor: component.color,
                          opacity: hoveredComponent === component.id ? 1 : 0.7
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4/4 Online</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm text-[#737373]">Deployment</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-1.5 bg-[#E5E5E5] rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-[#22C55E] to-[#16A34A] transition-all duration-1000"
                      style={{ width: '100%' }}
                    />
                  </div>
                  <span className="text-sm font-medium">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating connection indicator */}
        {hoveredComponent && (
          <div className="absolute bottom-4 right-4 bg-[#0A0A0A] text-white px-3 py-2 rounded-lg text-xs animate-slide-up">
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ backgroundColor: stackComponents.find(c => c.id === hoveredComponent)?.color }}
              />
              Exploring {stackComponents.find(c => c.id === hoveredComponent)?.name}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}