import React from "react";
import { 
  Globe, 
  LayoutDashboard, 
  Layers, 
  Database, 
  Workflow, 
  Wrench, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/portfolioData";

export default function Services() {
  const serviceIcons = [
    <Layers key="0" className="w-6 h-6 text-[#244C3B]" />,
    <Globe key="1" className="w-6 h-6 text-[#244C3B]" />,
    <LayoutDashboard key="2" className="w-6 h-6 text-[#244C3B]" />,
    <LayoutDashboard key="3" className="w-6 h-6 text-[#244C3B]" />,
    <Workflow key="4" className="w-6 h-6 text-[#244C3B]" />,
    <Database key="5" className="w-6 h-6 text-[#244C3B]" />,
    <Workflow key="6" className="w-6 h-6 text-[#244C3B]" />,
    <Wrench key="7" className="w-6 h-6 text-[#244C3B]" />
  ];

  return (
    <section id="services" className="py-24 border-t border-[#E8E2D2] bg-[#F1EBDD]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C46B4F] font-bold mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C46B4F]"></span>
            Services & Solutions
          </div>
          <p className="text-3xl sm:text-4xl font-serif font-bold text-[#244C3B] tracking-tight">
            High-impact software engineering tailored to your business needs.
          </p>
          <p className="mt-3 text-sm sm:text-base text-[#606860]">
            Clear deliverables, transparent timelines, and maintainable architecture for startups and established enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((srv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-[#DFD7C2] bg-white shadow-sm hover:shadow-md hover:border-[#244C3B]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#F1EBDD] border border-[#DFD7C2]">
                    {serviceIcons[idx] || <Layers className="w-6 h-6 text-[#244C3B]" />}
                  </div>
                  <span className="text-xs font-mono text-[#C46B4F] font-bold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#244C3B] mb-2 font-serif">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#606860] leading-relaxed mb-6">
                  {srv.description}
                </p>

                <div className="space-y-2 border-t border-[#E8E2D2] pt-4">
                  <span className="text-[11px] font-bold text-[#244C3B] uppercase tracking-wider block">
                    What You Receive:
                  </span>
                  <ul className="space-y-2">
                    {srv.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-[#292D29]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#244C3B] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8E2D2]">
                <Link
                  href="/#contact"
                  className="text-xs font-bold text-[#244C3B] hover:text-[#C46B4F] inline-flex items-center gap-1.5 group transition-colors"
                >
                  Request Service Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#C46B4F]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
