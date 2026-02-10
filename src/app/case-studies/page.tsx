'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper'

interface CaseStudy {
  id: number
  title: string
  client: string
  category: string
  mission: string
  problem: string
  solution: string
  transformation: string
  result: string
  metrics: {
    label: string
    value: string
  }[]
  technologies: string[]
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: 'The Reddit Extraction Engine',
    client: 'B2B SaaS & Service Agencies',
    category: 'Lead Generation',
    mission: 'Turn 500 million monthly active users into a private lead pool.',
    problem: 'Most agencies are stuck spending $50/click on Google Ads or sending 1,000 cold emails that go straight to spam. They are fighting for crumbs in a crowded room.',
    solution: 'Built a "Digital Ear" using n8n and GPT-4o. Instead of screaming at people to buy, the system listens for people who are already crying for help. It monitors subreddits for high-intent keywords, qualifies the user\'s "pain level," and delivers the lead to the sales team on a silver platter.',
    transformation: 'From Chasing to Choosing. The business stopped begging for attention and started entering conversations that were already happening.',
    result: '$0 customer acquisition cost (CAC) and a 300% increase in "Warm" outbound opportunities.',
    metrics: [
      { label: 'CAC Reduction', value: '$0' },
      { label: 'Warm Leads', value: '+300%' },
      { label: 'Cost Per Lead', value: 'Free' },
    ],
    technologies: ['n8n', 'GPT-4o', 'Reddit API'],
  },
  {
    id: 2,
    title: 'The Hafiz Sweets "Auto-Pilot" Cashier',
    client: 'High-Volume Retail & Food Establishments',
    category: 'Customer Support',
    mission: 'Capture the 40% of revenue lost to missed phone calls.',
    problem: 'During the holiday rush, the shop was so packed that the phone would ring off the hook. Every unanswered call was a customer ordering from a competitor. The owner couldn\'t hire fast enough, and humans get tired. AI doesn\'t.',
    solution: 'Deployed a Custom AI Voice Receptionist integrated via VAPI. This wasn\'t a "press 1 for sales" menu. It was a fluent, intelligent agent that understood the menu, calculated prices, and took orders directly into the system.',
    transformation: 'From Chaos to Clockwork. The staff focused on packing boxes; the AI focused on selling them. 10 people could call at once, and all 10 were greeted instantly.',
    result: 'A 30% revenue "found" in the first month by simply answering the phone.',
    metrics: [
      { label: 'Revenue Increase', value: '+30%' },
      { label: 'Concurrent Calls', value: '10+' },
      { label: 'Response Time', value: 'Instant' },
    ],
    technologies: ['VAPI', 'AI Voice Agent', 'POS Integration'],
  },
  {
    id: 3,
    title: 'The "Speed to Lead" Solar Framework',
    client: 'High-Ticket Home Service Contractors',
    category: 'Sales Automation',
    mission: 'Kill the "Response Gap" and 4x appointment rates.',
    problem: 'If you don\'t talk to a Facebook lead within 5 minutes, the chance of closing them drops by 400%. This client was paying for premium leads but waiting 4 hours to call them. By then, the lead was back to watching Netflix and had forgotten why they clicked the ad.',
    solution: 'Built an Instant Gratification Workflow. Using n8n and WhatsApp, we triggered a personalized AI conversation the millisecond the "Submit" button was hit. The AI qualified the lead\'s roof type and booked them directly onto the salesperson\'s calendar.',
    transformation: 'From "I\'ll call you later" to "You\'re booked for tomorrow."',
    result: 'Appointment rates jumped from 15% to 62% without spending an extra penny on ads.',
    metrics: [
      { label: 'Appointment Rate', value: '15% → 62%' },
      { label: 'Lead Response', value: '<1 minute' },
      { label: 'Additional Ad Spend', value: '$0' },
    ],
    technologies: ['n8n', 'WhatsApp API', 'Facebook Leads'],
  },
  {
    id: 4,
    title: 'The "Local Authority" Reputation Shield',
    client: 'Local Hospitality & Service Brick-and-Mortars',
    category: 'Local SEO',
    mission: 'Weaponize Google Reviews to dominate the local "Map Pack."',
    problem: 'Only the angry people took the time to write reviews. A 3.8-star rating is a death sentence in local SEO. They were invisible on Google Maps.',
    solution: 'Automated Active Reputation Management. Connected their POS to an AI engine that solicited reviews from happy customers and used GPT-4 to respond to every single review—positive or negative—using SEO-rich keywords.',
    transformation: 'From Invisible to Inescapable. Every reply told Google\'s algorithm that this business was active, caring, and relevant.',
    result: 'Moved from page 3 to the Top 1 "Map Pack" in 90 days. Organic foot traffic increased by 25% simply because they looked like the best option in town.',
    metrics: [
      { label: 'Ranking Position', value: 'Page 3 → Top 1' },
      { label: 'Organic Traffic', value: '+25%' },
      { label: 'Timeline', value: '90 days' },
    ],
    technologies: ['POS Integration', 'GPT-4', 'Google My Business API'],
  },
]

