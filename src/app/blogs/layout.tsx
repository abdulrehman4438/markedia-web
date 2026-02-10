import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | AI Automation Insights & Guides | Markedia',
  description: 'Discover AI automation tips, case studies, and industry insights. Learn about lead generation, voice agents, N8N workflows, and business automation strategies.',
  keywords: 'AI blog, automation guides, lead generation tips, voice agents, N8N workflows, business automation, industry insights',
  openGraph: {
    title: 'Blog | AI Automation Insights & Guides | Markedia',
    description: 'Stay updated with the latest AI automation insights, tips, and case studies.',
    url: 'https://markedia.com/blogs',
    type: 'website',
    images: [
      {
        url: 'https://markedia.com/Markedia_logo_finale-removebg.png',
        width: 1200,
        height: 630,
        alt: 'Markedia Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | AI Automation Insights & Guides | Markedia',
    description: 'AI automation tips and insights for modern businesses.',
    images: ['https://markedia.com/Markedia_logo_finale-removebg.png'],
  },
  alternates: {
    canonical: 'https://markedia.com/blogs',
  },
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
