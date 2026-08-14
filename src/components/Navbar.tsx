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
          ? "bg-[#08080a]/90 backdrop-blur-md border-b border-neutral-800/80 py-2.5 shadow-md shadow-black/60" 
          : "bg-[#08080a]/60 backdrop-blur-sm py-3 border-b border-neutral-800/40"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo inside premium container */}
        <button
          id="brand-logo-btn"
          onClick={() => handleNavClick("hero")}
          className="group flex items-center gap-2.5 text-white hover:opacity-90 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900 shrink-0">
            <img src="/favicon.svg?v=2" alt="Azbhy Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-mono font-bold tracking-widest text-xs uppercase text-white">
            TASBIH<span className="text-emerald-400">.</span>CV
          </span>
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
                className={`relative px-3 py-1 rounded-md text-[11px] font-mono uppercase tracking-wider transition-all cursor-pointer ${
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

        {/* CTA Button Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center space-x-2 text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-500/30">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div>
            <span>Available for Hire</span>
          </div>
          <button
            id="nav-partner-btn"
            onClick={() => handleNavClick("contact")}
            className="group px-3 py-1 bg-white hover:bg-neutral-200 text-neutral-950 font-mono font-medium text-[11px] uppercase rounded-md flex items-center gap-1 transition-all cursor-pointer"
          >
            <span className="relative z-10">Contact</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-700 text-neutral-300 text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {isOpen ? (
              <>
                <X className="w-4 h-4 text-emerald-400" />
                <span>Close</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 text-emerald-400" />
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
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden border-b border-neutral-800 bg-[#0d0d11]/95 backdrop-blur-md overflow-hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
              <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest px-2 pb-1 border-b border-neutral-800">
                NAVIGATION
              </div>
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`w-full py-2 px-3 rounded text-left text-xs font-mono uppercase tracking-wider transition-colors ${
                      isActive
                        ? "bg-neutral-800 text-white font-bold border border-neutral-700"
                        : "text-neutral-400 hover:text-white hover:bg-neutral-900"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              
              <button
                id="mobile-drawer-cta"
                onClick={() => handleNavClick("contact")}
                className="w-full py-2.5 bg-white hover:bg-neutral-200 text-neutral-950 font-mono font-medium text-xs uppercase rounded-md mt-2 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Contact Direct</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
