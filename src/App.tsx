import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Impact from "./components/Impact";
import Vision from "./components/Vision";
import Contact from "./components/Contact";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Intersection Scroll Spy logic for active chapter tracking
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 350);

      const sections = ["hero", "about", "skills", "projects", "experience", "impact", "vision", "contact"];
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

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    
    // Smooth scroll calculation with offset for sticky header height
    const scrollTarget = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const header = document.getElementById("navbar-header");
        const headerHeight = header ? header.offsetHeight : 64;
        const targetPosition = el.getBoundingClientRect().top + window.scrollY - headerHeight - 8;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth"
        });
      }
    };

    scrollTarget();
    setTimeout(scrollTarget, 80);
  };

  return (
    <div id="app-root-layout" className="min-h-screen text-neutral-100 bg-[#08080a] relative font-sans selection:bg-emerald-500 selection:text-black overflow-x-hidden w-full">
      {/* Main Chapter Navigation Header */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* 6 Narrative Story Chapters */}
      <main id="main-content-flow" className="w-full">
        {/* Chapter 01: Identity */}
        <Hero onNavigate={handleNavigate} />

        {/* Chapter 02: Manajemen & Pendidikan */}
        <About />
        <Skills />

        {/* Chapter 03: Digital Products & Technology */}
        <Projects />

        {/* Chapter 04: Experience & Leadership */}
        <Experience />
        <Impact />

        {/* Chapter 05: Vision & Manifesto */}
        <Vision />

        {/* Chapter 06: Contact & Community */}
        <Contact />
      </main>

      {/* Footer */}
      <footer id="footer-panel" className="relative py-8 sm:py-10 border-t border-neutral-800/80 bg-[#08080a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 text-center md:text-left">
          
          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-widest uppercase">
              TASBIH <span className="text-emerald-400">/</span> DIGITAL STORY
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              S1 Manajemen Pendidikan Islam • Praktisi Digital & Operasional
            </span>
          </div>

          {/* Location & Copyright */}
          <div className="text-xs text-neutral-500 font-mono">
            &copy; {new Date().getFullYear()} Tasbih (AzBhy). Parepare / Pinrang, Sulawesi Selatan.
          </div>

          {/* Back to top */}
          <div className="flex items-center gap-6 text-xs font-mono text-neutral-400">
            <button 
              id="footer-nav-to-top"
              onClick={() => handleNavigate("hero")} 
              className="min-h-[40px] px-3 py-1 flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer select-none"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
            </button>
          </div>

        </div>
      </footer>

      {/* Floating Scroll-to-Top Button (>= 44px touch target) */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="floating-scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleNavigate("hero")}
            className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 p-3 min-h-[44px] min-w-[44px] flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 active:bg-neutral-700 text-white rounded-xl shadow-xl active:scale-95 transition-all cursor-pointer border border-neutral-700 select-none"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4 text-emerald-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
