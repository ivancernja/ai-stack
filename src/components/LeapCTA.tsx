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
          Try it yourself
        </h2>
        <p className="text-base sm:text-lg text-[#6d4c41] leading-relaxed max-w-2xl mx-auto">
          Describe your idea and watch it come to life
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div 
          ref={ctaRef}
          className={`transition-all duration-700 ease-out ${
            isVisible 
              ? 'transform scale-100 opacity-100' 
              : 'transform scale-95 opacity-80'
          }`}
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-4 bg-white border-2 border-[#e0d6c9] rounded-xl text-[#3e2723] placeholder-[#6d4c41]/50 focus:outline-none focus:border-[#2e7d32] transition-all text-base"
              placeholder="Describe what you want to build..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleGenerateClick();
                }
              }}
            />
            
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="text-[#6d4c41]">Try:</span>
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => handleExampleClick(example)}
                  className="text-[#2e7d32] hover:opacity-70 transition-opacity cursor-pointer underline decoration-dotted"
                >
                  {example}
                </button>
              ))}
            </div>
            
            <button
              onClick={handleGenerateClick}
              className="w-full px-8 py-4 bg-[#2e7d32] text-white font-medium rounded-xl hover:bg-[#1b5e20] transition-colors text-base"
            >
              Build My App →
            </button>
            
            <p className="text-center text-xs text-[#6d4c41] opacity-60">
              No credit card required • Deploys instantly • Production-ready code
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeapCTA;