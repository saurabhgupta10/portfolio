import React from "react";
import Link from "next/link";
import { Code2, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100 dark:border-slate-800/80">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-600/10 border border-indigo-500/30 flex items-center justify-center text-indigo-500">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base">
                Saurabh Gupta
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Full-Stack Web Developer
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-medium">
            <Link href="/#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </Link>
            <Link href="/#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Skills
            </Link>
            <Link href="/#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </Link>
            <Link href="/#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Services
            </Link>
            <Link href="/#why-me" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Why Me
            </Link>
            <Link href="/#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Saurabhgupta10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/saurabh-gupta-2b36902b3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:saurabhgupta2792005@gmail.com"
              aria-label="Email"
              className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-500 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-500 gap-3">
          <p>&copy; {currentYear} Saurabh Gupta. All rights reserved.</p>
          <p>Engineered with Next.js, React, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
