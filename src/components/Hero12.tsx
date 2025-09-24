
import { ScaleSlider } from "./ScaleSlider";

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
            
            {/* Interactive Scale Slider */}
            <div className="w-full max-w-2xl">
              <ScaleSlider />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };