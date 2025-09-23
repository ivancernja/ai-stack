const integrations = [
  {
    id: 1,
    name: "Stripe",
    description: "Payment processing and subscription management",
    category: "Payments",
    users: "47.2k",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%236772e5'%3E%3Cpath d='M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z'/%3E%3C/svg%3E"
  },
  {
    id: 2,
    name: "Zapier",
    description: "Workflow automation and app integrations",
    category: "Automation",
    users: "38.9k",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23FF4A00'%3E%3Cpath d='M12 0L24 24H0L12 0z'/%3E%3C/svg%3E"
  },
  {
    id: 3,
    name: "Supabase",
    description: "Database and real-time subscriptions",
    category: "Database",
    users: "29.4k",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%233ecf8e'%3E%3Cpath d='M12.9 1.9c-.7-.8-1.9-.8-2.6 0L1.1 12.2c-.4.5-.1 1.3.5 1.3h7.8c.6 0 .9.7.5 1.1l-7.3 8.5c-.7.8.6 1.9 1.3 1.2l9.2-10.3c.4-.5.1-1.3-.5-1.3H4.8c-.6 0-.9-.7-.5-1.1L12.9 1.9z'/%3E%3C/svg%3E"
  },
  {
    id: 4,
    name: "Intercom",
    description: "Customer messaging and support platform",
    category: "Support",
    users: "22.1k",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23000'%3E%3Cpath d='M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-5.568 4.168L6.432 8.16a.8.8 0 1 1 .96-1.28L12 10.24l4.608-3.36a.8.8 0 1 1 .96 1.28z'/%3E%3C/svg%3E"
  },
  {
    id: 5,
    name: "Slack",
    description: "Team notifications and workflow automation",
    category: "Communication",
    users: "31.7k",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%234A154B'%3E%3Cpath d='M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z'/%3E%3C/svg%3E"
  },
  {
    id: 6,
    name: "GitHub",
    description: "Code repository and CI/CD workflows",
    category: "Development",
    users: "42.3k",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23181717'%3E%3Cpath d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/%3E%3C/svg%3E"
  },
  {
    id: 7,
    name: "Airtable",
    description: "Database and project management platform",
    category: "Productivity",
    users: "18.6k",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F24E1E'%3E%3Cpath d='M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.20s-1.354-3.02-3.019-3.02h-3.117v6.04z'/%3E%3Cpath d='M8.735 0v8.981h4.588V0H8.735zM7.264 7.51V1.471H8.735V7.51H7.264z'/%3E%3C/svg%3E"
  },
  {
    id: 8,
    name: "Browse All",
    description: "",
    category: "",
    users: "",
    logo: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23737373'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 5-5v10zm2-10l5 5-5 5V7z'/%3E%3C/svg%3E"
  }
]

const getIconPath = (name: string): string => {
  const iconPaths: { [key: string]: string } = {
    "Stripe": "M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.274 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.591-7.305z",
    "Zapier": "M12 2L2 14h8l-8 6L12 8H4l8-6z",
    "Supabase": "M12.9 1.9c-.7-.8-1.9-.8-2.6 0L1.1 12.2c-.4.5-.1 1.3.5 1.3h7.8c.6 0 .9.7.5 1.1l-7.3 8.5c-.7.8.6 1.9 1.3 1.2l9.2-10.3c.4-.5.1-1.3-.5-1.3H4.8c-.6 0-.9-.7-.5-1.1L12.9 1.9z",
    "Intercom": "M4 7.2C4 5.4 5.4 4 7.2 4h9.6C18.6 4 20 5.4 20 7.2v5.6c0 1.8-1.4 3.2-3.2 3.2H12l-4 4v-4H7.2C5.4 16 4 14.6 4 12.8V7.2z",
    "Slack": "M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313zM8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312zM18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312zM15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z",
    "GitHub": "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z",
    "Airtable": "M3 3h18v3L12 12 3 6V3zm0 6l9 6 9-6v9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V9z"
  };
  return iconPaths[name] || "";
};

export function Integrations() {
  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 leading-tight text-[#3e2723]">
          Works with your <span className="italic">favorite</span> tools
        </h2>
        <p className="text-lg text-[#6d4c41] leading-relaxed max-w-2xl mx-auto">
          Seamlessly integrate with the tools your team already uses. One-click setup for popular services.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
        {integrations.map((integration) => (
          <div
            key={integration.id}
            className={`group rounded-lg border p-6 transition-all duration-300 hover:shadow-sm ${
              integration.id === 8 
                ? 'border-dashed border-[#e0d6c9] bg-[#f8f5f0] hover:bg-white hover:border-[#2e7d32]' 
                : 'border-[#e0d6c9] bg-[#f8f5f0] hover:bg-white hover:border-[#2e7d32]'
            }`}
          >
            {integration.id === 8 ? (
              // Browse all card - just "More ->" in center
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <span className="font-medium text-[#3e2723] group-hover:text-[#2e7d32] transition-colors">
                    More →
                  </span>
                </div>
              </div>
            ) : (
              // Regular integration card - same style as community
              <>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="text-[#6d4c41] group-hover:text-[#2e7d32] transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={getIconPath(integration.name)} />
                    </svg>
                  </div>
                  <svg 
                    className="w-4 h-4 text-[#e0d6c9] group-hover:text-[#2e7d32] transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-[#3e2723] group-hover:text-[#2e7d32] transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-[#6d4c41] mb-3 leading-relaxed">
                    {integration.description}
                  </p>
                  <div className="text-xs text-[#6d4c41] font-mono">
                    {integration.users} uses
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}