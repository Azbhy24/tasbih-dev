import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
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
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-[#030306]/90 backdrop-blur-md border-b border-indigo-950/40 py-4 shadow-lg shadow-black/20" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo inside premium container */}
        <button
          id="brand-logo-btn"
          onClick={() => onNavigate("hero")}
          className="group flex items-center gap-2 text-white hover:opacity-90"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded flex items-center justify-center transition-all shadow-md group-hover:scale-105 duration-200">
            <span className="text-white font-black text-xs">AZ</span>
          </div>
          <span className="font-bold tracking-widest text-sm uppercase bg-gradient-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent">
            AZBHY
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-zinc-950/40 p-1 rounded-md border border-indigo-500/20 backdrop-blur-sm">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => onNavigate(link.id)}
                className={`relative px-4 py-1.5 rounded text-[10px] font-bold tracking-widest uppercase transition-all ${
                  isActive 
                    ? "text-white" 
                    : "text-zinc-400 hover:text-zinc-100"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabGlow"
                    id="active-tab-glow"
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-indigo-550/10 rounded border border-indigo-500/35 shadow-[0_0_12px_rgba(99,102,241,0.1)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-indigo-300 bg-[#030306] px-3 py-1.5 rounded border border-indigo-500/20 mr-2">
            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></div>
            <span>Ready for Partnership</span>
          </div>
          <button
            id="nav-partner-btn"
            onClick={() => onNavigate("contact")}
            className="group px-4 py-2 bg-indigo-650 hover:bg-indigo-550 active:scale-[0.98] text-white font-bold text-[10px] tracking-widest uppercase rounded flex items-center gap-1.5 transition-all shadow-md shadow-indigo-600/10 cursor-pointer border-none"
          >
            <span className="relative z-10">Partnership</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-zinc-400 hover:text-white"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden border-b border-zinc-900 bg-[#09090B]/95 backdrop-blur-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    id={`mobile-nav-link-${link.id}`}
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate(link.id);
                    }}
                    className={`flex items-center justify-between text-xs font-bold uppercase tracking-widest py-2.5 px-3 rounded transition-colors ${
                      isActive 
                        ? "bg-zinc-850 text-white font-bold" 
                        : "text-zinc-500 hover:text-white"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-white" />}
                  </button>
                );
              })}
              
              <button
                id="mobile-drawer-cta"
                onClick={() => {
                  setIsOpen(false);
                  onNavigate("contact");
                }}
                className="w-full py-3 bg-white hover:bg-zinc-200 text-[#09090B] font-bold text-center text-xs tracking-widest uppercase rounded mt-2 flex items-center justify-center gap-1.5"
              >
                <span>Mulai Kemitraan</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
