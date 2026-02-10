import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Case Studies | AI Automation Success Stories | Markedia',
  description: 'Explore real AI automation case studies showing measurable results: lead generation, customer support, sales automation, and local SEO. From $0 CAC to 300% growth.',
  keywords: 'AI case studies, automation results, lead generation results, AI voice agent case study, business automation ROI, success stories',
  openGraph: {
    title: 'Case Studies | AI Automation Success Stories | Markedia',
    description: 'Real AI automation solutions delivering measurable results across industries.',
    url: 'https://markedia.com/case-studies',
    type: 'website',
    images: [
      {
        url: 'https://markedia.com/Markedia_logo_finale-removebg.png',
        width: 1200,
        height: 630,
        alt: 'Markedia Case Studies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Case Studies | AI Automation Success Stories | Markedia',
    description: 'Real AI automation solutions delivering measurable results.',
    images: ['https://markedia.com/Markedia_logo_finale-removebg.png'],
  },
  alternates: {
    canonical: 'https://markedia.com/case-studies',
  },
}

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
