import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroOption1 = () => {
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
            
            {/* Stack visualization */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                <div className="h-8 w-8 bg-[#2e7d32] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-[#3e2723] font-medium">Leap</span>
              </div>
              <div className="text-[#6d4c41]">+</div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                <div className="h-8 w-8 bg-[#3e2723] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">E</span>
                </div>
                <span className="text-[#3e2723] font-medium">Encore</span>
              </div>
              <div className="text-[#6d4c41]">+</div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                <div className="h-8 w-8 bg-[#1b5e20] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">C</span>
                </div>
                <span className="text-[#3e2723] font-medium">Clerk</span>
              </div>
              <div className="text-[#6d4c41]">+</div>
              <div className="flex items-center gap-2 px-4 py-2 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                <div className="h-8 w-8 bg-[#6d4c41] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-[#3e2723] font-medium">Polar</span>
              </div>
            </div>
            
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-[#3e2723]">
                The complete stack for{" "}
                <span className="text-[#2e7d32]">modern SaaS</span>
              </h1>
              <p className="mx-auto max-w-4xl text-[#6d4c41] lg:text-xl">
                AI-powered frontend development meets production-grade backend infrastructure. 
                Build, deploy, and scale your SaaS with integrated authentication, payments, and hosting.
              </p>
            </div>
            
            {/* Workflow visualization */}
            <div className="mt-8 flex flex-col lg:flex-row items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                <div className="w-2 h-2 bg-[#2e7d32] rounded-full"></div>
                <span className="text-[#3e2723] font-medium">Describe your app in Leap</span>
              </div>
              <div className="text-[#6d4c41]">→</div>
              <div className="flex items-center gap-3 px-4 py-3 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                <div className="w-2 h-2 bg-[#3e2723] rounded-full"></div>
                <span className="text-[#3e2723] font-medium">Encore handles infrastructure</span>
              </div>
              <div className="text-[#6d4c41]">→</div>
              <div className="flex items-center gap-3 px-4 py-3 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                <div className="w-2 h-2 bg-[#1b5e20] rounded-full"></div>
                <span className="text-[#3e2723] font-medium">Clerk adds authentication</span>
              </div>
              <div className="text-[#6d4c41]">→</div>
              <div className="flex items-center gap-3 px-4 py-3 bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg">
                <div className="w-2 h-2 bg-[#6d4c41] rounded-full"></div>
                <span className="text-[#3e2723] font-medium">Polar enables payments</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow">
                Start Building Now
              </Button>
              <Button variant="outline" className="group">
                See How It Works{" "}
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            
            {/* Metrics grid */}
            <div className="mt-16 grid grid-cols-2 lg:grid-cols-6 gap-8 w-full max-w-4xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3e2723] mb-1">127,834</div>
                <div className="text-xs text-[#6d4c41] uppercase tracking-wide">Apps Deployed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3e2723] mb-1">$2.1B</div>
                <div className="text-xs text-[#6d4c41] uppercase tracking-wide">Revenue Generated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3e2723] mb-1">99.99%</div>
                <div className="text-xs text-[#6d4c41] uppercase tracking-wide">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3e2723] mb-1">10 min</div>
                <div className="text-xs text-[#6d4c41] uppercase tracking-wide">To Production</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3e2723] mb-1">$0</div>
                <div className="text-xs text-[#6d4c41] uppercase tracking-wide">DevOps Cost</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#3e2723] mb-1">∞</div>
                <div className="text-xs text-[#6d4c41] uppercase tracking-wide">Scale</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroOption1 };