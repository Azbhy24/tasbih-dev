import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
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
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "impact", label: "Impact" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "vision", label: "Vision" },
    { id: "contact", label: "Hubungi Kemitraan" },
  ];

  const handleNavClick = (sectionId: string) => {
    setIsOpen(false);
    // Execute smooth scroll after menu toggle animation allows DOM height stability
    setTimeout(() => {
      onNavigate(sectionId);
    }, 50);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 py-2.5 shadow-sm" 
          : "bg-slate-50/90 backdrop-blur-sm py-3.5 border-b border-slate-200/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo inside premium container */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-2 text-slate-900 hover:opacity-90 cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-all duration-200 border border-indigo-200 bg-slate-900 shrink-0">
            <img src="/favicon.svg" alt="Azbhy Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-extrabold tracking-widest text-xs sm:text-sm uppercase text-slate-900">
            AZBHY<span className="text-indigo-600">.</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg border border-slate-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-1.5 rounded-md text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive 
                    ? "text-indigo-700" 
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    id="active-tab-glow"
                    className="absolute inset-0 bg-white rounded-md border border-slate-200 shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA Button Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Siap Kerja & Kemitraan</span>
          </div>
          <button
            id="nav-partner-btn"
            onClick={() => handleNavClick("contact")}
            className="group px-3.5 py-1.5 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold text-[11px] tracking-wider uppercase rounded flex items-center gap-1 transition-all shadow-sm cursor-pointer"
          >
            <span className="relative z-10">Kontak</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
          </button>
        </div>

        {/* Mobile Navigation Toggle (Supports both Hamburger & 3 Dots) */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-bold uppercase tracking-wider hover:bg-indigo-100 transition-colors cursor-pointer shadow-2xs"
          >
            {isOpen ? (
              <>
                <X className="w-4 h-4 text-indigo-600" />
                <span>Tutup</span>
              </>
            ) : (
              <>
                <MoreVertical className="w-4 h-4 text-indigo-600" />
                <Menu className="w-4 h-4 text-indigo-600" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xl overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1.5 max-h-[75vh] overflow-y-auto">
              <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest px-2 pb-1 border-b border-slate-100">
                NAVIGASI MENU UTAMA
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-lg transition-all text-left ${
                      isActive 
                        ? "bg-indigo-600 text-white font-extrabold shadow-sm" 
                        : "text-slate-700 hover:bg-slate-100 active:bg-slate-200"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    ) : (
                      <span className="text-[10px] font-mono opacity-60">→</span>
                    )}
                  </button>
                );
              })}
              
              <button
                id="mobile-drawer-cta"
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-extrabold text-center text-xs tracking-wider uppercase rounded-xl mt-3 flex items-center justify-center gap-2 shadow-md"
              >
                <span>Hubungi / Kemitraan</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
