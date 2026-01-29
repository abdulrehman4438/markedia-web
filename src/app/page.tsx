"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";
import {
  Linkedin,
  Twitter,
  Mail,
  Calendar,
  Phone,
  MessageSquare,
  Headphones,
  Users,
  CheckCircle,
  ArrowRight,
  Brain,
  Zap,
  Moon,
  Sun,
} from "lucide-react";
import { 
  FaReact,
  FaNode,
  FaPython,
  FaAws,
  FaGoogle,
  FaWhatsapp,
  FaGithub
} from "react-icons/fa6";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased">
      <div className="w-full max-w-7xl mx-auto">
        <Hero />

        <Workflows />

        <Stats />

        <Demos />

        <TechStack />
      </div>

      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="flex flex-col items-center text-center py-12 md:py-24 lg:py-32 px-4 sm:px-6">
      <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900">
        Automating Your Business with{" "}
        <span className="bg-gradient-to-r from-teal-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
          Intelligent AI Agents
        </span>
      </h1>

      <p className="mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
        We build custom AI voice and chat agents to handle your sales and support 24/7. Scale your business without scaling your team.
      </p>

      <div className="mt-6 sm:mt-10 flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
        <a
          href="https://cal.com/abdul-rehman-lbwclo/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition transform hover:scale-105 w-full xs:w-auto"
        >
          <Calendar size={16} className="sm:size-5" />
          <span>Book a Free Audit</span>
        </a>

        <Link
          href="/services"
          className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-teal-600 text-teal-600 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold hover:bg-teal-50 transition w-full xs:w-auto"
        >
          View Our Services
          <ArrowRight size={16} className="sm:size-5" />
        </Link>
      </div>
    </section>
  );
}

function StatusBanner() {
  return (
    <div className="flex justify-center mt-6 mb-8">
      <Link href="#contact" className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-gray-100/50 px-4 py-2 text-sm text-gray-700 hover:border-gray-400 transition">
        <Zap size={14} className="text-teal-500" />
        Available for New Opportunities
        <ArrowRight size={14} />
      </Link>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-20">
      <h2 className="text-3xl md:text-4xl font-black mb-12 text-center text-gray-900">Our Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ScrollAnimationWrapper>
          <ServiceCard
            title="AI Voice Receptionist"
            description="Seamless voice agents that answer calls, qualify leads and route customers — available 24/7."
            icon={<Headphones size={24} />}
          />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ServiceCard
            title="Chat Automation"
            description="Conversational chat agents that handle support, answer FAQs and push prospects down the funnel."
            icon={<MessageSquare size={24} />}
          />
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>
          <ServiceCard
            title="Lead Generation"
            description="Automated outreach and qualification that delivers qualified leads straight to your CRM."
            icon={<Users size={24} />}
          />
        </ScrollAnimationWrapper>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <article className="group rounded-2xl border border-gray-200 bg-white hover:border-teal-300 p-8 transition duration-300 shadow-sm">
      <div className="rounded-xl bg-gradient-to-br from-teal-600 to-emerald-600 p-4 w-fit mb-4 group-hover:from-teal-700 group-hover:to-cyan-600 transition">
        <div className="text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>

      <a
        href="mailto:hello@markedia.com?subject=Service%20Inquiry"
        className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition"
      >
        Get Started
        <ArrowRight size={16} />
      </a>
    </article>
  );
}

