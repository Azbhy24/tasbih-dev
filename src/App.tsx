import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Currently from "./components/Currently";
import Contact from "./components/Contact";
import InstallPromptModal from "./components/InstallPromptModal";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll spy logic
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);

      const sections = ["hero", "about", "projects", "experience", "education", "skills", "contact"];
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
    
    const scrollTarget = () => {
      const el = document.getElementById(sectionId);
      if (el) {
        const header = document.getElementById("navbar-header");
        const headerHeight = header ? header.offsetHeight : 64;
        const targetPosition = el.getBoundingClientRect().top + window.scrollY - headerHeight;

        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: "smooth"
        });
      }
    };

    scrollTarget();
  };

  return (
    <div 
      id="app-root-layout" 
      className="min-h-screen bg-[#fafafa] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900 antialiased"
    >
      {/* Sticky Clean Navbar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main id="main-content-flow" className="w-full">
        {/* 1. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. About Section */}
        <About />

        {/* 3. Featured Projects Showcase */}
        <Projects />

        {/* 4. Experience & Activities Timeline */}
        <Experience />

        {/* 5. Education & Academic Highlights */}
        <Education />

        {/* 6. Skills / What I Work With */}
        <Skills />

        {/* 7. Currently Status */}
        <Currently />

        {/* 8. Contact & Footer */}
        <Contact />
      </main>

      {/* Subtle Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="floating-scroll-top-btn"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => handleNavigate("hero")}
            className="fixed bottom-6 right-6 z-40 p-2.5 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300 hover:bg-slate-50 transition-all shadow-sm cursor-pointer flex items-center justify-center min-h-[44px] min-w-[44px]"
            title="Kembali ke atas"
            aria-label="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Lightweight PWA shortcut modal */}
      <InstallPromptModal />
    </div>
  );
}
