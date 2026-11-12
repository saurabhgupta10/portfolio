import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Services from "@/components/Services";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F2] text-[#292D29] flex flex-col transition-colors duration-300">
      <Navbar />
      <div className="flex-1">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <Services />
        <WhyWorkWithMe />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
