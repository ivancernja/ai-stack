import { useState, useEffect, useRef } from "react";
import { ScaleDemo } from "./ScaleDemo";

// Interactive components for each step
const IdeaInput = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = '"Build a project management tool with team collaboration, task assignment, and real-time notifications"';
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div>
      <div className="bg-white rounded-lg p-4 border border-[#e0d6c9]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-xs text-[#6d4c41] ml-2">leap.new</span>
        </div>
        
        <div className="text-sm text-[#6d4c41] mb-2">What would you like to build today?</div>
        <div className="bg-[#f8f5f0] border border-[#e0d6c9] rounded p-3 text-sm text-[#3e2723] min-h-[80px] font-mono">
          {typedText}
          {typedText.length < fullText.length && <span className="animate-pulse">|</span>}
        </div>
        
        <div className="mt-4 flex justify-end">
          <button className="bg-[#2e7d32] text-white px-4 py-2 rounded text-sm hover:bg-[#1b5e20] transition-colors">
            Generate App →
          </button>
        </div>
      </div>
    </div>
  );
};

const AIBuilding = () => {
  const [completedItems, setCompletedItems] = useState(0);
  const items = [
    { name: "Leap", task: "Generating React components", logo: "/leap.png" },
    { name: "Encore", task: "Creating TypeScript microservices", logo: "/encore.png" },
    { name: "Clerk", task: "Setting up authentication & user management", logo: "/clerk.png" },
    { name: "Polar", task: "Integrating payments & subscriptions", logo: "/polar.png" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCompletedItems(prev => {
        if (prev < items.length) {
          return prev + 1;
        }
        return prev;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="space-y-3">
        {items.map((item, index) => {
          const isCompleted = index < completedItems;
          const isInProgress = index === completedItems;
          
          return (
            <div 
              key={index} 
              className={`flex items-center gap-3 p-4 rounded border transition-all duration-500 ${
                isCompleted ? 'bg-white border-[#2e7d32]/30' : 'bg-[#f8f5f0] border-[#e0d6c9]'
              }`}
            >
              <img 
                src={item.logo} 
                alt={item.name}
                className="w-6 h-6 object-contain"
              />
              <div className="flex-1">
                <div className="text-sm font-medium text-[#3e2723]">{item.name}</div>
                <div className="text-xs text-[#6d4c41]">{item.task}</div>
              </div>
              <div className="flex items-center">
                {isCompleted ? (
                  <div className="w-3 h-3 rounded-full bg-[#2e7d32]"></div>
                ) : isInProgress ? (
                  <div className="w-3 h-3 border-2 border-[#2e7d32] border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <div className="w-3 h-3 rounded-full bg-[#e0d6c9]"></div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LiveApp = () => {
  const [revenue, setRevenue] = useState(0);
  const [users, setUsers] = useState(0);
  
  useEffect(() => {
    // Animate revenue to $24,850
    const revenueTarget = 24850;
    const revenueIncrement = revenueTarget / 100;
    let currentRevenue = 0;
    
    const revenueInterval = setInterval(() => {
      currentRevenue += revenueIncrement;
      if (currentRevenue >= revenueTarget) {
        currentRevenue = revenueTarget;
        clearInterval(revenueInterval);
      }
      setRevenue(Math.floor(currentRevenue));
    }, 30);

    // Animate users to 12,447
    const usersTarget = 12447;
    const usersIncrement = usersTarget / 100;
    let currentUsers = 0;
    
    const usersInterval = setInterval(() => {
      currentUsers += usersIncrement;
      if (currentUsers >= usersTarget) {
        currentUsers = usersTarget;
        clearInterval(usersInterval);
      }
      setUsers(Math.floor(currentUsers));
    }, 30);

    return () => {
      clearInterval(revenueInterval);
      clearInterval(usersInterval);
    };
  }, []);

  return (
    <div className="space-y-3">
      {/* Browser header */}
      <div className="bg-white rounded-lg border border-[#e0d6c9] overflow-hidden">
        <div className="bg-[#f8f5f0] px-4 py-2 border-b border-[#e0d6c9] flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-2 h-2 bg-[#ff5f57] rounded-full"></div>
            <div className="w-2 h-2 bg-[#ffbd2e] rounded-full"></div>
            <div className="w-2 h-2 bg-[#28ca42] rounded-full"></div>
          </div>
          <div className="text-xs font-mono text-[#6d4c41] ml-2">myapp.leap.new</div>
          <div className="ml-auto flex items-center gap-1">
            <div className="w-1.5 h-1.5 bg-[#2e7d32] rounded-full animate-pulse"></div>
            <span className="text-xs text-[#2e7d32] font-medium">Live</span>
          </div>
        </div>
        
        {/* Dashboard content */}
        <div className="p-4">
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="bg-[#f8f5f0] rounded-lg p-3 text-center border border-[#e0d6c9]">
              <div className="text-lg font-bold text-[#3e2723]">${revenue.toLocaleString()}</div>
              <div className="text-xs text-[#6d4c41]">Revenue</div>
            </div>
            <div className="bg-[#f8f5f0] rounded-lg p-3 text-center border border-[#e0d6c9]">
              <div className="text-lg font-bold text-[#3e2723]">{users.toLocaleString()}</div>
              <div className="text-xs text-[#6d4c41]">Users</div>
            </div>
          </div>
          
          {/* Simple chart visualization */}
          <div className="bg-[#fafaf9] rounded-lg p-3 mb-3 border border-[#f0e9e0]">
            <div className="text-xs text-[#6d4c41] mb-2">Growth</div>
            <div className="flex items-end justify-between h-8">
              <div className="bg-[#2e7d32] rounded-t w-2 h-2"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-3"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-2"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-4"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-3"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-5"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-4"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-6"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-5"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-7"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-6"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-8"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-6"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-7"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-5"></div>
              <div className="bg-[#2e7d32] rounded-t w-2 h-8 animate-pulse"></div>
            </div>
          </div>
          
          <div className="text-xs text-[#6d4c41] text-center">
            Powered by Polar • Clerk • Encore
          </div>
        </div>
      </div>
    </div>
  );
};

const timelineFeatures = [
  {
    time: "0 min",
    title: "Just Describe Your Idea",
    description: "Tell Leap what you want to build in plain English. No coding knowledge needed - just explain your vision like you would to a friend.",
    leftContent: {
      heading: "Start with just words",
      subheading: "No technical knowledge required. Simply describe what you want to build and watch the magic happen."
    },
    highlights: [
      "Natural language input",
      "Zero coding experience needed",
      "AI understands business logic"
    ],
    component: "idea"
  },
  {
    time: "2 min", 
    title: "AI Builds Everything",
    description: "Leap builds your complete app with Encore handling the backend, Clerk managing users and authentication, plus Polar for payments and subscriptions. Everything works together seamlessly.",
    leftContent: {
      heading: "AI does the heavy lifting",
      subheading: "Production-grade microservices with databases, APIs, and beautiful interfaces - all generated automatically from your description."
    },
    highlights: [
      "TypeScript microservices",
      "PostgreSQL schemas", 
      "REST & GraphQL APIs",
      "Production-ready code"
    ],
    component: "building"
  },
  {
    time: "5 min",
    title: "Deploy to Netflix-Grade Infrastructure",
    description: "Your app goes live on enterprise infrastructure that handles traffic spikes seamlessly. Think Black Friday sales or viral TikTok moments - your app just works. Built-in security and monitoring included.",
    leftContent: {
      heading: "Built for real scale", 
      subheading: "Deploy to Netflix-grade infrastructure on AWS/GCP with zero configuration. Auto-scales from zero to millions of users."
    },
    highlights: [
      "AWS/GCP deployment",
      "Auto-scaling infrastructure", 
      "Enterprise authentication",
      "Real-time monitoring"
    ],
    component: "scale"
  },
  {
    time: "10 min",
    title: "Live & Ready for Business",
    description: "Your app is live with payments, subscriptions, billing, user analytics, and enterprise features. 10 minutes to production, not weeks of setup.",
    leftContent: {
      heading: "Start earning revenue",
      subheading: "Your application is live with payments, authentication, analytics, and all the features needed to serve real customers and generate revenue."
    },
    highlights: [
      "Payments & subscriptions ready",
      "Built-in user analytics",
      "Enterprise security features",
      "99.9% uptime guarantee"
    ],
    component: "live"
  },
];

export function Timeline() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || sectionRefs.current.length === 0) return;
      
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const viewportCenter = scrollY + windowHeight / 2;
      
      // Find which section is closest to the center of the viewport
      let closestStep = 0;
      let closestDistance = Infinity;
      
      sectionRefs.current.forEach((ref, index) => {
        if (!ref) return;
        
        const rect = ref.getBoundingClientRect();
        const elementCenter = scrollY + rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - elementCenter);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestStep = index;
        }
      });
      
      setActiveStep(closestStep);
    };

    // Use throttled scroll for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  const currentFeature = timelineFeatures[activeStep];

  return (
    <section className="mb-24" ref={containerRef}>
      <div className="container max-w-6xl mx-auto">
        {/* Mobile-only header */}
        <div className="block md:hidden mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#3e2723]">
            Start with just words
          </h2>
          <p className="text-base text-[#6d4c41] leading-relaxed mb-6">
            No technical knowledge required. Simply describe what you want to build and watch the magic happen in 4 simple steps.
          </p>
        </div>

        <div className="relative grid gap-8 md:gap-16 md:grid-cols-2">
          {/* Left side - sticky content that changes (hidden on mobile, shown on desktop) */}
          <div className="top-40 h-fit md:sticky hidden md:block">
            <div className="transition-all duration-500 ease-in-out min-h-[400px]">
              <h2 className="mt-4 mb-6 text-3xl font-semibold md:text-4xl text-[#3e2723] tracking-tight">
                {currentFeature.leftContent.heading}
              </h2>
              <p className="font-medium text-[#6d4c41] md:text-xl leading-relaxed">
                {currentFeature.leftContent.subheading}
              </p>
              
              {/* Progress indicator */}
              <div className="mt-8 flex items-center gap-2">
                {timelineFeatures.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeStep 
                        ? 'w-8 bg-[#2e7d32]' 
                        : index < activeStep 
                          ? 'w-2 bg-[#2e7d32]' 
                          : 'w-2 bg-[#e0d6c9]'
                    }`}
                  />
                ))}
              </div>
              
              {/* Current step indicator - cleaner design */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-semibold text-[#2e7d32] whitespace-nowrap">
                    {currentFeature.time}
                  </span>
                  <div className="h-px flex-1 bg-[#e0d6c9]"></div>
                  <span className="text-xs text-[#6d4c41]">
                    Step {activeStep + 1} of 4
                  </span>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-[#3e2723] mb-3">
                    {currentFeature.title}
                  </h3>
                  
                  {/* Key highlights */}
                  {currentFeature.highlights && (
                    <div className="space-y-2">
                      {currentFeature.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-start gap-2 text-xs text-[#6d4c41]">
                          <div className="w-1 h-1 bg-[#2e7d32] rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - timeline steps */}
          <div className="flex flex-col gap-12 md:gap-20">
            {timelineFeatures.map((feature, index) => (
              <div 
                key={index} 
                ref={el => { sectionRefs.current[index] = el; }}
                className={`rounded-lg border p-2 transition-all duration-700 ease-out ${
                  index === activeStep 
                    ? 'border-[#2e7d32] bg-white shadow-lg scale-100 opacity-100' 
                    : 'border-[#e0d6c9] bg-[#f8f5f0] hover:border-[#6d4c41] scale-95 opacity-60 hover:opacity-80 hover:scale-98'
                }`}
              >
                {/* Header section with text */}
                <div className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-mono font-bold text-[#2e7d32] bg-[#f0e9e0] px-2 py-1 rounded whitespace-nowrap">
                      {feature.time}
                    </span>
                    <h3 className="text-xl font-semibold text-[#3e2723]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-[#6d4c41] leading-relaxed">
                    {feature.description}{" "}
                    <a href="#" className="text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium">
                      Read more
                    </a>
                  </p>
                </div>

                {/* Render component if specified */}
                {feature.component === "idea" ? (
                  <div className="p-2">
                    <IdeaInput />
                  </div>
                ) : feature.component === "building" ? (
                  <div className="p-2">
                    <AIBuilding />
                  </div>
                ) : feature.component === "scale" ? (
                  <div className="p-2">
                    <ScaleDemo />
                  </div>
                ) : feature.component === "live" ? (
                  <div className="p-2">
                    <LiveApp />
                  </div>
                ) : (
                  <>
                    <div className="aspect-video w-full rounded-md border border-dashed border-[#e0d6c9] object-cover bg-white flex items-center justify-center">
                      <div className="text-center text-[#6d4c41]">
                        <div className="w-16 h-16 mx-auto mb-4 bg-[#f0e9e0] rounded-full flex items-center justify-center">
                          <span className="text-2xl font-bold text-[#2e7d32]">{index + 1}</span>
                        </div>
                        <p className="text-sm">Visual preview coming soon</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-xs font-mono font-bold text-[#2e7d32] bg-[#f0e9e0] px-2 py-1 rounded whitespace-nowrap">
                          {feature.time}
                        </span>
                        <h3 className="text-xl font-semibold text-[#3e2723]">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-[#6d4c41] leading-relaxed">
                        {feature.description}{" "}
                        <a href="#" className="text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium">
                          Read more
                        </a>
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}