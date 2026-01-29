import React from "react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { Calendar, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'Founder | Abdulrehman Ishaq | Markedia',
  description: 'Meet Abdulrehman Ishaq, founder of Markedia. AI consultant specializing in custom AI agents, voice automation, and business automation solutions.',
  keywords: 'Abdulrehman Ishaq, AI consultant, founder, AI expert, automation specialist',
  openGraph: {
    title: 'Founder | Abdulrehman Ishaq',
    description: 'AI Consultant & Founder of Markedia',
    url: 'https://markedia.com/about',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <div className="max-w-7xl mx-auto px-6">
        <FounderSection />
      </div>
    </main>
  );
}

function FounderSection() {
  return (
    <section id="founder" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-white flex items-center justify-center shadow-2xl">
            <Image
              src="/Abdulrehman Ishaq founder of Markedia.jpeg"
              alt="Abdulrehman Ishaq"
              width={400}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Hi, I'm <span className="text-gray-900">Abdulrehman Ishaq</span> — <span className="text-teal-500">AI Consultant</span>
          </h2>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I'm passionate about solving real-world problems through AI and sharing knowledge with the world. Let's build something amazing together!
          </p>

          <h3 className="text-xl font-bold mb-6">I specialize in:</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">AI Voice Agents</p>
                <p className="text-sm text-gray-600">24/7 automated customer interaction</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Chat Automation</p>
                <p className="text-sm text-gray-600">Intelligent conversational AI</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Lead Generation</p>
                <p className="text-sm text-gray-600">Automated outreach & qualification</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Business Automation</p>
                <p className="text-sm text-gray-600">Custom AI workflow solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">AI Integration & Chatbot Development</p>
                <p className="text-sm text-gray-600">End-to-end AI solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Database Design</p>
                <p className="text-sm text-gray-600">MongoDB, PostgreSQL & more</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Generative AI</p>
                <p className="text-sm text-gray-600">LLM-powered applications</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">SaaS Development & Architecture</p>
                <p className="text-sm text-gray-600">Scalable product design</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">AI Consulting</p>
                <p className="text-sm text-gray-600">Strategic AI implementation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Cloud Services</p>
                <p className="text-sm text-gray-600">AWS, GCP & cloud architecture</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={20} className="text-teal-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-gray-900">Community Building & Management</p>
                <p className="text-sm text-gray-600">Growing engaged communities</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 px-6 py-3 text-base font-semibold text-white transition"
            >
              View Services
            </a>

            <a
              href="https://cal.com/abdul-rehman-lbwclo/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 text-base font-semibold text-gray-900 hover:border-teal-600 hover:bg-teal-50 transition"
            >
              <Calendar size={18} />
              Book Meeting
            </a>

            <a
              href="https://www.youtube.com/@theautomation_guy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-gray-300 px-6 py-3 text-base font-semibold text-gray-900 hover:border-teal-600 hover:bg-teal-50 transition"
            >
              View Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
