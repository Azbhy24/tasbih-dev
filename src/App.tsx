import { useState, useEffect } from "react";
import { ArrowUp, Terminal, Shield, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Impact from "./components/Impact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Intersection Scroll Spy logic to active tabs
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ["hero", "about", "impact", "experience", "projects", "skills", "vision", "contact"];
      const scrollPos = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div id="app-root-layout" className="min-h-screen text-[#F3F4F6] relative font-sans">
      {/* Background Grid Accent Mesh */}
      <div className="absolute inset-0 grid-mesh opacity-[0.15] pointer-events-none" />

      {/* Main Glassmorphic Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Sections */}
      <main id="main-content-flow">
        <Hero onNavigate={handleNavigate} />
        <About />
        <Impact />
        <Experience />
        <Projects />
        <Skills />
        <Vision />
        <Contact />
      </main>

      {/* Consolidated Footer Panel */}
      <footer id="footer-panel" className="relative py-12 border-t border-zinc-800 bg-[#09090B]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-sans text-base font-bold text-white tracking-widest uppercase">
              AZ<span className="text-[#10b981]">BHY</span> PORTFOLIO
            </span>
            <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              Connecting Education, Business & Tech
            </span>
          </div>

          {/* Quick legal/copyright statements */}
          <div className="text-center md:text-left text-xs text-zinc-500 font-mono">
            &copy; {new Date().getFullYear()} Azbhy. All rights reserved. 
            <span className="mx-2 text-zinc-800">|</span> 
            Crafted for Tasbih (Aby Bhy) Professional Profile
          </div>

          {/* Quick links list */}
          <div className="flex items-center gap-6 text-xs font-mono text-zinc-400">
            <button 
              id="footer-nav-to-top"
              onClick={() => handleNavigate("hero")} 
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </footer>

      {/* Top Floating back Scroll trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="floating-scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleNavigate("hero")}
            className="fixed bottom-6 right-6 z-40 p-3 bg-white hover:bg-zinc-200 text-[#09090B] rounded-full shadow-lg shadow-black/20 active:scale-95 transition-all cursor-pointer"
            title="Scroll back to Top"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
