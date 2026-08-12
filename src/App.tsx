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
    <div id="app-root-layout" className="min-h-screen text-slate-900 bg-slate-50 relative font-sans">
      {/* Background Grid Accent Mesh */}
      <div className="absolute inset-0 grid-mesh opacity-30 pointer-events-none" />

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
      <footer id="footer-panel" className="relative py-12 border-t border-slate-200 bg-white/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Signature */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-sans text-base font-bold text-slate-900 tracking-widest uppercase">
              AZ<span className="text-indigo-600">BHY</span> PORTFOLIO
            </span>
            <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
              S1 Manajemen Pendidikan Islam • Web & Automation Specialist
            </span>
          </div>

          {/* Quick legal/copyright statements */}
          <div className="text-center md:text-left text-xs text-slate-600 font-mono">
            &copy; {new Date().getFullYear()} Tasbih (Azbhy). All rights reserved. 
            <span className="mx-2 text-slate-300">|</span> 
            Portofolio Resmi & Rekam Jejak Professional
          </div>

          {/* Quick links list */}
          <div className="flex items-center gap-6 text-xs font-mono text-slate-600">
            <button 
              id="footer-nav-to-top"
              onClick={() => handleNavigate("hero")} 
              className="flex items-center gap-1.5 hover:text-indigo-600 transition-colors cursor-pointer font-medium"
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
            className="fixed bottom-6 right-6 z-40 p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg shadow-indigo-600/30 active:scale-95 transition-all cursor-pointer"
            title="Scroll back to Top"
          >
            <ArrowUp className="w-5 h-5 font-bold" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
