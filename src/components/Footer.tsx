import React from "react";
import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#E8E2D2] bg-[#FAF8F2] py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-[#E8E2D2]">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#244C3B] text-white flex items-center justify-center shadow-sm">
              <Code2 className="w-5 h-5 text-[#C5A15B]" />
            </div>
            <div>
              <span className="font-bold text-[#244C3B] text-base font-serif">
                Saurabh Gupta
              </span>
              <p className="text-xs text-[#606860]">
                Full-Stack Web Developer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-[#292D29] font-medium">
            <Link href="/#about" className="hover:text-[#244C3B] transition-colors">
              About
            </Link>
            <Link href="/#skills" className="hover:text-[#244C3B] transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="hover:text-[#244C3B] transition-colors">
              Projects
            </Link>
            <Link href="/#services" className="hover:text-[#244C3B] transition-colors">
              Services
            </Link>
            <Link href="/#why-me" className="hover:text-[#244C3B] transition-colors">
              Why Me
            </Link>
            <Link href="/#contact" className="hover:text-[#244C3B] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Saurabhgupta10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 rounded-xl border border-[#DFD7C2] bg-white text-[#244C3B] hover:border-[#244C3B] transition-colors shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/saurabh-gupta-2b36902b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2.5 rounded-xl border border-[#DFD7C2] bg-white text-[#244C3B] hover:border-[#244C3B] transition-colors shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:saurabhgupta2792005@gmail.com"
              aria-label="Email"
              className="p-2.5 rounded-xl border border-[#DFD7C2] bg-white text-[#244C3B] hover:border-[#244C3B] transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#606860] gap-3">
          <p>&copy; {currentYear} Saurabh Gupta. All rights reserved.</p>
          <p>Engineered with Next.js, React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
