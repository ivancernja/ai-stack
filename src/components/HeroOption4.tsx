import { ExternalLink, Code, Database, Lock, CreditCard, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroOption4 = () => {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 container max-w-7xl mx-auto px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-center">
          <div className="flex flex-col items-center gap-8 text-center">
            
            {/* Developer-focused intro */}
            <div className="bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg p-4 inline-flex items-center gap-2">
              <Code className="h-4 w-4 text-[#2e7d32]" />
              <span className="text-sm font-medium text-[#3e2723]">For developers who ship fast</span>
            </div>
            
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-[#3e2723]">
                Stop building infrastructure.{" "}
                <span className="text-[#2e7d32]">Start building products.</span>
              </h1>
              <p className="mx-auto max-w-4xl text-[#6d4c41] lg:text-xl">
                The only stack that lets you focus on code, not config. 
                Four best-in-class tools working together so you can ship SaaS in minutes, not months.
              </p>
            </div>
            
            {/* Stack architecture visualization */}
            <div className="w-full max-w-5xl mt-12">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="relative">
                  <div className="bg-[#f8f5f0] border-2 border-[#2e7d32] rounded-lg p-6 h-full">
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-16 w-16 bg-[#2e7d32] rounded-lg flex items-center justify-center">
                        <Code className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-[#3e2723] mb-2">Leap</h3>
                        <p className="text-sm text-[#6d4c41] mb-3">AI-powered frontend development</p>
                        <div className="text-xs text-[#6d4c41] bg-white rounded px-2 py-1">React + TypeScript</div>
                      </div>
                    </div>
                  </div>
                  {/* Connector line */}
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#e0d6c9] transform -translate-y-1/2"></div>
                </div>
                
                <div className="relative">
                  <div className="bg-[#f8f5f0] border-2 border-[#3e2723] rounded-lg p-6 h-full">
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-16 w-16 bg-[#3e2723] rounded-lg flex items-center justify-center">
                        <Database className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-[#3e2723] mb-2">Encore</h3>
                        <p className="text-sm text-[#6d4c41] mb-3">Cloud infrastructure & APIs</p>
                        <div className="text-xs text-[#6d4c41] bg-white rounded px-2 py-1">Go + PostgreSQL</div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#e0d6c9] transform -translate-y-1/2"></div>
                </div>
                
                <div className="relative">
                  <div className="bg-[#f8f5f0] border-2 border-[#1b5e20] rounded-lg p-6 h-full">
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-16 w-16 bg-[#1b5e20] rounded-lg flex items-center justify-center">
                        <Lock className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-[#3e2723] mb-2">Clerk</h3>
                        <p className="text-sm text-[#6d4c41] mb-3">Authentication & user management</p>
                        <div className="text-xs text-[#6d4c41] bg-white rounded px-2 py-1">OAuth + MFA</div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-[#e0d6c9] transform -translate-y-1/2"></div>
                </div>
                
                <div>
                  <div className="bg-[#f8f5f0] border-2 border-[#6d4c41] rounded-lg p-6 h-full">
                    <div className="flex flex-col items-center gap-4">
                      <div className="h-16 w-16 bg-[#6d4c41] rounded-lg flex items-center justify-center">
                        <CreditCard className="h-8 w-8 text-white" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-[#3e2723] mb-2">Polar</h3>
                        <p className="text-sm text-[#6d4c41] mb-3">Payments & subscriptions</p>
                        <div className="text-xs text-[#6d4c41] bg-white rounded px-2 py-1">Stripe + Webhooks</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Code snippet */}
              <div className="mt-8 bg-[#3e2723] rounded-lg p-6 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-[#6d4c41] text-xs ml-2">Getting started is this simple:</span>
                </div>
                <code className="text-[#f8f5f0] text-sm font-mono">
                  <div className="text-green-400">// 1. Describe your app in Leap</div>
                  <div className="mt-1">"Build a project management tool with teams"</div>
                  <div className="mt-3 text-green-400">// 2. Deploy with one command</div>
                  <div className="mt-1 text-blue-400">npx</div> <span className="text-yellow-400">leap-stack</span> <span className="text-white">deploy</span>
                  <div className="mt-3 text-green-400">// 3. Your SaaS is live! 🚀</div>
                </code>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Start Building
              </Button>
              <Button variant="outline" className="group">
                View Docs{" "}
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            
            {/* Developer metrics */}
            <div className="mt-16 w-full max-w-5xl">
              <p className="text-sm text-[#6d4c41] text-center mb-6">Join thousands of developers already shipping faster</p>
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#3e2723] group-hover:text-[#2e7d32] transition-colors">127,834</div>
                  <div className="text-xs text-[#6d4c41] uppercase tracking-wide">Apps Deployed</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#3e2723] group-hover:text-[#2e7d32] transition-colors">$2.1B</div>
                  <div className="text-xs text-[#6d4c41] uppercase tracking-wide">Revenue Generated</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#3e2723] group-hover:text-[#2e7d32] transition-colors">99.99%</div>
                  <div className="text-xs text-[#6d4c41] uppercase tracking-wide">Uptime SLA</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#3e2723] group-hover:text-[#2e7d32] transition-colors">10 min</div>
                  <div className="text-xs text-[#6d4c41] uppercase tracking-wide">To Production</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#3e2723] group-hover:text-[#2e7d32] transition-colors">$0</div>
                  <div className="text-xs text-[#6d4c41] uppercase tracking-wide">DevOps Cost</div>
                </div>
                <div className="text-center group">
                  <div className="text-2xl font-bold text-[#3e2723] group-hover:text-[#2e7d32] transition-colors">∞</div>
                  <div className="text-xs text-[#6d4c41] uppercase tracking-wide">Scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroOption4 };