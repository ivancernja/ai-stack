import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const HeroOption2 = () => {
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
            
            {/* Live metrics banner */}
            <div className="bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg p-6 mb-4">
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#2e7d32] rounded-full animate-pulse"></span>
                  <span className="font-mono font-semibold text-[#3e2723]">127,834 apps deployed</span>
                </div>
                <div className="w-px h-4 bg-[#e0d6c9]"></div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></span>
                  <span className="font-mono font-semibold text-[#3e2723]">$2.1B revenue generated</span>
                </div>
                <div className="w-px h-4 bg-[#e0d6c9]"></div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
                  <span className="font-mono font-semibold text-[#3e2723]">99.99% uptime</span>
                </div>
              </div>
            </div>
            
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-[#3e2723]">
                The proven stack that{" "}
                <span className="text-[#2e7d32]">scales to billions</span>
              </h1>
              <p className="mx-auto max-w-4xl text-[#6d4c41] lg:text-xl">
                From idea to IPO in record time. Our integrated stack powers the world's fastest-growing SaaS companies 
                with AI development, enterprise infrastructure, and zero-config deployments.
              </p>
            </div>
            
            {/* Companies powering the stack */}
            <div className="flex flex-col items-center gap-4">
              <p className="text-sm text-[#6d4c41] font-medium">Powered by industry leaders</p>
              <div className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2 group">
                  <div className="h-12 w-12 bg-[#2e7d32] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-white font-bold text-lg">L</span>
                  </div>
                  <span className="text-xs text-[#6d4c41] font-medium">AI Frontend</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="h-12 w-12 bg-[#3e2723] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <span className="text-xs text-[#6d4c41] font-medium">Infrastructure</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="h-12 w-12 bg-[#1b5e20] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-white font-bold text-lg">C</span>
                  </div>
                  <span className="text-xs text-[#6d4c41] font-medium">Authentication</span>
                </div>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="h-12 w-12 bg-[#6d4c41] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                    <span className="text-white font-bold text-lg">P</span>
                  </div>
                  <span className="text-xs text-[#6d4c41] font-medium">Payments</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center gap-3">
              <Button className="shadow-sm transition-shadow hover:shadow">
                Join 127K+ Developers
              </Button>
              <Button variant="outline" className="group">
                View Success Stories{" "}
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            
            {/* Value props with metrics */}
            <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-5xl">
              <div className="bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
                <div className="text-3xl font-bold text-[#2e7d32] mb-2">10 min</div>
                <div className="text-lg font-semibold text-[#3e2723] mb-2">To Production</div>
                <div className="text-sm text-[#6d4c41]">Deploy faster than any other stack. Zero DevOps required.</div>
              </div>
              <div className="bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
                <div className="text-3xl font-bold text-[#2e7d32] mb-2">$0</div>
                <div className="text-lg font-semibold text-[#3e2723] mb-2">DevOps Cost</div>
                <div className="text-sm text-[#6d4c41]">Automatic scaling, monitoring, and maintenance included.</div>
              </div>
              <div className="bg-[#f8f5f0] border border-[#e0d6c9] rounded-lg p-6 text-center hover:shadow-sm transition-shadow">
                <div className="text-3xl font-bold text-[#2e7d32] mb-2">∞</div>
                <div className="text-lg font-semibold text-[#3e2723] mb-2">Scale</div>
                <div className="text-sm text-[#6d4c41]">From startup to unicorn on the same infrastructure.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroOption2 };