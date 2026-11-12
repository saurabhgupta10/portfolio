import React from "react";
import { SKILLS_DATA } from "@/data/portfolioData";
import { Check } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-[#E8E2D2] bg-[#F1EBDD]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C46B4F] font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C46B4F]"></span>
            Technical Stack
          </div>
          <p className="text-3xl sm:text-4xl font-serif font-bold text-[#244C3B] tracking-tight">
            Production-tested technologies ready for your project.
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#606860]">
            I only highlight tools and frameworks I actively use to design, build, and deploy verified digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS_DATA.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-[#DFD7C2] bg-white shadow-sm hover:shadow-md hover:border-[#244C3B]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-[#244C3B] pb-3 border-b border-[#E8E2D2] mb-4 flex items-center justify-between">
                  {group.category}
                  <span className="w-2 h-2 rounded-full bg-[#C5A15B]"></span>
                </h3>
                <ul className="space-y-3">
                  {group.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-[#292D29] font-medium">
                        <Check className="w-4 h-4 text-[#244C3B]" />
                        {skill.name}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-[#F1EBDD] text-[#244C3B] font-semibold border border-[#E8E2D2]">
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