function Demos() {
  const demos = [
    {
      id: 1,
      title: "Med Spa Inbound Calling Agent",
      scenario: "Handling appointment bookings and customer inquiries for a medical spa",
      outcome: "Professional greeting, appointment scheduled, customer information captured",
      audioFile: "/Med Spa inbound calling agent.mp3",
      borderColor: "border-blue-400",
      icon: "🏥",
    },
    {
      id: 2,
      title: "Glow Clinic Outbound Calling Agent",
      scenario: "Proactive outreach for appointment reminders and follow-ups",
      outcome: "Appointment confirmed, customer engaged, follow-up scheduled",
      audioFile: "/Glow Clinic Outbound call.mp3",
      borderColor: "border-orange-400",
      icon: "✨",
    },
    {
      id: 3,
      title: "Real Estate AI Receptionist",
      scenario: "Property inquiries, showing scheduling, and lead qualification",
      outcome: "Property details shared, showing booked, lead captured in CRM",
      audioFile: "/Ai agent for real estate.mp3",
      borderColor: "border-purple-400",
      icon: "🏠",
    },
    {
      id: 4,
      title: "Vet Clinic AI Agent",
      scenario: "Pet appointment scheduling and emergency triage support",
      outcome: "Appointment set, pet information recorded, emergency protocols followed",
      audioFile: "/Vet Clinic Ai agent.mp3",
      borderColor: "border-pink-400",
      icon: "🐾",
    },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4 text-gray-900">Hear It In Action</h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Listen to real AI voice agent conversations from businesses like yours
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {demos.map((demo) => (
          <div
            key={demo.id}
            className={`rounded-2xl border-2 ${demo.borderColor} bg-white p-4 sm:p-8 hover:shadow-lg transition shadow-sm`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-2">
                  <span className="text-xl sm:text-2xl flex-shrink-0">{demo.icon}</span>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 break-words">{demo.title}</h3>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  <p className="mb-2 sm:mb-3">
                    <span className="font-semibold text-gray-900">Scenario:</span> {demo.scenario}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-900">Outcome:</span>{" "}
                    <span className="text-teal-600">{demo.outcome}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Audio Player */}
            <div className="mt-4 sm:mt-6">
              <audio
                controls
                className="w-full h-8 sm:h-10 rounded-lg"
                style={{
                  accentColor: demo.borderColor === "border-blue-400" ? "#0d9488" : 
                               demo.borderColor === "border-orange-400" ? "#f97316" :
                               demo.borderColor === "border-purple-400" ? "#0d9488" : "#0d9488"
                }}
              >
                <source src={demo.audioFile} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-4 sm:mb-6">
          Want to hear your AI agent in action?
        </p>
        <a
          href="mailto:hello@markedia.com?subject=AI%20Voice%20Agent%20Demo%20Request"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition"
        >
          <Calendar size={16} className="sm:size-5" />
          Schedule Your Demo Call
        </a>
      </div>
    </section>
  );
}

function Workflows() {
  const workflows = [
    {
      id: 1,
      title: "AI Voice Receptionist for Med Spa",
      image: "/Ai voice receptionist for Med Spa.png",
      description: "Automated appointment scheduling and customer inquiry handling"
    },
    {
      id: 2,
      title: "Outbound Calling Agent for Recruiters",
      image: "/Outbound Calling Agent for Recruiters.png",
      description: "Proactive outreach and candidate qualification"
    },
    {
      id: 3,
      title: "Generate Animated Human Videos",
      image: "/Generate animated human videos from images & audio with Bytedance.png",
      description: "AI-powered video generation from images and audio"
    },
  ];

  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [autoPlay, setAutoPlay] = React.useState(true);

  // Auto-slide every 3 seconds
  React.useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % workflows.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [autoPlay, workflows.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workflows.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + workflows.length) % workflows.length);
    setAutoPlay(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
          N8N Workflows & <span className="text-teal-500">Automation</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Sophisticated automation workflows powering AI agents and business processes
        </p>
      </div>

      {/* MacBook Container - hidden on mobile, visible on md+ */}
      <div className="hidden md:flex justify-center">
        <div className="relative w-full max-w-4xl">
          {/* MacBook Frame */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* MacBook Top Bezel */}
            <div className="h-8 bg-gray-100 flex items-center justify-between px-6">
              <div className="w-16" />
              <div className="text-xs text-gray-500">Markedia Workflows</div>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <div className="w-2 h-2 rounded-full bg-gray-400" />
                <div className="w-2 h-2 rounded-full bg-gray-400" />
              </div>
            </div>

            {/* Screen Content */}
            <div className="relative bg-white overflow-hidden">
              <div className="relative h-96 md:h-[480px] bg-gray-50 flex items-center justify-center">
                {/* Slide Counter */}
                <div className="absolute top-6 left-6 z-10 bg-gray-200/80 px-4 py-2 rounded-full text-sm font-semibold text-gray-900">
                  {currentSlide + 1} / {workflows.length}
                </div>

                {/* Auto-play Toggle */}
                <button
                  onClick={toggleAutoPlay}
                  className="absolute top-6 right-6 z-10 px-3 py-1 rounded-full bg-gray-200/80 hover:bg-gray-300 text-xs font-semibold text-gray-900 transition flex items-center gap-2"
                  title={autoPlay ? "Click to pause" : "Click to play"}
                >
                  {autoPlay ? "⏸ Auto" : "▶ Manual"}
                </button>

                {/* Carousel Images */}
                <div className="relative w-full h-full overflow-hidden">
                  {workflows.map((workflow, index) => (
                    <div
                      key={workflow.id}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={workflow.image}
                        alt={workflow.title}
                        fill
                        className="object-cover"
                        priority={index === currentSlide}
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-200/80 hover:bg-gray-300 flex items-center justify-center text-gray-900 transition text-xl"
                  aria-label="Previous slide"
                >
                  ←
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-gray-200/80 hover:bg-gray-300 flex items-center justify-center text-gray-900 transition text-xl"
                  aria-label="Next slide"
                >
                  →
                </button>

                {/* Slide Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/80 to-transparent p-8 z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900">{workflows[currentSlide].title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{workflows[currentSlide].description}</p>
                </div>
              </div>
            </div>

            {/* MacBook Bottom Bezel */}
            <div className="h-4 bg-gray-100 dark:bg-gray-800" />

            {/* MacBook Stand Base */}
            <div className="flex justify-center px-12 pb-4">
              <div className="w-2/3 h-2 bg-gray-300 dark:bg-gray-700 rounded-b-2xl" />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {workflows.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentSlide ? "bg-teal-500 dark:bg-teal-400" : "bg-gray-600 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Workflow Cards - visible on mobile, hidden on md+ */}
      <div className="md:hidden grid grid-cols-1 gap-4">
        {workflows.map((workflow) => (
          <div key={workflow.id} className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 overflow-hidden">
            <div className="relative h-40 sm:h-48 bg-gray-100 dark:bg-gray-800">
              <Image
                src={workflow.image}
                alt={workflow.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white mb-2">{workflow.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{workflow.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 sm:mt-12 text-center">
        <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6">
          Want to see how we can automate your workflows?
        </p>
        <a
          href="https://cal.com/abdul-rehman-lbwclo/30min"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 px-4 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition"
        >
          <Calendar size={16} className="sm:size-5" />
          Schedule a Consultation
        </a>
      </div>
    </section>
  );
}

function StatCounter({ target, label, isPercentage }: { target: number; label: string; isPercentage: boolean }) {
  const [count, setCount] = React.useState(0);
  const [hasStarted, setHasStarted] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    let startValue = 0;
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOut = 1 - Math.pow(1 - progress, 3);
      startValue = Math.floor(target * easeOut);
      
      setCount(startValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, target]);

  const displayValue = isPercentage ? `${count}%` : `${count}+`;

  return (
    <div ref={containerRef} className="text-center">
      <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-2 sm:mb-3">
        {displayValue}
      </div>
      <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400">{label}</p>
    </div>
  );
}

function Stats() {
  const stats = [
    { value: 50, label: "Happy Clients", isPercentage: false },
    { value: 100, label: "Projects Completed", isPercentage: false },
    { value: 98, label: "Success Rate", isPercentage: true },
    { value: 2, label: "Years Experience", isPercentage: false },
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 border-t border-b border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((stat) => (
          <StatCounter key={stat.label} target={stat.value} label={stat.label} isPercentage={stat.isPercentage} />
        ))}
      </div>
    </section>
  );
}

function TechStack() {
  const techIcons = [
    { name: "Next.js", type: "svg", src: "/next.svg", color: "#000", darkColor: "#fff" },
    { name: "React", icon: FaReact, color: "#61dafb", darkColor: "#61dafb" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178c6", darkColor: "#60a5fa" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4", darkColor: "#22d3ee" },
    { name: "Node.js", icon: FaNode, color: "#68a063", darkColor: "#86efac" },
    { name: "Python", icon: FaPython, color: "#3776ab", darkColor: "#60a5fa" },
    { name: "AWS", icon: FaAws, color: "#ff9900", darkColor: "#fbbf24" },
    { name: "Google Cloud", type: "svg", src: "/googlecloud.svg", color: "#ea4335", darkColor: "#fca5a5" },
    { name: "N8N", type: "svg", src: "/n8n.svg", color: "#ff6d33", darkColor: "#fb923c" },
    { name: "Make.com", type: "svg", src: "/make.svg", color: "#000000", darkColor: "#ffffff" },
    { name: "WhatsApp", icon: FaWhatsapp, color: "#25d366", darkColor: "#4ade80" },
    { name: "Meta", type: "svg", src: "/meta.svg", color: "#000000", darkColor: "#ffffff" },
    { name: "GitHub", icon: FaGithub, color: "#333", darkColor: "#e5e7eb" },
    { name: "Claude AI", type: "svg", src: "/claude.svg", color: "#c9813a", darkColor: "#f97316" },
    { name: "Perplexity", type: "svg", src: "/perplexity.svg", color: "#4db8d4", darkColor: "#06b6d4" },
    { name: "Gemini", type: "svg", src: "/googlegemini.svg", color: "#8b5cf6", darkColor: "#c084fc" },
    { name: "VS Code", icon: MessageSquare, color: "#007acc", darkColor: "#3b82f6" },
    { name: "Chatbots", icon: MessageSquare, color: "#10a37f", darkColor: "#14b8a6" },
    { name: "OpenAI", icon: Brain, color: "#10a37f", darkColor: "#14b8a6" },
    { name: "PostgreSQL", type: "svg", src: "/postgresql.svg", color: "#336791", darkColor: "#60a5fa" },
  ];

  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    // Check initial dark mode state
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDark(darkMode);

    // Listen for dark mode changes
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
          Expertise Across <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-purple-600 bg-clip-text text-transparent">Modern Technologies</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Building scalable solutions with cutting-edge tools across web, mobile, AI, and cloud technologies
        </p>
      </div>

      <style>{`
        @keyframes slideRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        @keyframes slideLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .carousel-row {
          display: flex;
          gap: 8px;
          width: 200%;
        }
        .carousel-right {
          animation: slideRight 50s linear infinite;
        }
        .carousel-left {
          animation: slideLeft 50s linear infinite;
        }
        .carousel-row:hover {
          animation-play-state: paused;
        }
        .tech-box {
          flex: 0 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 80px;
          padding: 8px;
          border-radius: 8px;
          border: 1px solid rgba(209, 213, 219, 0.5);
          background: rgba(255, 255, 255, 0.5);
        }
        @media (min-width: 640px) {
          .tech-box {
            width: 100px;
            padding: 12px;
            gap: 8px;
          }
        }
        .dark .tech-box {
          background: rgba(17, 24, 39, 0.3);
          border-color: rgba(55, 65, 81, 0.5);
        }
        .tech-box:hover {
          border-color: #14b8a6;
          transform: translateY(-2px);
        }
        .dark .tech-box:hover {
          border-color: rgba(139, 92, 246, 0.5);
        }
      `}</style>

      <div className="space-y-4 sm:space-y-6">
        {/* First Row - Sliding Right */}
        <div className="relative overflow-hidden">
          <div className="carousel-row carousel-right">
            {[...techIcons, ...techIcons].map((tech, index) => {
              const IconComponent = tech.icon as React.ComponentType<any>;
              const displayColor = isDark ? (tech as any).darkColor : tech.color;
              return (
                <div key={`row1-${tech.name}-${index}`} className="tech-box">
                  {tech.type === "svg" ? (
                    <img 
                      src={tech.src} 
                      alt={tech.name}
                      className="h-6 sm:h-8 w-6 sm:w-8 mb-1 sm:mb-2 object-contain"
                      style={{ filter: `drop-shadow(0 0 4px ${displayColor}60)` }}
                    />
                  ) : (
                    <div style={{ color: displayColor }} className="text-lg sm:text-2xl mb-1 sm:mb-2">
                      <IconComponent />
                    </div>
                  )}
                  <p className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 text-center leading-tight">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Second Row - Sliding Left */}
        <div className="relative overflow-hidden">
          <div className="carousel-row carousel-left">
            {[...techIcons, ...techIcons].map((tech, index) => {
              const IconComponent = tech.icon as React.ComponentType<any>;
              const displayColor = isDark ? (tech as any).darkColor : tech.color;
              return (
                <div key={`row2-${tech.name}-${index}`} className="tech-box">
                  {tech.type === "svg" ? (
                    <img 
                      src={tech.src} 
                      alt={tech.name}
                      className="h-6 sm:h-8 w-6 sm:w-8 mb-1 sm:mb-2 object-contain"
                      style={{ filter: `drop-shadow(0 0 4px ${displayColor}60)` }}
                    />
                  ) : (
                    <div style={{ color: displayColor }} className="text-lg sm:text-2xl mb-1 sm:mb-2">
                      <IconComponent />
                    </div>
                  )}
                  <p className="text-[10px] sm:text-xs text-gray-700 dark:text-gray-300 text-center leading-tight">{tech.name}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

function Founder() {
  return (
    <section id="founder" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className="flex items-center justify-center order-2 lg:order-1">
          <div className="w-full max-w-sm rounded-3xl overflow-hidden bg-white dark:bg-gray-800 flex items-center justify-center shadow-2xl">
            <Image
              src="/website pictures.jpeg"
              alt="Abdulrehman Ishaq"
              width={400}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-3 sm:mb-4">
            Hi, I'm <span className="text-teal-500 dark:text-teal-400">Abdulrehman Ishaq</span> — <span className="block sm:inline">AI Consultant & Founder</span>
          </h2>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 sm:mb-6">
            As an AI Consultant and Founder of Markedia, I bridge the gap between technology and business growth. My goal is to help local businesses scale using cutting-edge AI automation solutions. With a passion for solving real-world problems through technology, I'm dedicated to transforming how businesses operate.
          </p>

          <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">I specialize in:</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle size={18} className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">AI Voice Agents</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">24/7 automated customer interaction</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle size={18} className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">Chat Automation</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Intelligent conversational AI</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle size={18} className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">Lead Generation</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Automated outreach & qualification</p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <CheckCircle size={18} className="text-green-500 dark:text-green-400 flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white">Business Automation</p>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Custom AI workflow solutions</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3">
            <a
              href="mailto:abdulrehman@markedia.com"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-600 hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-700 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold text-white transition w-full xs:w-auto"
            >
              View Services
            </a>

            <a
              href="https://cal.com/abdul-rehman-lbwclo/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold text-gray-900 dark:text-white hover:border-teal-600 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition w-full xs:w-auto"
            >
              <Calendar size={16} className="hidden sm:block" />
              Book Meeting
            </a>

            <Link
              href="https://www.youtube.com/@theautomation_guy"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-gray-300 dark:border-gray-700 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold text-gray-900 dark:text-white hover:border-teal-600 dark:hover:border-teal-400 hover:bg-teal-50 dark:hover:bg-teal-950/30 transition w-full xs:w-auto"
            >
              View Channel
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="w-full bg-white dark:bg-black py-8 sm:py-12 md:py-16 border-t border-gray-200 dark:border-gray-800 mt-8 sm:mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Branding */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <Image
                src="/Markedia_logo_finale-removebg.png"
                alt="Markedia Logo"
                width={40}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 sm:mb-6 leading-relaxed">
              Automating businesses with intelligent AI agents, custom workflows, and innovative solutions.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.youtube.com/@theautomation_guy"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition"
                aria-label="YouTube"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/abdul_rehman4438/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.015-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulrehman-ai-automations/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} className="sm:size-6" />
              </a>
              <a
                href="https://www.tiktok.com/@the_automation_guy5?_r=1&_t=ZP-93Qi6MB18Ep"
                target="_blank"
                rel="noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-teal-500 dark:hover:text-teal-400 transition"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.498 3h-3.5v9.5a2.5 2.5 0 1 1-4.5-1.5V6.5h-3.5v12a7.5 7.5 0 0 0 7.5-7.5v-8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">Services</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/services" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  All Services
                </Link>
              </li>
              <li>
                <a href="/services#ai-voice" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  AI Voice Agents
                </a>
              </li>
              <li>
                <a href="/services#chatbots" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  Chatbots
                </a>
              </li>
              <li>
                <a href="/services#saas" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  SaaS Development
                </a>
              </li>
              <li>
                <a href="/services#consulting" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  AI Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">Company</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#founder" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  About Founder
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/#" className="hover:text-teal-500 dark:hover:text-teal-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-white mb-3 sm:mb-4">Get in Touch</h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={14} className="sm:size-4 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                <a href="mailto:info@markedia.org" className="hover:text-teal-500 dark:hover:text-teal-400 transition break-all">
                  info@markedia.org
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="sm:size-4 text-teal-500 dark:text-teal-400 flex-shrink-0" />
                <a
                  href="https://wa.me/14693569375"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition"
                >
                  +1 (469) 356-9375
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Calendar size={14} className="sm:size-4 text-teal-500 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                <a
                  href="https://cal.com/abdul-rehman-lbwclo/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-teal-500 dark:hover:text-teal-400 transition"
                >
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 sm:pt-8">
          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            <p>© {currentYear} Markedia. All rights reserved.</p>
            <div className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center sm:justify-end">
              <span className="font-medium text-gray-900 dark:text-white text-xs sm:text-sm">Follow us:</span>
              <a
                href="https://www.youtube.com/@theautomation_guy"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/abdul_rehman4438/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-500 transition"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm4.846-14.603c-.798 0-1.432.634-1.432 1.432 0 .798.634 1.431 1.432 1.431.798 0 1.431-.633 1.431-1.431 0-.798-.633-1.432-1.431-1.432z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/abdulrehman-ai-automations/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61583472885286"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-400 transition"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}