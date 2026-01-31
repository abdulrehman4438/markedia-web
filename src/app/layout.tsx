
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { ClientLayout } from './client-layout'
import { SchemaOrgMarkup } from '@/components/SchemaOrgMarkup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AI Automation Agency | Voice & Chat Agents | Markedia',
  description: 'Custom AI voice agents & chat automation for 24/7 customer support, lead generation & sales. Custom AI solutions for businesses. Free audit available.',
  keywords: 'AI automation agency, AI voice agent, chat automation, customer support automation, lead generation AI, business automation',
  authors: [
    {
      name: 'Abdulrehman Ishaq',
      url: 'https://markedia.com/about',
    },
  ],
  creator: 'Markedia',
  publisher: 'Markedia',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  openGraph: {
    title: 'AI Automation Agency | Voice & Chat Agents | Markedia',
    description: 'Custom AI voice agents & chat automation for 24/7 customer support, lead generation & sales. Automating businesses with intelligent AI agents.',
    url: 'https://markedia.com',
    siteName: 'Markedia',
    images: [
      {
        url: 'https://markedia.com/Markedia_logo_finale-removebg.png',
        width: 1200,
        height: 630,
        alt: 'Markedia - AI Automation Agency',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency | Markedia',
    description: 'Custom AI voice agents & chat automation for 24/7 customer support and lead generation.',
    images: ['https://markedia.com/Markedia_logo_finale-removebg.png'],
    creator: '@markedia',
  },
  alternates: {
    canonical: 'https://markedia.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <SchemaOrgMarkup />
        <meta name="google-site-verification" content="SNm3vRz4AI4SU_NIqymsotwY0ZJcGnRgdjSld" />
        <link rel="canonical" href="https://markedia.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
      </head>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <SpeedInsights />
      </body>
    </html>
  )
}