interface ComparisonFeature {
  label: string
  description: string
  leapStack: true | false | "partial"
  traditional: true | false | "partial"
  tooltip?: string
}

const comparisonFeatures: ComparisonFeature[] = [
  {
    label: "Time to Production",
    description: "From idea to deployed SaaS application",
    leapStack: true,
    traditional: false
  },
  {
    label: "Infrastructure Setup",
    description: "Auto-provisioned vs manual configuration",
    leapStack: true,
    traditional: false
  },
  {
    label: "Authentication",
    description: "Enterprise auth with SSO and SAML",
    leapStack: true,
    traditional: "partial"
  },
  {
    label: "Payment Processing",
    description: "Built-in billing and subscription management",
    leapStack: true,
    traditional: false
  },
  {
    label: "Auto-scaling",
    description: "Automatic scaling based on demand",
    leapStack: true,
    traditional: "partial"
  },
  {
    label: "Monitoring & Analytics",
    description: "Built-in observability and performance metrics",
    leapStack: true,
    traditional: false
  },
  {
    label: "Total Cost",
    description: "All-inclusive vs. multiple service costs",
    leapStack: true,
    traditional: false
  },
  {
    label: "Maintenance",
    description: "Zero maintenance vs. ongoing DevOps work",
    leapStack: true,
    traditional: false
  },
  {
    label: "Performance",
    description: "Optimized stack vs. custom configuration",
    leapStack: true,
    traditional: "partial"
  }
]

export function Comparison() {
  return (
    <div className="mb-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 leading-tight text-[#3e2723]">
          Why choose <span className="italic">Leap Stack</span>?
        </h2>
        <p className="text-lg text-[#737373] leading-relaxed max-w-2xl mx-auto">
          See how the Leap Stack compares to traditional development approaches.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="border border-[#E5E5E5] rounded-lg overflow-hidden bg-white shadow-sm">
          {/* Header */}
          <div className="hidden bg-[#FAFAFA] text-[#0A0A0A] sm:flex border-b border-[#E5E5E5]">
            <div className="w-16 px-6 py-4"></div>
            <div className="flex-1 px-6 py-4 font-medium">Feature</div>
            <div className="w-40 px-6 py-4 font-medium text-center">Leap Stack</div>
            <div className="w-40 px-6 py-4 font-medium text-center">Traditional</div>
          </div>

          {/* Features */}
          {comparisonFeatures.map((feature, index) => (
            <div
              key={feature.label}
              className={`
                flex flex-col items-start text-left sm:flex-row sm:items-center
                ${index > 0 ? 'border-t border-[#E5E5E5]' : ''}
                hover:bg-[#FAFAFA] transition-colors
              `}
            >
              {/* Mobile Title */}
              <div className="flex w-full items-center justify-start px-6 pt-4 sm:w-16 sm:justify-center sm:py-4">
                <span className="text-base font-medium sm:hidden">
                  {feature.label}
                </span>
              </div>

              {/* Feature Description */}
              <div className="w-full flex-1 px-6 pb-2 sm:py-4">
                <div className="hidden font-medium sm:block text-[#0A0A0A]">{feature.label}</div>
                <div className="text-sm text-[#737373] mt-1">
                  {feature.description}
                </div>
              </div>

              {/* Leap Stack Column */}
              <div className="flex w-full items-center justify-start px-6 pb-2 sm:w-40 sm:justify-center sm:py-4">
                <div className="flex items-center gap-2">
                  {feature.leapStack === true ? (
                    <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : feature.leapStack === "partial" ? (
                    <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <span className="text-xs font-medium text-[#737373] sm:hidden">
                    Leap Stack
                  </span>
                </div>
              </div>

              {/* Traditional Column */}
              <div className="flex w-full items-center justify-start px-6 pb-4 sm:w-40 sm:justify-center sm:py-4">
                <div className="flex items-center gap-2">
                  {feature.traditional === true ? (
                    <svg className="w-5 h-5 text-[#22C55E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : feature.traditional === "partial" ? (
                    <svg className="w-5 h-5 text-[#F59E0B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-[#EF4444]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  <span className="text-xs font-medium text-[#737373] sm:hidden">
                    Traditional
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-lg p-8">
            <h3 className="text-xl font-semibold mb-2 text-[#0A0A0A]">Ready to make the switch?</h3>
            <p className="text-[#737373] mb-6">
              Join thousands of developers building faster with Leap Stack
            </p>
            <button className="bg-[#0A0A0A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#1A1A1A] transition-colors">
              Start building today →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}