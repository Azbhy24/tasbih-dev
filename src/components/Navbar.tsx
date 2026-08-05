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
    { id: "principal-evaluations", label: "Audit Kepsek" },
    { id: "vision", label: "Vision" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm" 
          : "bg-slate-50/80 backdrop-blur-sm py-5 border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo inside premium container */}
        <button
          id="brand-logo-btn"
          onClick={() => onNavigate("hero")}
          className="group flex items-center gap-2.5 text-slate-900 hover:opacity-90 cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md group-hover:scale-105 transition-all duration-200 border border-indigo-200 bg-slate-900">
            <img src="/favicon.svg" alt="Azbhy Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-extrabold tracking-widest text-sm uppercase text-slate-900">
            AZBHY<span className="text-indigo-600">.</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg border border-slate-200">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-link-${link.id}`}
                onClick={() => onNavigate(link.id)}
                className={`relative px-3.5 py-1.5 rounded-md text-[11px] font-bold tracking-wider uppercase transition-all cursor-pointer ${
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

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded border border-emerald-200">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>Siap Kerja & Kemitraan</span>
          </div>
          <button
            id="nav-partner-btn"
            onClick={() => onNavigate("contact")}
            className="group px-4 py-2 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-bold text-[11px] tracking-wider uppercase rounded flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          >
            <span className="relative z-10">Kontak / Recruit</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-white" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          id="mobile-nav-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center p-2 text-slate-700 hover:text-slate-900 cursor-pointer"
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
            className="md:hidden border-b border-slate-200 bg-white shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
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
                    className={`flex items-center justify-between text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded transition-colors ${
                      isActive 
                        ? "bg-indigo-50 text-indigo-700 font-bold border border-indigo-200" 
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && <Sparkles className="w-4 h-4 text-indigo-600" />}
                  </button>
                );
              })}
              
              <button
                id="mobile-drawer-cta"
                onClick={() => {
                  setIsOpen(false);
                  onNavigate("contact");
                }}
                className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-center text-xs tracking-wider uppercase rounded mt-2 flex items-center justify-center gap-1.5 shadow-sm"
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
