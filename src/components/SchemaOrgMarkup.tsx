import { ReactNode } from 'react';

export const SchemaOrgMarkup = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Markedia',
    url: 'https://markedia.com',
    logo: 'https://markedia.com/Markedia_logo_finale-removebg.png',
    description: 'AI Automation Agency specializing in custom AI voice agents and chat automation for 24/7 customer support, lead generation, and sales automation.',
    foundingDate: '2024',
    founder: {
      '@type': 'Person',
      name: 'Abdulrehman Ishaq',
      url: 'https://markedia.com/about',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'Business Sales',
      email: 'hello@markedia.com',
      areaServed: 'Worldwide',
    },
    sameAs: [
      'https://www.linkedin.com/company/markedia',
      'https://twitter.com/markedia',
      'https://youtube.com/@theautomation_guy',
    ],
    knowsAbout: [
      'AI Automation',
      'Voice Agents',
      'Chat Automation',
      'Customer Support',
      'Lead Generation',
      'Business Automation',
      'N8N Workflows',
      'Make.com Automation',
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Markedia',
    image: 'https://markedia.com/Markedia_logo_finale-removebg.png',
    description: 'Custom AI agents for business automation',
    url: 'https://markedia.com',
    telephone: '+1-XXX-XXX-XXXX',
    email: 'hello@markedia.com',
    areaServed: 'Worldwide',
    hasOfferingDetails: [
      {
        '@type': 'Offer',
        name: 'AI Voice Receptionist',
        description: 'Seamless voice agents that answer calls, qualify leads and route customers — available 24/7.',
        url: 'https://markedia.com/services',
      },
      {
        '@type': 'Offer',
        name: 'Chat Automation',
        description: 'Conversational chat agents that handle support, answer FAQs and push prospects down the funnel.',
        url: 'https://markedia.com/services',
      },
      {
        '@type': 'Offer',
        name: 'Lead Generation',
        description: 'Automated outreach and qualification that delivers qualified leads straight to your CRM.',
        url: 'https://markedia.com/services',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};
