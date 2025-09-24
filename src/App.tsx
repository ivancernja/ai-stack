import { Hero12 } from './components/Hero12'
import { Timeline } from './components/Timeline'
import { FAQ } from './components/FAQ'
import { Integrations } from './components/Integrations'
import { TrustedBy } from './components/TrustedBy'
import { FluidReveal } from './components/FluidReveal'
import { ScaleCalculator } from './components/ScaleCalculator'

function App() {
  return (
    <div className="font-sans bg-[#f8f5f0] text-[#3e2723] min-h-screen flex flex-col text-base leading-6 scroll-smooth">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 px-4 md:px-12 py-4 md:py-8 z-20">
        <div className="text-sm font-semibold tracking-tight">LEAP STACK</div>
      </header>

      {/* Hero Section */}
      <Hero12 />

      {/* Main Content */}
      <main className="flex-1 flex flex-col px-4 md:px-12 pb-12 md:pb-20">
        <div className="max-w-[1100px] w-full mx-auto">

          {/* Powered by Technologies Section with Stack Grid */}
          <div className="relative mb-12 md:mb-20">
            {/* Powered by section */}
            <div className="flex flex-col items-center gap-6 md:gap-8 mb-8 md:mb-12">
              <p className="font-medium text-[#6d4c41] text-center">
                Powered by best-in-class technologies
              </p>
              
              {/* Technology Icons */}
              <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
                <a
                  href="https://leap.new"
                  className="group flex aspect-square h-12 items-center justify-center p-2 border border-[#e0d6c9] bg-[#f8f5f0] hover:bg-[#f0e9e0] hover:text-[#3e2723] rounded-md transition-colors"
                >
                  <img src="/leap.png" alt="Leap" className="h-6 w-6 object-contain saturate-0 brightness-50 transition-all group-hover:saturate-100 group-hover:brightness-100" />
                </a>
                <a
                  href="https://encore.dev"
                  className="group flex aspect-square h-12 items-center justify-center p-2 border border-[#e0d6c9] bg-[#f8f5f0] hover:bg-[#f0e9e0] hover:text-[#3e2723] rounded-md transition-colors"
                >
                  <img src="/encore.png" alt="Encore" className="h-6 w-6 object-contain saturate-0 transition-all group-hover:saturate-100" />
                </a>
                <a
                  href="https://clerk.dev"
                  className="group flex aspect-square h-12 items-center justify-center p-2 border border-[#e0d6c9] bg-[#f8f5f0] hover:bg-[#f0e9e0] hover:text-[#3e2723] rounded-md transition-colors"
                >
                  <img src="/clerk.png" alt="Clerk" className="h-6 w-6 object-contain saturate-0 transition-all group-hover:saturate-100" />
                </a>
                <a
                  href="https://polar.sh"
                  className="group flex aspect-square h-12 items-center justify-center p-2 border border-[#e0d6c9] bg-[#f8f5f0] hover:bg-[#f0e9e0] hover:text-[#3e2723] rounded-md transition-colors"
                >
                  <img src="/polar.png" alt="Polar" className="h-6 w-6 object-contain saturate-0 transition-all group-hover:saturate-100" />
                </a>
              </div>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-[#e0d6c9] p-0.5 rounded-lg">
              <a 
                href="https://leap.new" 
                className="bg-[#f8f5f0] px-4 md:px-6 py-6 md:py-7 no-underline text-inherit relative transition-all duration-300 hover:bg-[#f0e9e0] hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] rounded-l-md lg:rounded-l-md rounded-t-md lg:rounded-t-none group will-change-transform"
              >
                <div className="text-xs text-[#6d4c41] font-medium mb-4 tracking-wide uppercase">01</div>
                <h3 className="text-base font-semibold mb-2 tracking-tight group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-1">
                  Leap
                </h3>
                <p className="text-sm text-[#6d4c41] leading-6">
                  AI that builds real applications, not just demos. Creates backends that actually work in production.
                </p>
              </a>

              <a 
                href="https://encore.dev" 
                className="bg-[#f8f5f0] px-4 md:px-6 py-6 md:py-7 no-underline text-inherit relative transition-all duration-300 hover:bg-[#f0e9e0] hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] group will-change-transform"
              >
                <div className="text-xs text-[#6d4c41] font-medium mb-4 tracking-wide uppercase">02</div>
                <h3 className="text-base font-semibold mb-2 tracking-tight group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-1">
                  Encore
                </h3>
                <p className="text-sm text-[#6d4c41] leading-6">
                  Deploy to the same platforms Netflix and Uber run on (AWS/GCP). Zero experience needed.
                </p>
              </a>

              <a 
                href="https://clerk.dev" 
                className="bg-[#f8f5f0] px-4 md:px-6 py-6 md:py-7 no-underline text-inherit relative transition-all duration-300 hover:bg-[#f0e9e0] hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] group will-change-transform"
              >
                <div className="text-xs text-[#6d4c41] font-medium mb-4 tracking-wide uppercase">03</div>
                <h3 className="text-base font-semibold mb-2 tracking-tight group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-1">
                  Clerk
                </h3>
                <p className="text-sm text-[#6d4c41] leading-6">
                  Authentication trusted by enterprises. SAML, SSO, MFA - the works.
                </p>
              </a>

              <a 
                href="https://polar.sh" 
                className="bg-[#f8f5f0] px-4 md:px-6 py-6 md:py-7 no-underline text-inherit relative transition-all duration-300 hover:bg-[#f0e9e0] hover:shadow-lg hover:-translate-y-2 hover:scale-[1.02] rounded-r-md md:rounded-r-md rounded-b-md md:rounded-b-none group will-change-transform"
              >
                <div className="text-xs text-[#6d4c41] font-medium mb-4 tracking-wide uppercase">04</div>
                <h3 className="text-base font-semibold mb-2 tracking-tight group-hover:underline group-hover:underline-offset-[3px] group-hover:decoration-1">
                  Polar
                </h3>
                <p className="text-sm text-[#6d4c41] leading-6">
                  Integrating payments, subscriptions & billing with enterprise-grade infrastructure and developer-first APIs.
                </p>
              </a>
            </div>
          </div>

          {/* Trusted By */}
          <FluidReveal direction="up" delay={100}>
            <TrustedBy />
          </FluidReveal>


          {/* Timeline - Real How it Works (4 cards) */}
          <FluidReveal direction="up" delay={300}>
            <Timeline />
          </FluidReveal>

          {/* Scale Calculator + Try it yourself */}
          <FluidReveal direction="up" delay={200}>
            <ScaleCalculator />
          </FluidReveal>

          {/* Nature Case Studies */}
          {/* <FluidReveal direction="up" delay={100}>
            <CaseStudiesNature />
          </FluidReveal> */}

          {/* Integrations */}
          <FluidReveal direction="up" delay={100}>
            <Integrations />
          </FluidReveal>


          {/* FAQ */}
          <FluidReveal direction="up" delay={100}>
            <FAQ />
          </FluidReveal>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#f8f5f0] border-t border-[#e0d6c9] mt-16">
        <div className="max-w-[1100px] mx-auto px-4 md:px-12 py-12 md:py-20">
          <div className="flex w-full flex-col justify-between gap-8 md:gap-12 lg:flex-row lg:items-start">
            {/* Left column - Logo and description */}
            <div className="flex w-full flex-col gap-6 lg:max-w-sm">
              <div className="flex items-center gap-2">
                <div className="text-lg font-bold tracking-tight">LEAP STACK</div>
              </div>
              <p className="text-[#6d4c41] text-sm leading-relaxed">
                The only stack that scales from zero to IPO. Built by teams from Spotify, Stripe, and Y Combinator.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.010c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.197.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right columns - Links */}
            <div className="grid w-full gap-6 md:gap-8 grid-cols-1 sm:grid-cols-3 lg:gap-12">
              <div>
                <h3 className="mb-4 font-semibold text-[#3e2723]">Product</h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#demo" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Demo</a></li>
                  <li><a href="#pricing" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Pricing</a></li>
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Features</a></li>
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Integrations</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="mb-4 font-semibold text-[#3e2723]">Company</h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">About</a></li>
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Blog</a></li>
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Careers</a></li>
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 font-semibold text-[#3e2723]">Resources</h3>
                <ul className="space-y-3 text-sm">
                  <li><a href="#docs" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Documentation</a></li>
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Help Center</a></li>
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Community</a></li>
                  <li><a href="#" className="text-[#6d4c41] hover:text-[#2e7d32] transition-colors duration-200">Status</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="mt-8 md:mt-12 flex flex-col justify-between gap-4 border-t border-[#e0d6c9] pt-6 md:pt-8 text-xs text-[#6d4c41] md:flex-row md:items-center">
            <p>© 2024 Leap Stack. All rights reserved.</p>
            <div className="flex gap-4 md:gap-6">
              <a href="#" className="hover:text-[#2e7d32] transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="hover:text-[#2e7d32] transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
