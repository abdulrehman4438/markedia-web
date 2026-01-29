"use client";

import React, { useState } from "react";
import { ChevronDown, Mail, HelpCircle, Zap, Cog, DollarSign } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  icon: React.ReactNode;
  category: string;
}

const faqData: FAQItem[] = [
  {
    id: "general-1",
    category: "General Questions",
    question: "What exactly does 'AI Automation' mean for my business?",
    answer:
      "AI Automation means using intelligent software (AI agents) to perform tasks that typically require human intervention, such as answering customer queries, qualifying leads, or scheduling appointments. This frees up your team to focus on higher-value activities and strategic initiatives.",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    id: "general-2",
    category: "General Questions",
    question: "Is AI automation only for large enterprises?",
    answer:
      "Not at all. Our solutions are designed to be scalable and are highly effective for small and medium-sized businesses looking to grow efficiently without adding significant headcount. We tailor our AI agents to fit businesses of all sizes.",
    icon: <HelpCircle className="w-5 h-5" />,
  },
  {
    id: "services-1",
    category: "Services & Solutions",
    question: "What kind of AI agents do you build?",
    answer:
      "We specialize in custom AI voice and chat agents. These can be used for 24/7 customer support, inbound/outbound sales calls, lead qualification, appointment setting, and more. Each agent is tailored to your specific business needs and workflows.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "services-2",
    category: "Services & Solutions",
    question: "Will the AI sound robotic or unnatural?",
    answer:
      "We leverage the latest advancements in natural language processing and voice technology to create highly realistic and conversational experiences that feel natural to your customers. Our AI agents communicate in a human-like manner that builds trust and engagement.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "services-3",
    category: "Services & Solutions",
    question: "Can your AI agents integrate with my existing tools?",
    answer:
      "Yes. Integration is a key part of our process. We connect our AI agents with your CRM, calendar, email, helpdesk, and other essential business platforms to ensure a seamless workflow and real-time data synchronization.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: "process-1",
    category: "Process & Pricing",
    question: "How does your 'Free Audit' work?",
    answer:
      "During the free audit, we'll have a consultation to understand your business processes, identify bottlenecks, and outline specific opportunities where AI automation can deliver the highest return on investment. We'll provide recommendations tailored to your needs.",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    id: "process-2",
    category: "Process & Pricing",
    question: "How long does it take to implement an AI solution?",
    answer:
      "The timeline varies depending on the complexity of the project. A simple chat agent might take a few weeks, while a more complex voice system integrated with multiple tools could take longer. We will provide a clear timeline and milestones after our initial assessment.",
    icon: <Cog className="w-5 h-5" />,
  },
  {
    id: "process-3",
    category: "Process & Pricing",
    question: "How is your pricing structured?",
    answer:
      "Our pricing is custom to each project, based on the scope of work, complexity of the AI agent, and the integrations required. We offer transparent pricing models with clear deliverables that we will discuss after understanding your specific needs.",
    icon: <DollarSign className="w-5 h-5" />,
  },
];

function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const categories = Array.from(new Set(faqData.map((faq) => faq.category)));

  return (
    <>
      {categories.map((category) => (
        <div key={category} className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            {category}
          </h3>
          <div className="space-y-3">
            {faqData
              .filter((faq) => faq.category === category)
              .map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left"
                >
                  <div className="flex items-start gap-4 p-6 rounded-lg border border-gray-200 bg-white hover:border-teal-400 transition group">
                    <div className="flex-shrink-0 text-teal-500 mt-1">
                      {faq.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition">
                        {faq.question}
                      </h4>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                        openId === faq.id ? "transform rotate-180" : ""
                      }`}
                    />
                  </div>

                  {/* Answer - Animated */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openId === faq.id ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="p-6 pt-0 bg-gray-50 border-x border-b border-gray-200 rounded-b-lg -mt-1">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default function FAQPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-gray-900 leading-tight">
            Got Questions? We've Got Answers
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our AI automation services, process, and how we can help your business grow.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50 to-blue-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-gray-900">
            Still have questions?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't hesitate to reach out. Our team is happy to answer any other questions you might have.
          </p>
          <a
            href="https://cal.com/abdul-rehman-lbwclo/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition transform hover:scale-105"
          >
            <Mail className="w-5 h-5" />
            Contact Us / Schedule a Call
          </a>
        </div>
      </section>
    </main>
  );
}
