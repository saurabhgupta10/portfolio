import React from "react";
import { SKILLS_DATA } from "@/data/portfolioData";
import { Check } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
            Technical Stack
          </h2>
          <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Production-tested technologies ready for your project.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
            I only highlight tools and frameworks I actively use to design, build, and deploy verified digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm hover:border-indigo-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white pb-3 border-b border-slate-100 dark:border-slate-800/80 mb-4">
                  {group.category}
                </h3>
                <ul className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-slate-700 dark:text-slate-200 font-medium">
                        <Check className="w-4 h-4 text-emerald-500" />
                        {skill.name}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
