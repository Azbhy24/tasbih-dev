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
    setActiveSection(sectionId);
    
    // Smooth scroll calculation with offset for header height
    const scrollTarget = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const header = document.getElementById("navbar-header");
        const headerHeight = header ? header.offsetHeight : 70;
        const targetPosition = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth"
        });
      }
    };

    // Execute immediately and once after a micro-delay for smooth layout adjustment
    scrollTarget();
    setTimeout(scrollTarget, 100);
  };

  return (
    <div id="app-root-layout" className="min-h-screen text-neutral-100 bg-[#08080a] relative font-sans selection:bg-emerald-500 selection:text-black">
      {/* Background Grid Accent Mesh */}
      <div className="absolute inset-0 grid-mesh opacity-5 pointer-events-none" />

      {/* Main Header */}
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
      <footer id="footer-panel" className="relative py-10 border-t border-neutral-800/80 bg-[#08080a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-mono text-sm font-bold text-white tracking-widest uppercase">
              TASBIH <span className="text-emerald-400">/</span> PORTFOLIO
            </span>
            <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
              S1 Manajemen Pendidikan Islam • Web & Digital Systems
            </span>
          </div>

          {/* Quick legal/copyright statements */}
          <div className="text-center md:text-left text-xs text-neutral-500 font-mono">
            &copy; {new Date().getFullYear()} Tasbih (Aby Bhy). Designed with Read.cv aesthetic.
          </div>

          {/* Quick links list */}
          <div className="flex items-center gap-6 text-xs font-mono text-neutral-400">
            <button 
              id="footer-nav-to-top"
              onClick={() => handleNavigate("hero")} 
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-400" />
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
            className="fixed bottom-6 right-6 z-40 p-2.5 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg shadow-lg active:scale-95 transition-all cursor-pointer border border-neutral-700"
            title="Scroll back to Top"
          >
            <ArrowUp className="w-4 h-4 text-emerald-400" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
