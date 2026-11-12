import React from "react";
import Image from "next/image";
import { Layers, Database, Cpu, Zap, ShieldCheck, RefreshCw, UserCheck } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-[#244C3B]" />,
      title: "Full-Stack Web Development",
      description: "Building cohesive web applications where frontend elegance meets backend stability and type safety."
    },
    {
      icon: <Database className="w-5 h-5 text-[#244C3B]" />,
      title: "Database Architecture",
      description: "Designing structured PostgreSQL and Supabase schemas with optimized queries and row-level security."
    },
    {
      icon: <Cpu className="w-5 h-5 text-[#244C3B]" />,
      title: "Backend & API Engineering",
      description: "Developing fast, scalable REST microservices with Node.js, Fastify, and Python FastAPI."
    },
    {
      icon: <Zap className="w-5 h-5 text-[#244C3B]" />,
      title: "Business Automation",
      description: "Integrating APIs, web scrapers, and AI workflows to automate tedious manual business processes."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#244C3B]" />,
      title: "Production Reliability",
      description: "Writing maintainable, well-documented code designed for high availability and zero guesswork."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-[#244C3B]" />,
      title: "Continuous Collaboration",
      description: "Iterating directly with stakeholders through rapid prototypes, milestones, and clear communication."
    }
  ];

  return (
    <section id="about" className="py-24 border-t border-[#E8E2D2] bg-[#FAF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C46B4F] font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C46B4F]"></span>
            About Me
          </div>
          <p className="text-3xl sm:text-4xl font-serif font-bold text-[#244C3B] tracking-tight">
            Engineering digital solutions that solve real business bottlenecks.
          </p>
        </div>

        {/* Visual Composition + Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Visual: Curated Studio Workspace Composition with Reserved Portrait Slot */}
          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-2xl border border-[#DFD7C2] bg-white p-3 shadow-md overflow-hidden">
              <div className="relative h-64 sm:h-72 w-full rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
                  alt="Modern developer workspace with laptop running code, warm lighting, notebook and coffee"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover"
                />
              </div>
              <div className="p-3 text-center">
                <p className="text-xs font-semibold text-[#244C3B]">Dedicated Technical Partner</p>
                <p className="text-[11px] text-[#606860] mt-0.5">Committed to clean code, responsive interfaces, and business impact</p>
              </div>
            </div>

            {/* Reserved Placeholder for Profile Photo */}
            <div className="p-4 rounded-xl border border-dashed border-[#C5A15B]/60 bg-[#F1EBDD]/40 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-white text-[#244C3B]">
                <UserCheck className="w-5 h-5 text-[#C46B4F]" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-[#244C3B]">Saurabh Gupta &bull; Full-Stack Developer</p>
                <p className="text-[#606860]">Available for direct 1-on-1 discovery calls with clients</p>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-7 space-y-5 text-[#292D29] leading-relaxed text-base sm:text-lg">
            <p>
              I am a dedicated Full-Stack Web Developer passionate about building robust, high-performance web applications, customer-facing portals, and automated business workflows.
            </p>
            <p>
              My approach is centered entirely around client value. Rather than writing code for code&apos;s sake, I focus on identifying operational friction—whether it is disorganized event coordination, manual data entry, or inefficient customer outreach—and designing straightforward software solutions that eliminate it.
            </p>
            <p className="p-5 rounded-2xl border border-[#DFD7C2] bg-[#F1EBDD]/60 text-sm text-[#244C3B] font-medium leading-relaxed">
              From architecting fast REST APIs with Fastify and Node.js to crafting responsive React and Next.js interfaces with Tailwind CSS, I ensure every layer of your application is fast, secure, and intuitive for end users.
            </p>
          </div>

        </div>

        {/* 6 Capabilities Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-[#DFD7C2] bg-white hover:border-[#244C3B] transition-all duration-300 shadow-sm"
            >
              <div className="p-3 rounded-xl bg-[#F1EBDD] w-fit mb-4">
                {item.icon}
              </div>
              <h3 className="font-bold text-[#244C3B] text-base mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#606860] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
