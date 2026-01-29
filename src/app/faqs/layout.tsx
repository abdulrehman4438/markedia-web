import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Markedia - AI Automation Questions Answered',
  description: 'Frequently asked questions about Markedia\'s AI automation services, pricing, implementation, and more. Get answers to common questions.',
  keywords: 'FAQ, AI automation questions, pricing, implementation, support',
  openGraph: {
    title: 'FAQs | Markedia',
    description: 'Got Questions? We\'ve Got Answers',
    url: 'https://markedia.com/faqs',
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
