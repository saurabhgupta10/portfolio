import React from "react";
import { Code, Smartphone, Cpu, Briefcase, MessageSquare, Clock, ShieldCheck } from "lucide-react";

export default function WhyWorkWithMe() {
  const points = [
    {
      icon: <Code className="w-5 h-5 text-indigo-400" />,
      title: "Clean & Maintainable Code",
      description: "Structured, typed, and well-organized codebases that any engineering team can easily adopt, scale, and maintain."
    },
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-400" />,
      title: "Pixel-Perfect Responsiveness",
      description: "Tested across mobile smartphones, iPads, modern laptops, and ultra-wide desktop monitors for seamless usability."
    },
    {
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      title: "Modern, Scalable Technologies",
      description: "Leveraging Next.js App Router, React, TypeScript, Fastify, and PostgreSQL to deliver cutting-edge speed and security."
    },
    {
      icon: <Briefcase className="w-5 h-5 text-indigo-400" />,
      title: "Business-Focused Solutions",
      description: "Engineering choices aligned with your bottom-line business objectives, cost reduction, and customer conversions."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-indigo-400" />,
      title: "Clear, Proactive Communication",
      description: "Regular milestone updates, transparent progress tracking, and zero technical jargon to keep you completely informed."
    },
    {
      icon: <Clock className="w-5 h-5 text-indigo-400" />,
      title: "Reliable On-Time Delivery",
      description: "Disciplined project scoping and realistic deadlines to deliver your production-ready release on schedule."
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-indigo-400" />,
      title: "High Attention to Detail",
      description: "Thorough testing of edge cases, API error responses, and form validation for flawless production behavior."
    }
  ];

  return (
    <section id="why-me" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Why Work With Me
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Commitment to professional excellence and client success.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            When you hire me, you get a dedicated technical partner focused on delivering verifiable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 hover:border-indigo-500/40 transition-colors"
            >
              <div className="p-3 rounded-xl bg-indigo-500/10 w-fit mb-4">
                {p.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                {p.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
