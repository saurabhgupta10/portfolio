import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, CheckCircle2, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle Background Glow Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs sm:text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Freelance & Contract Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Building Modern Web Applications That{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-indigo-400 to-sky-400 bg-clip-text text-transparent">
                Help Businesses Grow.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I&apos;m a Full-Stack Web Developer specializing in modern web applications, business dashboards, database integration, and automation solutions. I transform business ideas into functional, scalable, and user-friendly digital products.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-base shadow-lg shadow-indigo-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200 font-medium text-base transition-all"
              >
                Hire Me
              </Link>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Saurabhgupta10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-indigo-500 hover:border-indigo-500/50 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-gupta-2b36902b3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-indigo-500 hover:border-indigo-500/50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href="mailto:saurabhgupta2792005@gmail.com"
                  className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 hover:text-indigo-500 hover:border-indigo-500/50 transition-colors"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-4 text-xs sm:text-sm">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Production-Ready Code
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Fast Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Technology Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  developer.tsx
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="pt-4 font-mono text-xs sm:text-sm leading-relaxed space-y-2 text-slate-700 dark:text-slate-300">
                <p>
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span> <span className="text-emerald-400">&apos;Saurabh Gupta&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">role:</span> <span className="text-emerald-400">&apos;Full-Stack Web Developer&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">stack:</span> [
                </p>
                <p className="pl-8 text-sky-400">&apos;Next.js&apos;, &apos;React&apos;, &apos;TypeScript&apos;,</p>
                <p className="pl-8 text-sky-400">&apos;Fastify&apos;, &apos;Supabase&apos;, &apos;FastAPI&apos;</p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-slate-400">focus:</span> <span className="text-emerald-400">&apos;High-Performance Business Web Apps&apos;</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">status:</span> <span className="text-emerald-400">&apos;Open For Client Work&apos;</span>
                </p>
                <p>&#125;;</p>

                <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
                  <p className="text-indigo-400 font-semibold">// Client Delivery Standard:</p>
                  <p className="mt-1">Zero fluff. Clean APIs. Reliable databases. Measurable value.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
