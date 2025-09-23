import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroOption3 = () => {
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
            
            {/* Problem statement */}
            <div className="bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg p-6 max-w-3xl">
              <p className="text-[#6d4c41] text-lg">
                Building SaaS is hard. You need frontend, backend, auth, payments, hosting, monitoring...
              </p>
            </div>
            
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-[#3e2723]">
                What if you could{" "}
                <span className="text-[#2e7d32]">skip all that</span>?
              </h1>
              <p className="mx-auto max-w-4xl text-[#6d4c41] lg:text-xl">
                Leap Stack combines the best tools in one integrated platform. 
                Describe your app in plain English, and get production-ready SaaS in minutes.
              </p>
            </div>
            
            {/* Before vs After */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mt-8">
              <div className="bg-white border border-[#e0d6c9] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#3e2723] mb-4 text-red-600">❌ Traditional Way</h3>
                <ul className="space-y-2 text-sm text-[#6d4c41] text-left">
                  <li>• 6+ months development time</li>
                  <li>• Multiple vendors to manage</li>
                  <li>• Complex DevOps setup</li>
                  <li>• Expensive scaling costs</li>
                  <li>• Security vulnerabilities</li>
                </ul>
              </div>
              <div className="bg-[#f8f5f0] border border-[#2e7d32] rounded-lg p-6">
                <h3 className="text-lg font-semibold text-[#2e7d32] mb-4">✅ With Leap Stack</h3>
                <ul className="space-y-2 text-sm text-[#3e2723] text-left font-medium">
                  <li>• 10 minutes to production</li>
                  <li>• One integrated platform</li>
                  <li>• Zero DevOps required</li>
                  <li>• Infinite scale included</li>
                  <li>• Enterprise security built-in</li>
                </ul>
              </div>
            </div>
            
            {/* How it works with companies */}
            <div className="mt-12 w-full max-w-4xl">
              <h3 className="text-xl font-semibold text-[#3e2723] mb-6">How the magic happens:</h3>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
                <div className="flex flex-col items-center gap-3 p-4 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                  <div className="h-12 w-12 bg-[#2e7d32] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">L</span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[#3e2723] text-sm">Leap</div>
                    <div className="text-xs text-[#6d4c41]">AI builds your frontend</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                  <div className="h-12 w-12 bg-[#3e2723] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[#3e2723] text-sm">Encore</div>
                    <div className="text-xs text-[#6d4c41]">Deploys your backend</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                  <div className="h-12 w-12 bg-[#1b5e20] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[#3e2723] text-sm">Clerk</div>
                    <div className="text-xs text-[#6d4c41]">Handles user auth</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 p-4 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                  <div className="h-12 w-12 bg-[#6d4c41] rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[#3e2723] text-sm">Polar</div>
                    <div className="text-xs text-[#6d4c41]">Powers payments</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow">
                Try It Free
              </Button>
              <Button variant="outline" className="group">
                See Examples{" "}
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            
            {/* Social proof metrics */}
            <div className="mt-16 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg p-8 w-full max-w-4xl">
              <p className="text-sm text-[#6d4c41] text-center mb-6">Trusted by developers worldwide</p>
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#3e2723]">127K+</div>
                  <div className="text-xs text-[#6d4c41]">Apps Built</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#3e2723]">$2.1B</div>
                  <div className="text-xs text-[#6d4c41]">Revenue</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#3e2723]">99.99%</div>
                  <div className="text-xs text-[#6d4c41]">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#3e2723]">10 min</div>
                  <div className="text-xs text-[#6d4c41]">Deploy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#3e2723]">$0</div>
                  <div className="text-xs text-[#6d4c41]">DevOps</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#3e2723]">∞</div>
                  <div className="text-xs text-[#6d4c41]">Scale</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroOption3 };