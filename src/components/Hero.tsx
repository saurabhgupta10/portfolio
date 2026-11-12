import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";
import { LotusMotif } from "@/components/CulturalMotifs";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF8F2]">
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#F1EBDD] rounded-full blur-3xl opacity-70 -z-10" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C5A15B]/10 rounded-full blur-2xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#DFD7C2] bg-[#F1EBDD]/90 text-[#244C3B] text-xs sm:text-sm font-semibold tracking-wide">
              <LotusMotif className="w-4 h-4 text-[#C46B4F]" />
              <span>Full-Stack Web Developer &bull; Serving Clients Globally</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#244C3B] leading-[1.18]">
              Building Modern Web Applications That{" "}
              <span className="text-[#C46B4F] italic underline decoration-[#C5A15B]/50 decoration-wavy decoration-1 underline-offset-8">
                Help Businesses Grow.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#606860] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              I&apos;m a Full-Stack Web Developer specializing in modern web applications, business dashboards, database integration, and automation solutions. I transform business ideas into functional, scalable, and user-friendly digital products.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#244C3B] hover:bg-[#1c3d2f] text-white font-medium text-base shadow-md shadow-[#244C3B]/15 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Let&apos;s Work Together
                <ArrowRight className="w-4 h-4 text-[#C5A15B]" />
              </Link>
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-[#DFD7C2] bg-white hover:bg-[#F1EBDD] text-[#244C3B] font-semibold text-base transition-all shadow-sm"
              >
                View My Projects
              </Link>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-6 border-t border-[#E8E2D2] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[#606860]">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Saurabhgupta10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-[#DFD7C2] bg-white hover:text-[#244C3B] hover:border-[#244C3B] transition-colors text-[#606860] shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-gupta-2b36902b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-[#DFD7C2] bg-white hover:text-[#244C3B] hover:border-[#244C3B] transition-colors text-[#606860] shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:saurabhgupta2792005@gmail.com"
                  className="p-2.5 rounded-xl border border-[#DFD7C2] bg-white hover:text-[#244C3B] hover:border-[#244C3B] transition-colors text-[#606860] shadow-sm"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs sm:text-sm font-medium">
                <span className="flex items-center gap-1.5 text-[#244C3B]">
                  <CheckCircle2 className="w-4 h-4 text-[#C46B4F]" /> Production-Ready Code
                </span>
                <span className="flex items-center gap-1.5 text-[#244C3B]">
                  <CheckCircle2 className="w-4 h-4 text-[#C46B4F]" /> Client-First Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Arch Framed Workspace Photo & Code Overlay */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md">
              {/* Arch Shaped Photo Card with Warm Editorial Lighting */}
              <div className="rounded-t-[60px] rounded-b-3xl border border-[#DFD7C2] bg-white p-3 shadow-xl overflow-hidden">
                <div className="relative h-72 sm:h-80 w-full rounded-t-[52px] rounded-b-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                    alt="Professional developer workspace with modern laptop, clean desk, warm ambient lighting"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#244C3B]/80 via-transparent to-transparent" />
                  
                  {/* Floating Badge on Photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-wider text-[#C5A15B] font-semibold">Engineering Philosophy</p>
                    <p className="text-sm font-medium">Clean Architecture &bull; Modern Stack &bull; Real Value</p>
                  </div>
                </div>

                {/* Sub-Card with Developer Spec */}
                <div className="p-4 pt-5 bg-white space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-[#606860] border-b border-[#E8E2D2] pb-2">
                    <span className="text-[#244C3B] font-bold">craftsmanship.tsx</span>
                    <span className="text-[#C46B4F] font-semibold">&lt;ProductionReady /&gt;</span>
                  </div>
                  <p className="text-xs text-[#292D29] leading-relaxed pt-1">
                    Specialized in Next.js, Fastify, Supabase, and Python AI pipelines engineered for international business scalability.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
