import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    setTimeout(() => {
      onNavigate(sectionId);
    }, 60);
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#08080a]/95 backdrop-blur-md border-b border-neutral-800/80 py-2.5 shadow-lg shadow-black/70" 
          : "bg-[#08080a]/80 backdrop-blur-sm py-3 border-b border-neutral-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand Logo & Identifier */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-2.5 text-white hover:opacity-90 cursor-pointer min-h-[44px] touch-target select-none"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900 shrink-0">
            <img src="/favicon.svg?v=2" alt="Tasbih" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-mono font-bold tracking-widest text-xs uppercase text-white leading-none">
              TASBIH<span className="text-emerald-400">.</span>
            </span>
            <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider mt-0.5 sm:hidden">
              S1 MPI • DIGITAL
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-1 bg-neutral-900/90 p-1 rounded-lg border border-neutral-800 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-1.5 rounded-md text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer select-none ${
                  isActive 
                    ? "text-white font-bold" 
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    id="active-tab-glow"
                    className="absolute inset-0 bg-neutral-800 rounded-md border border-neutral-700"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Desktop Hire Status */}
          <div className="hidden sm:flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span>Available</span>
          </div>

          {/* Direct Contact Button (Desktop & Tablet) */}
          <button
            id="nav-partner-btn"
            onClick={() => handleNavClick("contact")}
            className="hidden sm:flex group px-3.5 py-1.5 bg-white hover:bg-neutral-200 text-neutral-950 font-mono font-bold text-xs uppercase rounded-md items-center gap-1.5 transition-all cursor-pointer active:scale-95 min-h-[36px]"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          {/* Mobile Menu Toggle Button - 44px min touch target */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden flex items-center justify-center gap-1.5 px-3 py-2 min-h-[44px] min-w-[44px] rounded-lg bg-neutral-900 border border-neutral-700 text-neutral-200 text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 active:bg-neutral-700 transition-colors cursor-pointer select-none"
          >
            {isOpen ? (
              <>
                <X className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-bold">Tutup</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 text-emerald-400" />
                <span className="text-[11px] font-bold">Menu</span>
              </>
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="lg:hidden border-b border-neutral-800 bg-[#0c0c10]/98 backdrop-blur-xl overflow-hidden shadow-2xl"
          >
            <div className="px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-2 pb-2 mb-1 border-b border-neutral-800/80">
                <span>INDEX NAVIGASI</span>
                <span className="text-emerald-400">PAREPARE, SULSEL</span>
              </div>

              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full min-h-[48px] py-3 px-4 rounded-lg text-left text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors active:scale-[0.99] select-none ${
                      isActive
                        ? "bg-neutral-800 text-white font-bold border border-neutral-700"
                        : "text-neutral-300 hover:text-white hover:bg-neutral-900 active:bg-neutral-800"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />}
                  </button>
                );
              })}
              
              <div className="pt-2 mt-2 border-t border-neutral-800/80 flex flex-col gap-2">
                <button
                  id="mobile-drawer-cta"
                  onClick={() => handleNavClick("contact")}
                  className="w-full min-h-[48px] py-3 px-4 bg-white hover:bg-neutral-200 text-neutral-950 font-mono font-bold text-xs uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 cursor-pointer active:scale-95 transition-all shadow-md"
                >
                  <span>Hubungi Langsung</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
