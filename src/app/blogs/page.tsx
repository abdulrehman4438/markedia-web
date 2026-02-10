'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ScrollAnimationWrapper } from '@/components/ScrollAnimationWrapper'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  author: string
  tags: string[]
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'How AI Automation is Cutting Customer Acquisition Costs to Zero',
    excerpt: 'Discover how intelligent lead sourcing and qualification transforms your CAC from $50 to $0. Real case studies showing 300% improvement in warm leads.',
    category: 'AI Trends',
    date: 'February 8, 2026',
    readTime: '8 min read',
    author: 'Abdulrehman Ishaq',
    tags: ['AI', 'Lead Generation', 'Cost Reduction'],
    slug: 'ai-zero-cac',
  },
  {
    id: 2,
    title: 'The 5-Minute Rule: Why AI Voice Agents Win at Lead Conversion',
    excerpt: 'Learn why responding to leads within 5 minutes increases conversion by 400%. How AI voice agents guarantee instant responses 24/7.',
    category: 'How-To Guide',
    date: 'February 5, 2026',
    readTime: '6 min read',
    author: 'Abdulrehman Ishaq',
    tags: ['Voice Agents', 'Lead Conversion', 'Sales'],
    slug: 'five-minute-rule',
  },
  {
    id: 3,
    title: 'From Page 3 to Top 1: Using AI for Local SEO Domination',
    excerpt: 'Automated review management and AI-powered responses pushed this business from page 3 to the Google Maps pack. See how it works.',
    category: 'Case Study',
    date: 'February 1, 2026',
    readTime: '10 min read',
    author: 'Abdulrehman Ishaq',
    tags: ['Local SEO', 'Reviews', 'Google Maps'],
    slug: 'local-seo-ai',
  },
  {
    id: 4,
    title: 'N8N vs Make: Which Automation Platform Should You Choose?',
    excerpt: 'A detailed comparison of two industry-leading automation platforms. Learn the pros, cons, and which one fits your business needs.',
    category: 'Technology',
    date: 'January 28, 2026',
    readTime: '12 min read',
    author: 'Abdulrehman Ishaq',
    tags: ['N8N', 'Make.com', 'Automation'],
    slug: 'n8n-vs-make',
  },
  {
    id: 5,
    title: 'The Hidden Revenue in Unanswered Phone Calls',
    excerpt: 'Most businesses lose 30-40% of revenue to missed calls. Here\'s how AI voice receptionists capture that money without hiring staff.',
    category: 'Industry Insights',
    date: 'January 24, 2026',
    readTime: '7 min read',
    author: 'Abdulrehman Ishaq',
    tags: ['Voice Agents', 'Revenue', 'Customer Service'],
    slug: 'missed-calls-revenue',
  },
  {
    id: 6,
    title: 'Beyond ChatGPT: Advanced AI Prompt Engineering for Business Automation',
    excerpt: 'Master the art of prompt engineering to get better results from AI models. Techniques that increased accuracy by 85% in real implementations.',
    category: 'How-To Guide',
    date: 'January 20, 2026',
    readTime: '9 min read',
    author: 'Abdulrehman Ishaq',
    tags: ['AI', 'Prompt Engineering', 'GPT-4'],
    slug: 'prompt-engineering',
  },
]

const categories = ['All', 'AI Trends', 'Case Study', 'How-To Guide', 'Technology', 'Industry Insights']

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <div className="w-full max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center py-12 md:py-24 lg:py-32 px-4 sm:px-6">
          <ScrollAnimationWrapper>
            <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900">
              AI Automation <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">Insights & Guides</span>
            </h1>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Stay ahead of AI automation trends. Learn how to implement cutting-edge solutions, maximize ROI, and transform your business.
            </p>
          </ScrollAnimationWrapper>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8 md:py-12 px-4 sm:px-6 border-b border-gray-200">
          <ScrollAnimationWrapper>
            <div className="space-y-6">
              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search articles, topics, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-gray-200 focus:border-teal-600 focus:outline-none text-sm sm:text-base transition"
                />
                <svg className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Category Filter */}
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

              {/* Results Count */}
              <div className="text-center">
                <p className="text-sm sm:text-base text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredPosts.length}</span> of <span className="font-semibold text-gray-900">{blogPosts.length}</span> articles
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-20 px-4 sm:px-6">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredPosts.map((post) => (
                <ScrollAnimationWrapper key={post.id}>
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="group rounded-2xl border-2 border-gray-200 bg-white overflow-hidden hover:shadow-xl hover:border-teal-300 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                      {/* Category Badge */}
                      <div className="px-6 sm:px-8 pt-6 sm:pt-8">
                        <span className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-teal-100 text-teal-700 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-5">
                          {post.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex-1 flex flex-col">
                        {/* Title */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 leading-tight mb-3 sm:mb-4 group-hover:text-teal-600 transition">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                          {post.tags.map((tag, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs sm:text-sm font-medium">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Meta Info */}
                        <div className="border-t border-gray-200 pt-4 sm:pt-6">
                          <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5">
                            <span>{post.date}</span>
                            <span>{post.readTime}</span>
                          </div>
                          <p className="text-xs sm:text-sm font-semibold text-gray-700 mb-4">By {post.author}</p>
                          <button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-white transition transform hover:scale-105">
                            Read Article
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                </ScrollAnimationWrapper>
              ))}
            </div>
          ) : (
            <ScrollAnimationWrapper>
              <div className="text-center py-12">
                <svg className="w-16 h-16 mx-auto text-gray-300 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                </svg>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-sm sm:text-base text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            </ScrollAnimationWrapper>
          )}
        </section>

        {/* Newsletter CTA */}
        <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-r from-teal-50 to-emerald-50 border-t border-b border-teal-200">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollAnimationWrapper>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 sm:mb-6 text-gray-900">
                Stay Updated with <span className="text-teal-600">AI Automation Tips</span>
              </h2>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8">
                Get the latest insights, case studies, and automation strategies delivered to your inbox.
              </p>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-lg border-2 border-teal-200 focus:border-teal-600 focus:outline-none text-sm sm:text-base"
                />
                <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 px-6 sm:px-8 py-3 sm:py-4 font-semibold text-white transition transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </section>
      </div>
    </main>
  )
}
