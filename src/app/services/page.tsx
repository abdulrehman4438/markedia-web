import React from "react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import {
  Linkedin,
  Twitter,
  Mail,
  Calendar,
  Headphones,
  MessageSquare,
  Code2,
  Cpu,
  Lightbulb,
  Search,
} from "lucide-react";

export const metadata: Metadata = {
  title: 'AI Services | Voice Agents, Chat Automation & More | Markedia',
  description: 'Explore our AI services: AI voice agents, chat automation, lead generation, N8N workflows, SaaS development, and AI consultancy. Custom solutions for your business.',
  keywords: 'AI services, voice agent, chat automation, N8N workflows, lead generation, SaaS development, AI consultancy',
  openGraph: {
    title: 'AI Services | Markedia',
    description: 'Custom AI solutions for your business',
    url: 'https://markedia.com/services',
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Conversational AI Agents",
      description:
        "We build human-like AI voice receptionists that handle inbound calls, qualify leads, and book appointments 24/7, ensuring you never miss an opportunity.",
      icon: Headphones,
      category: "AI Solutions",
      image: "/Conversational Ai.png",
    },
    {
      id: 2,
      title: "Intelligent Chatbots",
      description:
        "Deploy smart, AI-powered chatbots on your website or app to answer instant FAQs, guide visitors, and automate customer support workflows around the clock.",
      icon: MessageSquare,
      category: "AI Solutions",
      image: "/Ai chatbot.png",
    },
    {
      id: 3,
      title: "Full-Stack SaaS Development",
      description:
        "From concept to launch, we build scalable, secure, and robust Software-as-a-Service platforms tailored to your unique business models using modern tech stacks.",
      icon: Code2,
      category: "Development",
      image: "/Full stack SAAS.png",
    },
    {
      id: 4,
      title: "Custom AI Solutions",
      description:
        "Facing a unique challenge? We develop bespoke AI tools designed specifically to automate your complex workflows and solve specific business bottlenecks.",
      icon: Cpu,
      category: "AI Solutions",
      image: "/Custom Ai solutions.png",
    },
    {
      id: 5,
      title: "AI Consultancy & Strategy",
      description:
        "Unsure how AI fits your business? We provide strategic guidance and roadmaps to help you integrate AI effectively and gain a competitive advantage.",
      icon: Lightbulb,
      category: "Consulting",
      image: "/Ai consultancy.png",
    },
  ];

  const categories = ["All Categories", "AI Solutions", "Development", "Consulting"];

  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header Section */}
        <section className="py-12 md:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6 text-gray-900">Professional Services</h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, I offer comprehensive digital solutions to help bring
            your ideas to life. Browse my services and find the perfect fit for your project.
          </p>
        </section>

        {/* Search & Filter Section */}
        <section className="py-6 sm:py-8 mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 sm:left-4 top-2.5 sm:top-3.5 text-gray-600" size={18} />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 text-sm sm:text-base rounded-lg bg-gray-100 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-teal-500 transition"
              />
            </div>
            <button className="px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg border border-teal-500 text-teal-600 font-semibold hover:bg-teal-50 transition flex items-center justify-center gap-2 w-full sm:w-auto">
              🔽 <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition ${
                  index === 0
                    ? "bg-teal-600 text-white"
                    : "bg-gray-100 border border-gray-300 text-gray-700 hover:border-teal-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <p className="text-xs sm:text-sm md:text-base text-gray-600 mt-4 sm:mt-6">5 services found</p>
        </section>

        {/* Services Grid */}
        <section className="pb-12 md:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <ServiceCard key={service.id} service={service} icon={IconComponent} />
              );
            })}
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    category: string;
    image?: string;
  };
  icon: React.ComponentType<{ size: number }>;
}

function ServiceCard({ service, icon: IconComponent }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden hover:border-teal-300 transition group shadow-sm flex flex-col h-full">
      {/* Image Section */}
      <div className="h-32 sm:h-40 md:h-48 bg-gray-100 flex items-center justify-center overflow-hidden relative flex-shrink-0">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover w-full h-full group-hover:scale-105 transition duration-300"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/15 transition" />
            <div className="text-4xl sm:text-5xl md:text-6xl opacity-20 group-hover:opacity-30 transition">
              <IconComponent size={60} />
            </div>
          </>
        )}
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-3 sm:mb-4">
          <p className="text-xs sm:text-sm text-teal-600 font-semibold mb-1 sm:mb-2">{service.category}</p>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 flex-grow">{service.description}</p>

        {/* CTA Button */}
        <a
          href="https://cal.com/abdul-rehman-lbwclo/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-base font-semibold transition w-full sm:w-auto"
        >
          Schedule Call
        </a>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="py-8 sm:py-12 md:py-16 border-t border-gray-200 mt-8 sm:mt-12 bg-white px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <Image
                src="/Markedia_logo_finale-removebg.png"
                alt="Markedia Logo"
                width={40}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm text-gray-600">Automating businesses with intelligent AI agents.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-gray-900">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-teal-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-teal-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#founder" className="hover:text-teal-600 transition">
                  About
                </Link>
              </li>
              <li>
                <a href="mailto:hello@markedia.com" className="hover:text-teal-600 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base text-gray-900 dark:text-white">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition">
                  AI Voice Agents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition">
                  Chatbots
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-600 dark:hover:text-teal-400 transition">
                  AI Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-900 dark:text-white">Connect</h3>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>

              <a
                href="mailto:hello@markedia.com"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-600 dark:text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Markedia. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-900 dark:text-white">Follow us:</span>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.846-14.603c-.798 0-1.432.634-1.432 1.432 0 .798.634 1.431 1.432 1.431.798 0 1.431-.633 1.431-1.431 0-.798-.633-1.432-1.431-1.432z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
