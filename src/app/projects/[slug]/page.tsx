import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
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
    <div className="min-h-screen bg-[#FAF8F2] text-[#292D29] flex flex-col transition-colors duration-300">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Back Navigation */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#606860] hover:text-[#244C3B] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#C46B4F]" />
              Back to all projects
            </Link>
          </div>

          {/* Editorial Cover Visual */}
          <div className="relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden mb-10 border border-[#DFD7C2] shadow-md">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#244C3B]/85 via-[#244C3B]/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#F1EBDD] text-[#244C3B] border border-[#DFD7C2] inline-block mb-2">
                {project.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                {project.title}
              </h1>
            </div>
          </div>

          {/* Header */}
          <div className="space-y-4 pb-12 border-b border-[#E8E2D2]">
            <p className="text-lg sm:text-xl font-medium text-[#C46B4F]">
              {project.tagline}
            </p>

            <p className="text-base sm:text-lg text-[#606860] leading-relaxed pt-2">
              {project.description}
            </p>

            {/* Direct Links */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#244C3B] text-white hover:bg-[#1c3d2f] text-sm font-semibold shadow-sm transition-all"
              >
                <GithubIcon className="w-4 h-4" />
                View GitHub Source
              </a>

              {project.isLive && project.liveDemoUrl ? (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[#DFD7C2] bg-white hover:bg-[#F1EBDD] text-[#244C3B] text-sm font-semibold transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-[#C46B4F]" />
                  Launch Live Application
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#606860] bg-[#F1EBDD] rounded-xl border border-[#DFD7C2]">
                  <span className="w-2 h-2 rounded-full bg-[#C5A15B]"></span>
                  Verified Source Code Available
                </span>
              )}
            </div>
          </div>

          {/* Technology Badges */}
          <div className="py-8 border-b border-[#E8E2D2]">
            <h2 className="text-xs uppercase font-mono text-[#244C3B] font-bold mb-3 tracking-wider">
              Technologies Used
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 text-xs sm:text-sm font-mono rounded-lg bg-white text-[#244C3B] font-medium border border-[#DFD7C2] shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Problem & Solution Section */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-[#E8E2D2]">
            <div className="p-7 rounded-2xl border border-[#DFD7C2] bg-white shadow-sm">
              <div className="flex items-center gap-2 text-[#C46B4F] font-bold text-base mb-3 font-serif">
                <AlertCircle className="w-5 h-5 text-[#C46B4F]" />
                The Business Problem
              </div>
              <p className="text-sm sm:text-base text-[#606860] leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-7 rounded-2xl border border-[#DFD7C2] bg-[#F1EBDD]/60 shadow-sm">
              <div className="flex items-center gap-2 text-[#244C3B] font-bold text-base mb-3 font-serif">
                <ShieldCheck className="w-5 h-5 text-[#244C3B]" />
                The Engineering Solution
              </div>
              <p className="text-sm sm:text-base text-[#292D29] leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Implemented Features */}
          <div className="py-12 border-b border-[#E8E2D2]">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#244C3B] mb-6">
              Verified Implemented Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-[#DFD7C2] bg-white shadow-sm flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#244C3B] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-[#292D29] font-medium">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          {project.architecture && (
            <div className="py-12 border-b border-[#E8E2D2]">
              <div className="flex items-center gap-2 text-xl sm:text-2xl font-serif font-bold text-[#244C3B] mb-6">
                <Layers className="w-6 h-6 text-[#C46B4F]" />
                System Architecture
              </div>
              <div className="space-y-3 font-mono text-xs sm:text-sm">
                {project.architecture.map((layer, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-[#DFD7C2] bg-white shadow-sm flex items-center justify-between"
                  >
                    <span className="text-[#C46B4F] font-bold">Step 0{idx + 1}</span>
                    <span className="text-[#244C3B] text-right font-medium">{layer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Engineering Challenges */}
          <div className="py-12 border-b border-[#E8E2D2]">
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#244C3B] mb-4">
              Development Challenges & Solutions
            </h2>
            <div className="p-7 rounded-2xl border border-[#DFD7C2] bg-white shadow-sm">
              <p className="text-sm sm:text-base text-[#606860] leading-relaxed">
                {project.challenges}
              </p>
            </div>
          </div>

          {/* Verified Results if present */}
          {project.results && (
            <div className="py-12 border-b border-[#E8E2D2]">
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#244C3B] mb-4">
                Verified Results & Impact
              </h2>
              <div className="p-7 rounded-2xl border border-[#DFD7C2] bg-[#F1EBDD]/60 shadow-sm">
                <p className="text-sm sm:text-base text-[#292D29] leading-relaxed">
                  {project.results}
                </p>
              </div>
            </div>
          )}

          {/* Next Steps / CTA */}
          <div className="pt-12 text-center space-y-4">
            <h3 className="text-2xl font-serif font-bold text-[#244C3B]">
              Interested in building a similar solution for your business?
            </h3>
            <p className="text-sm sm:text-base text-[#606860] max-w-xl mx-auto">
              I can help architect and deploy your web application with clean, reliable code.
            </p>
            <div className="pt-3">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#244C3B] hover:bg-[#1c3d2f] text-white font-semibold text-base shadow-sm transition-all"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
