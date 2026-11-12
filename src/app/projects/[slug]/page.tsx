import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/portfolioData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ExternalLink, CheckCircle2, ShieldCheck, AlertCircle, Layers } from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - Case Study | Saurabh Gupta`,
    description: project.description,
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to all projects
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4 pb-10 border-b border-slate-200 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Detailed Technical Case Study
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-medium text-indigo-600 dark:text-indigo-400">
              {project.tagline}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed pt-2">
              {project.description}
            </p>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700 text-sm font-medium transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub Source
              </a>

              {project.isLive && project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Application
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-slate-400"></span>
                  Verified Source Code Available
                </span>
              )}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="py-8 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xs uppercase font-mono text-slate-500 dark:text-slate-400 font-semibold mb-3">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs sm:text-sm font-mono rounded-lg bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Section */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-slate-200 dark:border-slate-800">
            <div className="p-6 rounded-2xl border border-rose-500/20 bg-rose-500/5 dark:bg-rose-500/5">
              <div className="flex items-center gap-2 text-rose-500 font-bold text-base mb-3">
                <AlertCircle className="w-5 h-5" />
                The Business Problem
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/5">
              <div className="flex items-center gap-2 text-emerald-500 font-bold text-base mb-3">
                <ShieldCheck className="w-5 h-5" />
                The Engineering Solution
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Implemented Features */}
          <div className="py-12 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Verified Implemented Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          {project.architecture && (
            <div className="py-12 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-6">
                <Layers className="w-6 h-6 text-indigo-500" />
                System Architecture
              </div>
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                {project.architecture.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between"
                  >
                    <span className="text-indigo-500 font-bold">Step 0{idx + 1}</span>
                    <span className="text-slate-700 dark:text-slate-200 text-right">{layer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Challenges */}
          <div className="py-12 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Development Challenges & Solutions
            </h2>
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Verified Results if present */}
          {project.results && (
            <div className="py-12 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Verified Results & Impact
              </h2>
              <div className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 dark:bg-emerald-500/5">
                <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>
          )}

          {/* Next Steps / CTA */}
          <div className="pt-12 text-center space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Interested in building a similar solution for your business?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
              I can help architect and deploy your web application with clean, reliable code.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-base shadow-lg shadow-indigo-600/25 transition-all"
              >
                Let&apos;s Discuss Your Project
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