const categories = ['All', 'Lead Generation', 'Customer Support', 'Sales Automation', 'Local SEO']

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredCaseStudies = selectedCategory === 'All'
    ? caseStudies
    : caseStudies.filter(cs => cs.category === selectedCategory)

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-12 md:py-24 lg:py-32 px-4 sm:px-6">
          <ScrollAnimationWrapper>
            <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900">
              Real Results from <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">AI Automation</span>
            </h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              See how our custom AI agents transformed businesses across industries. From zero acquisition costs to 300% growth, these aren't theoretical—they're real transformations.
            </p>
          </ScrollAnimationWrapper>
        </section>

        {/* Filter Section */}
        <section className="py-8 md:py-12 px-4 sm:px-6 border-b border-gray-200">
          <ScrollAnimationWrapper>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                    selectedCategory === category
                      ? 'bg-teal-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollAnimationWrapper>
        </section>

        {/* Case Studies Grid */}
        <section className="py-12 md:py-20 px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <ScrollAnimationWrapper key={caseStudy.id}>
                <div className="group rounded-2xl border-2 border-gray-200 bg-white p-6 sm:p-8 hover:shadow-xl hover:border-teal-300 transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-start justify-between gap-3 mb-3 sm:mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 leading-tight mb-2">
                          {caseStudy.title}
                        </h3>
                        <p className="text-sm sm:text-base text-teal-600 font-semibold">{caseStudy.client}</p>
                      </div>
                      <span className="flex-shrink-0 px-3 sm:px-4 py-1 sm:py-2 bg-teal-100 text-teal-700 rounded-full text-xs sm:text-sm font-semibold">
                        {caseStudy.category}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 italic">{caseStudy.mission}</p>
                  </div>

                  {/* Problem, Solution, Transformation */}
                  <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
                    <div>
                      <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">The Problem</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{caseStudy.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">The Solution</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{caseStudy.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">The Transformation</h4>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">{caseStudy.transformation}</p>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 py-4 sm:py-6 border-t border-b border-gray-200">
                    {caseStudy.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg sm:text-2xl md:text-3xl font-black text-teal-600 mb-1">{metric.value}</div>
                        <div className="text-xs sm:text-sm text-gray-600">{metric.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Result */}
                  <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 sm:p-5 mb-6 sm:mb-8 border border-teal-200">
                    <p className="text-sm sm:text-base font-semibold text-gray-900">
                      <span className="text-teal-600">Result: </span>
                      {caseStudy.result}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 sm:mb-8">
                    <h4 className="text-xs sm:text-sm font-bold text-gray-700 mb-3 uppercase tracking-wide">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Link
                    href="https://cal.com/abdul-rehman-lbwclo/30min"
                    target="_blank"
                    className="inline-flex items-center gap-2 w-full justify-center rounded-lg bg-teal-600 hover:bg-teal-700 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition transform hover:scale-105"
                  >
                    Similar Solution for Your Business
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-teal-50 to-emerald-50 border-t border-b border-teal-200">
          <div className="text-center max-w-3xl mx-auto">
            <ScrollAnimationWrapper>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900">
                Ready to Be Our Next <span className="text-teal-600">Success Story?</span>
              </h2>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 sm:mb-10">
                Let's discuss how AI automation can transform your business operations and deliver measurable results.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="https://cal.com/abdul-rehman-lbwclo/30min"
                  target="_blank"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg transition transform hover:scale-105"
                >
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold hover:bg-teal-50 transition"
                >
                  Explore Services
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </div>
    </main>
  )
}
