
const Hero12 = () => {
  return (
    <section className="relative overflow-hidden py-8 md:py-12 mt-20">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
        />
      </div>
      <div className="relative z-10 max-w-[1100px] mx-auto px-4 md:px-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center">
          <div className="flex flex-col items-center gap-4 md:gap-6 text-center pt-8 md:pt-12">
            <div>
              <h1 className="mb-4 text-2xl font-bold tracking-tight text-pretty lg:text-5xl text-[#3e2723]">
                The first{" "}
                <span className="text-[#2e7d32]">all-in-one AI stack</span>{" "}
                for building scalable apps
              </h1>
              <p className="mx-auto max-w-3xl text-[#6d4c41] lg:text-xl mb-6">
                From idea to live app that scales with your growth. No coding experience needed to get started. AI builds everything - frontend, backend, payments, and one-click deployment included.
              </p>
              
              {/* Subtle calculator link */}
              <div className="text-center">
                <p className="text-sm text-[#6d4c41] opacity-70">
                  Curious how many users it can handle? 
                  <a href="#scale-calculator" className="text-[#2e7d32] hover:opacity-80 transition-opacity ml-1 underline decoration-dotted">
                    Use the calculator
                  </a>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };