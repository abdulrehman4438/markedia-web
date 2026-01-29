import React from "react";
import type { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";
import { Mail, Calendar, Zap, Users, Sparkles, Target, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: 'About Us | Markedia - AI Automation Agency',
  description: 'Learn about Markedia: Our mission, vision, and commitment to delivering custom AI solutions that automate business operations and drive growth.',
  keywords: 'about Markedia, AI automation company, business automation, AI mission',
  openGraph: {
    title: 'About Markedia',
    description: 'Pioneering the Future of Business with Intelligent AI',
    url: 'https://markedia.com/about-us',
  },
};

export default function AboutUsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-32 md:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight">
            Pioneering the Future of Business with Intelligent 
            <span className="bg-gradient-to-r from-teal-500 via-blue-500 to-purple-600 bg-clip-text text-transparent"> AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            At Markedia, we believe in the power of automation to unlock human potential. We build custom AI solutions that handle the repetitive, so you can focus on the strategic.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-8 text-gray-900">
              Automating Growth, <span className="text-teal-500">Empowering Teams</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6 max-w-3xl">
              Our mission is simple: to help businesses scale efficiently without scaling their headcount. We don't just build bots; we create intelligent AI agents that seamlessly integrate into your workflows, providing 24/7 sales and support capabilities. We are dedicated to transforming how businesses operate by making advanced AI technology accessible and practical.
            </p>
          </div>

          {/* What We Do */}
          <div className="mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-900">
              Your Partner in <span className="text-teal-500">AI-Driven Automation</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl">
              We specialize in developing cutting-edge AI voice and chat agents tailored to your specific business needs.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-teal-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 p-3 bg-teal-100 rounded-lg">
                    <Sparkles className="w-7 h-7 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Custom AI Agents</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build solutions that understand your business, your products, and your customers with precision and intelligence.
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-teal-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 p-3 bg-teal-100 rounded-lg">
                    <Zap className="w-7 h-7 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">24/7 Sales & Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our agents never sleep, ensuring your customers get instant responses and your sales pipeline is always active.
                </p>
              </div>

              <div className="group p-8 rounded-2xl border border-gray-200 bg-white hover:border-teal-400 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0 p-3 bg-teal-100 rounded-lg">
                    <Users className="w-7 h-7 text-teal-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Seamless Integration</h3>
                <p className="text-gray-600 leading-relaxed">
                  We connect our AI solutions with your existing CRM, helpdesk, and other tools for a unified workflow.
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Us */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-12 text-gray-900">
              Built for <span className="text-teal-500">Scalability and Performance</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50 hover:border-teal-400 transition">
                <div className="flex-shrink-0 pt-1">
                  <CheckCircle className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Tailored Solutions</h3>
                  <p className="text-gray-600">
                    No cookie-cutter bots. We design AI agents that fit your unique processes and business requirements.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50 hover:border-teal-400 transition">
                <div className="flex-shrink-0 pt-1">
                  <CheckCircle className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Expertise in AI</h3>
                  <p className="text-gray-600">
                    Our team stays ahead of the curve, leveraging the latest advancements in LLMs and automation technologies.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50 hover:border-teal-400 transition">
                <div className="flex-shrink-0 pt-1">
                  <CheckCircle className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Focus on ROI</h3>
                  <p className="text-gray-600">
                    We build solutions designed to reduce costs, increase efficiency, and drive tangible business results.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-gray-50 hover:border-teal-400 transition">
                <div className="flex-shrink-0 pt-1">
                  <CheckCircle className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dedicated Partnership</h3>
                  <p className="text-gray-600">
                    We don't just deliver a product; we partner with you to ensure ongoing success and continuous optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500/10 via-blue-500/10 to-purple-600/10 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how Markedia can help you automate your operations and accelerate your growth.
          </p>
          <a
            href="https://cal.com/abdul-rehman-lbwclo/30min"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold rounded-lg transition transform hover:scale-105 shadow-lg"
          >
            <Calendar className="w-5 h-5" />
            Book a Free Audit
          </a>
        </div>
      </section>
    </main>
  );
}
