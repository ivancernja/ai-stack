import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What exactly is the Leap Stack?",
    answer: "The Leap Stack is a curated collection of best-in-class tools that work seamlessly together: Leap for code generation, <a href='https://encore.cloud' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Encore</a> for backend infrastructure, <a href='https://clerk.dev' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Clerk</a> for authentication, and <a href='https://polar.sh' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Polar</a> for payments. Each component is production-tested and used by companies at scale."
  },
  {
    question: "How do the different components work together?",
    answer: "Leap generates your application code, <a href='https://encore.cloud' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Encore</a> provides the backend framework and deployment infrastructure, <a href='https://clerk.dev' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Clerk</a> handles all authentication and user management, and <a href='https://polar.sh' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Polar</a> manages payments and subscriptions. The stack is pre-configured so all components integrate automatically."
  },
  {
    question: "Can I use individual components from the stack?",
    answer: "Absolutely! Each component (<a href='https://leap.new' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Leap</a>, <a href='https://encore.cloud' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Encore</a>, <a href='https://clerk.dev' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Clerk</a>, <a href='https://polar.sh' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Polar</a>) works independently. You can adopt them one by one or use the full stack. Many teams start with Encore for backend, add Clerk for auth, then integrate Polar for payments as they grow."
  },
  {
    question: "Why these specific tools in the stack?",
    answer: "Each component was selected for being the best-in-class solution: <a href='https://encore.cloud' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Encore</a> eliminates DevOps complexity, <a href='https://clerk.dev' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Clerk</a> provides enterprise-grade auth, <a href='https://polar.sh' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Polar</a> handles subscription billing elegantly, and Leap generates production-ready code. Together, they cover the full application lifecycle."
  },
  {
    question: "How does this compare to building with separate tools?",
    answer: "Traditional stacks require you to integrate multiple tools yourself - handling auth flows, payment webhooks, deployment pipelines, etc. The Leap Stack components are pre-integrated and battle-tested together, eliminating integration complexity and reducing bugs."
  },
  {
    question: "Is the stack suitable for enterprise applications?",
    answer: "Yes, each component is built for enterprise scale. <a href='https://encore.cloud' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Encore</a> handles Netflix-grade infrastructure, <a href='https://clerk.dev' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Clerk</a> supports SAML/SSO and compliance, <a href='https://polar.sh' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Polar</a> manages complex billing scenarios, and Leap generates enterprise-quality code. Many YC and public companies use these tools."
  },
  {
    question: "What if I need to customize beyond what the stack provides?",
    answer: "Every component in the stack provides full customization. You get complete source code access from <a href='https://leap.new' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Leap</a>, can modify <a href='https://encore.cloud' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Encore</a> services, customize <a href='https://clerk.dev' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Clerk's</a> auth flows, and configure <a href='https://polar.sh' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Polar's</a> billing logic. The stack accelerates development without limiting flexibility."
  },
  {
    question: "How do I get started with the stack?",
    answer: "Start by describing your app idea to <a href='https://leap.new' target='_blank' rel='noopener noreferrer' class='text-[#2e7d32] hover:text-[#1b5e20] transition-colors font-medium'>Leap</a> - it will generate a complete application using all stack components. You can then customize any part or gradually adopt individual components into existing projects. Each tool has comprehensive documentation and support."
  }
]

export function FAQ() {
  return (
    <div className="mb-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-6 leading-tight text-[#3e2723]">
          Common <span className="italic">questions</span>
        </h2>
        <p className="text-lg text-[#6d4c41] leading-relaxed max-w-2xl mx-auto">
          Everything you need to know about building with the Leap Stack.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="multiple" className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#e0d6c9]">
              <AccordionTrigger className="text-left hover:no-underline hover:text-[#2e7d32] py-6">
                <span className="text-lg font-medium text-[#3e2723] leading-tight pr-4">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-[#6d4c41] leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}