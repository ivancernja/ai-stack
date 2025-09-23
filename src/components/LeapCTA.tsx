import React, { useState, useEffect, useRef } from "react";

type ExampleType = "project tracker" | "AI writing tool" | "marketplace";

interface PromptMap {
  [key: string]: string;
}

export const LeapCTA: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  const handleGenerateClick = (): void => {
    if (inputValue) {
      window.location.href = `https://leap.new/?build=${encodeURIComponent(inputValue)}`;
    } else {
      window.location.href = "https://leap.new/";
    }
  };

  const handleExampleClick = (exampleType: ExampleType): void => {
    const prompts: PromptMap = {
      "project tracker": "Build a project management tool with team collaboration",
      "AI writing tool": "Build an AI content generator with GPT-4", 
      "marketplace": "Build a freelance marketplace with payments",
    };
    setInputValue(prompts[exampleType] || exampleType);
  };

  const examples: ExampleType[] = ["project tracker", "AI writing tool", "marketplace"];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-24 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 leading-tight text-[#3e2723]">
          Try it <span className="italic">yourself</span>
        </h2>
        <p className="text-base sm:text-lg text-[#6d4c41] leading-relaxed max-w-2xl mx-auto">
          Describe your idea and watch it come to life
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <div 
          ref={ctaRef}
          className={`bg-white rounded-xl border border-[#e0d6c9] p-4 sm:p-6 shadow-sm transition-all duration-700 ease-out ${
            isVisible 
              ? 'transform scale-100 opacity-100' 
              : 'transform scale-95 opacity-80'
          }`}
        >
          <div className="flex flex-col gap-3 mb-4 sm:mb-6">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-3 sm:px-4 py-3 sm:py-4 bg-[#fafaf9] border border-[#e0d6c9] rounded-lg text-[#3e2723] placeholder-[#6d4c41]/60 focus:outline-none focus:border-[#2e7d32] focus:bg-white transition-all text-sm sm:text-base"
              placeholder="What do you want to build?"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleGenerateClick();
                }
              }}
            />
            <button
              onClick={handleGenerateClick}
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-[#2e7d32] text-white font-medium rounded-lg hover:bg-[#1b5e20] transition-colors text-sm sm:text-base"
            >
              Generate App →
            </button>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-2 text-xs sm:text-sm mb-4 sm:mb-6">
            <span className="text-[#6d4c41]">Try:</span>
            <div className="flex flex-wrap justify-center gap-2">
              {examples.map((example, index) => (
                <React.Fragment key={index}>
                  <button
                    onClick={() => handleExampleClick(example)}
                    className="text-[#2e7d32] hover:text-[#1b5e20] transition-colors cursor-pointer font-medium px-2 py-1 bg-[#f0e9e0] rounded-md hover:bg-[#e0d6c9]"
                  >
                    {example}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-[#6d4c41] pt-3 sm:pt-4 border-t border-[#f0e9e0]">
            <div className="flex items-center gap-2 justify-center">
              <div className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full flex-shrink-0"></div>
              <span>No credit card</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full flex-shrink-0"></div>
              <span>Instant deploy</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full flex-shrink-0"></div>
              <span>Production code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeapCTA;