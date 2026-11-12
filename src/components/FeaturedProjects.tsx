"use client";

import React, { useState } from "react";
import Link from "next/link";
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
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
              Featured Work
            </h2>
            <p className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Real projects engineered for performance and utility.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-900 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all ${
                  filter === cat
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/40 overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300"
            >
              <div className="p-8 sm:p-10 lg:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Details */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                        {project.category}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        Case Study Available
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400 mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Features List */}
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-slate-900 dark:text-slate-200 uppercase tracking-wider">
                        Key Capabilities:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                        {project.keyFeatures.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technology Badges */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 text-xs font-mono rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold shadow-md shadow-indigo-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                      >
                        View Full Case Study
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      {project.isLive && project.liveDemoUrl ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4 text-indigo-400" />
                          Live Demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 px-3 py-2 text-xs text-slate-500 font-medium">
                          <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                          Source Code Available
                        </span>
                      )}

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        GitHub Repository
                      </a>
                    </div>
                  </div>

                  {/* Right Column: Architectural Schematic Card */}
                  <div className="lg:col-span-5 w-full">
                    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/80 p-6 space-y-4">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                        <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                          <Layers className="w-4 h-4 text-indigo-400" />
                          Architecture Overview
                        </span>
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Production Ready
                        </span>
                      </div>

                      <div className="space-y-3 font-mono text-xs text-slate-700 dark:text-slate-300">
                        {project.architecture ? (
                          project.architecture.map((layer, lIdx) => (
                            <div
                              key={lIdx}
                              className="p-3 rounded-lg border border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-900/60"
                            >
                              <div className="text-[10px] text-indigo-500 font-semibold mb-1">
                                LAYER {lIdx + 1}
                              </div>
                              <div className="leading-snug">{layer}</div>
                            </div>
                          ))
                        ) : (
                          <div className="p-4 rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-500">
                            Modular Architecture
                          </div>
                        )}
                      </div>

                      <div className="pt-2 text-right">
                        <Link
                          href={`/projects/${project.slug}`}
                          className="text-xs font-medium text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1"
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
