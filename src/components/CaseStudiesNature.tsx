import { ArrowRight } from "lucide-react";
import React from "react";

interface CasestudyItem {
  logo: string;
  company: string;
  tags: string;
  title: string;
  subtitle: string;
  image: string;
  link?: string;
}

interface CaseStudiesNatureProps {
  featuredCasestudy?: CasestudyItem;
  casestudies?: CasestudyItem[];
}

const defaultFeaturedCasestudy: CasestudyItem = {
  logo: "/leap.png",
  company: "TaskFlow",
  tags: "PROJECT MANAGEMENT / SAAS PLATFORM",
  title: "From idea to 50k users in 3 months.",
  subtitle: "Built with Leap Stack, scaling automatically.",
  image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  link: "#",
};

const defaultCasestudies: CasestudyItem[] = [
  {
    logo: "/encore.png",
    company: "Streamline",
    tags: "FINTECH / PAYMENT PROCESSING",
    title: "Revenue-ready in one day.",
    subtitle: "Polar payments integrated seamlessly.",
    image: "",
    link: "#",
  },
  {
    logo: "/clerk.png", 
    company: "TeamHub",
    tags: "COLLABORATION / ENTERPRISE AUTH",
    title: "Enterprise security from day one.",
    subtitle: "Clerk authentication scaling to 100k users.",
    image: "",
    link: "#",
  },
];

const CaseStudiesNature = ({
  featuredCasestudy = defaultFeaturedCasestudy,
  casestudies = defaultCasestudies,
}: CaseStudiesNatureProps) => {
  return (
    <section className="py-20 bg-[#f8f5f0]">
      <div className="max-w-[1100px] mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 leading-tight text-[#3e2723]">
            Success <span className="italic">stories</span>
          </h2>
          <p className="text-lg text-[#6d4c41] leading-relaxed max-w-2xl mx-auto">
            See how teams are building and scaling with the Leap Stack.
          </p>
        </div>

        <div className="border border-[#e0d6c9] rounded-xl overflow-hidden bg-white">
          <a
            href={featuredCasestudy.link || "#"}
            className="group grid gap-8 overflow-hidden p-8 transition-all duration-500 ease-out hover:bg-[#fafaf9] lg:grid-cols-2 lg:p-12"
          >
            <div className="flex flex-col justify-between gap-6">
              <div className="text-xl font-medium text-[#3e2723]">
                {featuredCasestudy.company}
              </div>
              <div>
                <span className="text-[#6d4c41] text-xs font-medium uppercase tracking-wide">
                  {featuredCasestudy.tags}
                </span>
                <h3 className="mb-4 mt-3 text-balance text-2xl font-semibold leading-tight text-[#3e2723] lg:text-3xl">
                  {featuredCasestudy.title}
                  <span className="text-[#6d4c41] group-hover:text-[#3e2723] font-normal transition-colors duration-500 ease-out">
                    {" "}
                    {featuredCasestudy.subtitle}
                  </span>
                </h3>
                <div className="flex items-center gap-2 font-medium text-[#2e7d32] group-hover:text-[#1b5e20] transition-colors">
                  Read case study
                  <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-full border border-[#e0d6c9] rounded-lg p-2 bg-[#f8f5f0]">
                <div className="h-64 lg:h-full overflow-hidden rounded">
                  <img
                    src={featuredCasestudy.image}
                    alt="case study"
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </a>
          
          <div className="border-t border-[#e0d6c9]">
            <div className="grid lg:grid-cols-2">
              {casestudies.map((item, idx) => (
                <a
                  key={item.company}
                  href={item.link || "#"}
                  className={`group flex flex-col justify-between gap-8 p-8 transition-all duration-500 ease-out hover:bg-[#fafaf9] lg:p-12 ${
                    idx === 0 ? "" : "border-t border-[#e0d6c9] lg:border-t-0 lg:border-l"
                  }`}
                >
                  <div className="text-xl font-medium text-[#3e2723]">
                    {item.company}
                  </div>
                  <div>
                    <span className="text-[#6d4c41] text-xs font-medium uppercase tracking-wide">
                      {item.tags}
                    </span>
                    <h3 className="mb-4 mt-3 text-balance text-xl font-semibold leading-tight text-[#3e2723] lg:text-2xl">
                      {item.title}
                      <span className="text-[#6d4c41] group-hover:text-[#3e2723] font-normal transition-colors duration-500 ease-out">
                        {" "}
                        {item.subtitle}
                      </span>
                    </h3>
                    <div className="flex items-center gap-2 font-medium text-[#2e7d32] group-hover:text-[#1b5e20] transition-colors">
                      Read case study
                      <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { CaseStudiesNature };