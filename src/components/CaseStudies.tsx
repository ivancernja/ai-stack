export function CaseStudies() {
  return (
    <div className="text-center mb-24 px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 leading-tight text-[#3e2723]">
          Ready to build <span className="italic">production</span> SaaS?
        </h2>
        <p className="text-lg text-[#737373] mb-8 leading-relaxed">
          Join thousands of developers who ship faster with the Leap Stack. 
          From idea to production in minutes, not months.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-[#0A0A0A] text-white px-8 py-4 rounded-lg hover:bg-[#1A1A1A] transition-colors font-medium">
            Start building →
          </button>
          <button className="border border-[#E5E5E5] px-8 py-4 rounded-lg hover:bg-[#FAFAFA] transition-colors font-medium">
            View documentation
          </button>
        </div>
      </div>
    </div>
  )
}