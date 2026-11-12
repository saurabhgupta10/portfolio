"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Services", href: "/#services" },
    { name: "Why Me", href: "/#why-me" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F2]/95 backdrop-blur-md border-b border-[#E8E2D2] shadow-[0_2px_15px_-3px_rgba(36,76,59,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#244C3B] text-white flex items-center justify-center shadow-sm group-hover:bg-[#1c3d2f] transition-all">
              <Code2 className="w-5 h-5 text-[#C5A15B]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#244C3B] tracking-tight flex items-center gap-2">
                Saurabh Gupta
                <span className="w-2 h-2 rounded-full bg-[#C46B4F] inline-block"></span>
              </span>
              <span className="text-xs text-[#606860] font-medium tracking-wide">Full-Stack Web Developer</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-[#F1EBDD]/70 px-4 py-1.5 rounded-full border border-[#E8E2D2]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-sm font-medium text-[#292D29] hover:text-[#244C3B] hover:bg-[#FAF8F2] rounded-full transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-[#244C3B] hover:bg-[#1c3d2f] text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="w-4 h-4 text-[#C5A15B]" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="p-2 rounded-xl text-[#244C3B] hover:bg-[#F1EBDD] transition-colors border border-[#E8E2D2]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-[#E8E2D2] bg-[#FAF8F2]/98 backdrop-blur-lg px-5 pt-3 pb-6 space-y-2.5 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3.5 py-2.5 rounded-lg text-base font-medium text-[#292D29] hover:bg-[#F1EBDD] hover:text-[#244C3B]"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-3">
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#244C3B] text-white font-medium shadow-sm"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="w-4 h-4 text-[#C5A15B]" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
