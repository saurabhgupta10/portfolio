# Saurabh Gupta - Full-Stack Web Developer Portfolio

A modern, high-performance, responsive portfolio website built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

- **Hero & Value Proposition**: High-impact introduction tailored for international freelancing clients.
- **Categorized Skills Matrix**: Clear breakdown across Frontend, Backend, Database, and DevOps tools.
- **Detailed Project Showcases**:
  - **WedSend**: Wedding & Event Guest Management Platform (Next.js, Fastify, Supabase, WhatsApp Cloud API).
  - **Autonomous AI Lead Engine**: AI-Powered Lead Generation & Enrichment Engine (Python, FastAPI, Google Gemini, Google Sheets CRM).
- **Dedicated Project Case Study Pages**: Comprehensive problem, solution, architecture, and feature breakdowns for each project with dynamic SSG routes (`/projects/[slug]`).
- **Services & Offerings**: 8 distinct, client-oriented service cards detailing scope and deliverables.
- **Why Work With Me**: Professional credibility points focused on clean code, responsiveness, and clear communication.
- **Functional Contact Form & Direct Links**: Ready-to-send project inquiry form with pre-formatted email fallbacks.
- **Light/Dark Mode**: Seamless theme toggle with persistent styling.
- **SEO & Social Optimization**: Open Graph tags, semantic metadata, dynamic `sitemap.xml`, and `robots.txt`.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS
- **Icons**: Lucide React & Custom SVG Vector Icons
- **Deployment**: Vercel Free Hobby Plan

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

---

## 📦 Production Build

```bash
npm run build
```

The application is completely pre-rendered statically with Next.js SSG for optimal performance and zero hosting costs.

---

## 🌐 Deploy to Vercel (100% Free)

### Option 1: Automatic GitHub Import (Recommended)

1. Create a new repository on your GitHub account: `https://github.com/new` named `portfolio`.
2. Push this local repository to GitHub:
   ```bash
   git remote add origin https://github.com/Saurabhgupta10/portfolio.git
   git branch -M main
   git push -u origin main
   ```
3. Visit [vercel.com](https://vercel.com) and click **"Add New..." > "Project"**.
4. Select the `portfolio` repository from your GitHub account.
5. Keep default settings and click **Deploy**. Vercel will deploy it in under 60 seconds with a free `.vercel.app` subdomain!

### Option 2: Deploy via Vercel CLI

```bash
npx vercel login
npx vercel --prod
```

---

## 🔄 Adding New Projects

All projects are managed centrally in `src/data/portfolioData.ts`.

To add a new project:
1. Open `src/data/portfolioData.ts`.
2. Add your project object to the `PROJECTS` array:
   ```ts
   {
     slug: "your-project-slug",
     title: "Project Name",
     tagline: "Short tagline",
     category: "Full-Stack",
     description: "Summary...",
     technologies: ["Next.js", "PostgreSQL", ...],
     keyFeatures: [...],
     problem: "Problem description...",
     solution: "Solution description...",
     challenges: "Challenges overcome...",
     githubUrl: "https://github.com/...",
     isLive: true,
     liveDemoUrl: "https://...",
     featured: true,
     accentColor: "from-blue-500/20 to-indigo-500/20"
   }
   ```
3. The home page and the `/projects/[slug]` case study page will update automatically!
