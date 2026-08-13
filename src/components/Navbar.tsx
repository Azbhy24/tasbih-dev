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
    { id: "contact", label: "Kontak" },
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
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 py-2.5 shadow-lg shadow-black/40" 
          : "bg-slate-950/60 backdrop-blur-md py-3.5 border-b border-slate-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo inside premium container */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-2 text-white hover:opacity-90 cursor-pointer"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:scale-105 group-hover:border-indigo-400 transition-all duration-200 border border-indigo-500/40 bg-slate-900 shrink-0">
            <img src="/favicon.svg?v=2" alt="Azbhy Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-extrabold tracking-widest text-xs sm:text-sm uppercase text-white">
            AZBHY<span className="text-indigo-400">.</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800/90 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-1.5 rounded-lg text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
                  isActive 
                    ? "text-indigo-300 font-extrabold" 
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    id="active-tab-glow"
                    className="absolute inset-0 bg-indigo-600/30 rounded-lg border border-indigo-500/50 shadow-[0_0_12px_rgba(99,102,241,0.3)]"
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
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
            <span>Terbuka untuk Peluang Kerja</span>
          </div>
          <button
            id="nav-partner-btn"
            onClick={() => handleNavClick("contact")}
            className="group px-3.5 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 active:scale-[0.98] text-white font-bold text-[11px] tracking-wider uppercase rounded-xl flex items-center gap-1 transition-all shadow-[0_0_15px_rgba(99,102,241,0.3)] cursor-pointer border border-indigo-400/30"
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
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700/80 text-indigo-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-colors cursor-pointer shadow-sm"
          >
            {isOpen ? (
              <>
                <X className="w-4 h-4 text-indigo-400" />
                <span>Tutup</span>
              </>
            ) : (
              <>
                <MoreVertical className="w-4 h-4 text-indigo-400" />
                <Menu className="w-4 h-4 text-indigo-400" />
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
            className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl shadow-2xl overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1.5 max-h-[75vh] overflow-y-auto">
              <div className="text-[10px] font-mono font-bold text-indigo-400/80 uppercase tracking-widest px-2 pb-1 border-b border-slate-800">
                NAVIGASI MENU UTAMA
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl transition-all text-left ${
                      isActive 
                        ? "bg-indigo-600 text-white font-extrabold shadow-[0_0_15px_rgba(99,102,241,0.4)] border border-indigo-400/40" 
                        : "text-slate-300 hover:bg-slate-900 active:bg-slate-800"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive ? (
                      <Sparkles className="w-4 h-4 text-amber-300" />
                    ) : (
                      <span className="text-[10px] font-mono text-slate-500">→</span>
                    )}
                  </button>
                );
              })}
              
              <button
                id="mobile-drawer-cta"
                onClick={() => handleNavClick("contact")}
                className="w-full py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-extrabold text-center text-xs tracking-wider uppercase rounded-xl mt-3 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(99,102,241,0.3)] border border-indigo-400/30"
              >
                <span>Kontak & Hubungi</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
