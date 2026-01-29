"use client";

import Link from "next/link";
import { Calendar, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function NavbarComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/40 backdrop-blur-xl border-b border-gray-300/30 py-2" 
        : "bg-white/20 backdrop-blur-md border-b border-gray-300/20 py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? "py-2" : "py-3"
        }`}>
          {/* Left: Logo */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-3">
              <img 
                src="/Markedia_logo_finale-removebg.png" 
                alt="Markedia Logo"
                className="h-8 sm:h-10 w-auto object-contain"
              />
              <span className="font-bold text-base sm:text-lg tracking-tight text-gray-900 hidden xs:inline-block">Markedia</span>
            </Link>
          </div>

          {/* Center: Nav (Hidden on mobile, visible on lg+) - Absolutely Centered */}
          <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 justify-center items-center space-x-6 text-sm text-gray-700">
            {!isHomePage && (
              <Link href="/" className="hover:text-gray-900 transition">
                Home
              </Link>
            )}
            <Link href="/services" className="hover:text-gray-900 transition">
              Services
            </Link>
            <Link href="/about-us" className="hover:text-gray-900 transition">
              About Us
            </Link>
            <Link 
              href="/about" 
              className="hover:text-gray-900 transition"
            >
              Founder
            </Link>
            <Link href="/faqs" className="hover:text-gray-900 transition">
              FAQs
            </Link>
            <Link 
              href={isHomePage ? "#contact" : "/#contact"} 
              className="hover:text-gray-900 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Right: CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-4 ml-auto">
            {/* Desktop CTA Button */}
            <a
              href="https://cal.com/abdul-rehman-lbwclo/30min"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1 sm:gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg transition duration-300 whitespace-nowrap"
            >
              <Calendar size={14} className="hidden sm:block" />
              <span className="hidden sm:inline">Schedule Call</span>
              <span className="sm:hidden">Book</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-gray-400 hover:border-gray-500 text-gray-700 hover:text-gray-900 transition"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-300/30 pt-4">
            <div className="flex flex-col space-y-3">
              {!isHomePage && (
                <Link 
                  href="/" 
                  className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition text-sm"
                >
                  Home
                </Link>
              )}
              <Link 
                href="/services" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition text-sm"
              >
                Services
              </Link>
              <Link 
                href="/about-us" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition text-sm"
              >
                About Us
              </Link>
              <Link 
                href="/about" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition text-sm"
              >
                Founder
              </Link>
              <Link 
                href="/faqs" 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition text-sm"
              >
                FAQs
              </Link>
              <Link 
                href={isHomePage ? "#contact" : "/#contact"} 
                className="px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition text-sm"
              >
                Contact
              </Link>
              <a
                href="https://cal.com/abdul-rehman-lbwclo/30min"
                target="_blank"
                rel="noreferrer"
                className="mx-4 mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-lg transition duration-300"
              >
                <Calendar size={16} />
                Schedule a Call
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
