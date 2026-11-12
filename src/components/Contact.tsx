"use client";

import React, { useState } from "react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Full-Stack Web Application",
    budget: "$1,000 - $3,000",
    description: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct guaranteed working mailto link
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`);
    const body = encodeURIComponent(
      `Hi Saurabh,\n\nName: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\nEstimated Budget: ${formData.budget}\n\nProject Overview:\n${formData.description}\n\nBest regards,\n${formData.name}`
    );

    window.location.href = `mailto:saurabhgupta2792005@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 border-t border-[#E8E2D2] bg-[#F1EBDD]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C46B4F] font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C46B4F]"></span>
                Get In Touch
              </div>
              <p className="text-3xl sm:text-4xl font-serif font-bold text-[#244C3B] tracking-tight">
                Let&apos;s build something remarkable together.
              </p>
              <p className="mt-4 text-sm sm:text-base text-[#606860] leading-relaxed">
                Have a new web application in mind, need an existing system modernized, or looking for an experienced full-stack developer for contract work? Send me a message and I&apos;ll get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:saurabhgupta2792005@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#DFD7C2] bg-white hover:border-[#244C3B] transition-all shadow-sm group"
              >
                <div className="p-3 rounded-xl bg-[#F1EBDD] text-[#244C3B] group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5 text-[#C46B4F]" />
                </div>
                <div>
                  <div className="text-xs text-[#606860] font-medium">Direct Email</div>
                  <div className="text-sm font-bold text-[#244C3B]">
                    saurabhgupta2792005@gmail.com
                  </div>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/saurabh-gupta-2b36902b3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#DFD7C2] bg-white hover:border-[#244C3B] transition-all shadow-sm group"
              >
                <div className="p-3 rounded-xl bg-[#F1EBDD] text-[#244C3B] group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5 text-[#C46B4F]" />
                </div>
                <div>
                  <div className="text-xs text-[#606860] font-medium">LinkedIn Network</div>
                  <div className="text-sm font-bold text-[#244C3B]">
                    linkedin.com/in/saurabh-gupta-2b36902b3
                  </div>
                </div>
              </a>

              <a
                href="https://github.com/Saurabhgupta10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl border border-[#DFD7C2] bg-white hover:border-[#244C3B] transition-all shadow-sm group"
              >
                <div className="p-3 rounded-xl bg-[#F1EBDD] text-[#244C3B] group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5 text-[#C46B4F]" />
                </div>
                <div>
                  <div className="text-xs text-[#606860] font-medium">Open-Source Code</div>
                  <div className="text-sm font-bold text-[#244C3B]">
                    github.com/Saurabhgupta10
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-[#DFD7C2] bg-white p-8 sm:p-10 shadow-md">
              <h3 className="text-2xl font-serif font-bold text-[#244C3B] mb-2">
                Project Inquiry Form
              </h3>
              <p className="text-xs sm:text-sm text-[#606860] mb-6">
                Tell me about your project goals. Submitting opens your email client pre-filled with all project specifications.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-[#F1EBDD] border border-[#DFD7C2] text-[#244C3B] text-sm flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C46B4F] shrink-0" />
                  <span>Your email client has been prepared. Please send the message to complete your inquiry!</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#244C3B] mb-1.5 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma or John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DFD7C2] bg-[#FAF8F2] text-[#292D29] text-sm focus:outline-none focus:ring-2 focus:ring-[#244C3B] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#244C3B] mb-1.5 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="client@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DFD7C2] bg-[#FAF8F2] text-[#292D29] text-sm focus:outline-none focus:ring-2 focus:ring-[#244C3B] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#244C3B] mb-1.5 uppercase tracking-wider">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DFD7C2] bg-[#FAF8F2] text-[#292D29] text-sm focus:outline-none focus:ring-2 focus:ring-[#244C3B] transition-all"
                    >
                      <option>Full-Stack Web Application</option>
                      <option>Business Portal or SaaS</option>
                      <option>Admin Dashboard & Analytics</option>
                      <option>API & Database Integration</option>
                      <option>Automation & Web Scraping</option>
                      <option>Maintenance & Code Optimization</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#244C3B] mb-1.5 uppercase tracking-wider">
                      Estimated Budget (USD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#DFD7C2] bg-[#FAF8F2] text-[#292D29] text-sm focus:outline-none focus:ring-2 focus:ring-[#244C3B] transition-all"
                    >
                      <option>$500 - $1,000</option>
                      <option>$1,000 - $3,000</option>
                      <option>$3,000 - $5,000</option>
                      <option>$5,000+</option>
                      <option>To be determined</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#244C3B] mb-1.5 uppercase tracking-wider">
                    Project Overview & Timeline *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe what you want to build, target deliverables, and desired completion timeline..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#DFD7C2] bg-[#FAF8F2] text-[#292D29] text-sm focus:outline-none focus:ring-2 focus:ring-[#244C3B] transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl bg-[#244C3B] hover:bg-[#1c3d2f] text-white font-bold text-sm shadow-md shadow-[#244C3B]/20 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4 text-[#C5A15B]" />
                  Submit Project Inquiry
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
