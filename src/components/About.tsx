import React from "react";
import { Layers, Database, Cpu, Zap, ShieldCheck, RefreshCw } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      title: "Full-Stack Development",
      description: "Building cohesive web applications where frontend elegance meets backend stability and type safety."
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      title: "Database Architecture",
      description: "Designing structured PostgreSQL and Supabase schemas with optimized queries and row-level security."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Backend & API Engineering",
      description: "Developing fast, scalable REST microservices with Node.js, Fastify, and Python FastAPI."
    },
    {
      icon: <Zap className="w-5 h-5 text-indigo-400" />,
      title: "Business Automation",
      description: "Integrating APIs, web scrapers, and AI workflows to automate tedious manual business processes."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      title: "Production Reliability",
      description: "Writing maintainable, well-documented code designed for high availability and zero guesswork."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-indigo-400" />,
      title: "Continuous Iteration",
      description: "Iterating directly with stakeholders through rapid prototypes, milestones, and clear communication."
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            About Me
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Engineering digital solutions that solve real business bottlenecks.
          </p>
        </div>

        {/* Story / Background Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6 space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-base sm:text-lg">
            <p>
              I am a dedicated Full-Stack Web Developer passionate about building robust, high-performance web applications, customer-facing portals, and automated business workflows.
            </p>
            <p>
              My approach is centered entirely around client value. Rather than writing code for code&apos;s sake, I focus on identifying operational friction—whether it is disorganized event coordination, manual data entry, or inefficient customer outreach—and designing straightforward software solutions that eliminate it.
            </p>
            <p>
              From architecting fast REST APIs with Fastify and Node.js to crafting responsive React and Next.js interfaces with Tailwind CSS, I ensure every layer of your application is fast, secure, and intuitive for end users.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/40 hover:border-indigo-500/40 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-indigo-500/10 w-fit mb-3">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
