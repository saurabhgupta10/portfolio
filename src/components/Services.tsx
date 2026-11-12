import React from "react";
import { SERVICES_DATA } from "@/data/portfolioData";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Services & Solutions
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            High-impact software engineering tailored to your business needs.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            Clear deliverables, transparent timelines, and maintainable architecture for startups and established enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-indigo-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-bold mb-2 block">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="space-y-2 border-t border-slate-100 dark:border-slate-800/80 pt-4">
                  <span className="text-[11px] font-semibold text-slate-800 dark:text-slate-200 uppercase tracking-wider block">
                    What You Receive:
                  </span>
                  <ul className="space-y-1.5">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-1.5 text-xs text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 dark:border-slate-800/80">
                <Link
                  href="/#contact"
                  className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 inline-flex items-center gap-1 group"
                >
                  Request Service Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
