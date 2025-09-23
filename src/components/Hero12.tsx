import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

const Hero12 = () => {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 md:gap-8 text-center pt-12 md:pt-16">
            <div className="inline-flex items-center gap-2 bg-[#f8f5f0] border border-[#e0d6c9] rounded-full px-4 py-2 text-sm">
              <span className="w-2 h-2 bg-[#2e7d32] rounded-full animate-pulse"></span>
              <span className="text-[#6d4c41] font-medium">Now in Public Beta</span>
            </div>
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-[#3e2723]">
                The first{" "}
                <span className="text-[#2e7d32]">all-in-one AI stack</span>{" "}
                for building scalable apps
              </h1>
              <p className="mx-auto max-w-3xl text-[#6d4c41] lg:text-xl">
                From idea to live app that scales to millions of users and paying customers. No coding experience needed. AI builds everything - frontend, backend, payments, and one-click deployment included.
              </p>
            </div>
            
            {/* Simple metrics line */}
            <div className="mt-8 md:mt-10 mb-8 md:mb-12 flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm text-[#6d4c41]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full animate-pulse"></span>
                <span className="font-mono font-semibold">17,482</span>
                <span>apps deployed</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-[#e0d6c9]"></div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold">128,284</span>
                <span className="hidden sm:inline">avg users per app</span>
                <span className="sm:hidden">users/app</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-[#e0d6c9]"></div>
              <div className="flex items-center gap-2">
                <span className="font-mono font-semibold">99.9%</span>
                <span>uptime</span>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };