import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Saurabh Gupta | Full-Stack Web Developer",
  description: "Building Modern Web Applications That Help Businesses Grow. Specializing in Next.js, React, Node.js, Fastify, and AI Automation.",
  keywords: [
    "Full Stack Developer",
    "Freelance Web Developer",
    "Next.js Developer",
    "React Developer",
    "Web Application Developer",
    "Business Dashboard Developer",
    "Custom Web Development"
  ],
  authors: [{ name: "Saurabh Gupta" }],
  openGraph: {
    title: "Saurabh Gupta | Full-Stack Web Developer",
    description: "Building Modern Web Applications That Help Businesses Grow.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-[#FAF8F2] text-[#292D29] font-sans antialiased selection:bg-[#C46B4F] selection:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
