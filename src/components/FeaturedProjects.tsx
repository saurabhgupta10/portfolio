"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/data/portfolioData";
import { ArrowUpRight, ExternalLink, Layers, CheckCircle } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

export default function FeaturedProjects() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Full-Stack", "AI & Automation"];

  const filteredProjects =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 border-t border-[#E8E2D2] bg-[#FAF8F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C46B4F] font-bold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C46B4F]"></span>
              Featured Work
            </div>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-[#244C3B] tracking-tight">
              Real projects engineered for performance and utility.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-[#F1EBDD] p-1.5 rounded-full border border-[#DFD7C2] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all ${
                  filter === cat
                    ? "bg-[#244C3B] text-white shadow-sm"
                    : "text-[#606860] hover:text-[#244C3B]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl border border-[#DFD7C2] bg-white overflow-hidden shadow-md hover:shadow-xl hover:border-[#244C3B]/50 transition-all duration-300"
            >
              {/* Editorial Project Header Visual */}
              <div className="relative h-60 sm:h-72 lg:h-80 w-full overflow-hidden border-b border-[#E8E2D2]">
                <Image
                  src={project.coverImage}
                  alt={`${project.title} - ${project.tagline}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#244C3B]/90 via-[#244C3B]/30 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 text-white">
                  <div>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F1EBDD] text-[#244C3B] border border-[#DFD7C2] inline-block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>
                  <span className="text-xs text-[#C5A15B] font-mono tracking-wider bg-[#244C3B]/80 px-3 py-1.5 rounded-lg border border-[#C5A15B]/30">
                    Case Study & Architecture
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <p className="text-base sm:text-lg text-[#244C3B] font-serif font-medium">
                      {project.tagline}
                    </p>

                    <p className="text-sm sm:text-base text-[#606860] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-2.5">
                      <p className="text-xs font-bold text-[#244C3B] uppercase tracking-wider">
                        Key Capabilities:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#292D29]">
                        {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-[#244C3B] mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-mono rounded-lg bg-[#FAF8F2] text-[#244C3B] font-medium border border-[#DFD7C2]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3.5 pt-4 border-t border-[#E8E2D2]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#244C3B] hover:bg-[#1c3d2f] text-white text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        View Full Case Study
                        <ArrowUpRight className="w-4 h-4 text-[#C5A15B]" />
                      </Link>

                      {project.isLive && project.liveDemoUrl ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#DFD7C2] hover:bg-[#F1EBDD] text-[#244C3B] text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-[#C46B4F]" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-3.5 py-2 text-xs text-[#606860] font-medium bg-[#F1EBDD] rounded-xl border border-[#DFD7C2]">
                          <span className="w-2 h-2 rounded-full bg-[#C5A15B]"></span>
                          Verified Source Code Available
                        </span>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DFD7C2] hover:bg-[#F1EBDD] text-[#244C3B] text-sm font-semibold transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub Repository
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Architectural Schematic Card */}
                  <div className="lg:col-span-5 w-full">
                    <div className="rounded-2xl border border-[#DFD7C2] bg-[#FAF8F2] p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D2]">
                        <span className="text-xs font-mono text-[#244C3B] font-bold flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#C46B4F]" />
                          Architecture Overview
                        </span>
                        <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#244C3B]/10 text-[#244C3B] border border-[#244C3B]/20">
                          Production Ready
                        </span>
                      </div>

                      <div className="space-y-3 font-mono text-xs text-[#292D29]">
                        {project.architecture ? (
                          project.architecture.map((layer, lIdx) => (
                            <div
                              key={lIdx}
                              className="p-3.5 rounded-xl border border-[#DFD7C2] bg-white shadow-sm"
                            >
                              <div className="text-[10px] text-[#C46B4F] font-bold tracking-wider mb-1">
                                LAYER 0{lIdx + 1}
                              </div>
                              <div className="leading-snug text-[#292D29]">{layer}</div>
                            </div>
                          ))
                        ) : (
                          <div className="p-4 rounded-xl bg-white text-[#606860]">
                            Modular Architecture
                          </div>
                        )}
                      </div>

                      <div className="pt-2 text-right">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-xs font-semibold text-[#244C3B] hover:text-[#C46B4F] inline-flex items-center gap-1 transition-colors"
                        >
                          Read architecture details &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
