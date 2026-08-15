import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "about", label: "Tentang" },
    { id: "projects", label: "Karya / Projects" },
    { id: "experience", label: "Pengalaman" },
    { id: "education", label: "Pendidikan" },
    { id: "skills", label: "Toolkit" },
    { id: "contact", label: "Kontak" },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="navbar-header"
      className={`sticky top-0 z-50 transition-all duration-300 px-4 sm:px-6 pt-3 pb-3 ${
        isScrolled
          ? "bg-[#f7f6f2]/90 backdrop-blur-md border-b border-stone-300/70 shadow-xs"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <button
          onClick={() => handleLinkClick("hero")}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="relative flex items-center justify-center">
            <span className="w-9 h-9 rounded-xl bg-stone-900 text-stone-100 font-extrabold text-sm flex items-center justify-center border border-stone-800 transition-transform group-hover:scale-105 shadow-2xs font-mono">
              TB
            </span>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#f7f6f2]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-stone-900 tracking-tight text-base leading-none">
                Tasbih
              </span>
              <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-stone-200/80 text-stone-700">
                AzBhy
              </span>
            </div>
            <span className="text-[11px] text-stone-500 font-medium leading-tight mt-0.5 flex items-center gap-1">
              <span>S1 Manajemen Pendidikan Islam</span>
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 p-1.5 rounded-full border border-stone-200/90 shadow-2xs backdrop-blur-xs">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "text-stone-900 bg-stone-100 shadow-2xs"
                    : "text-stone-600 hover:text-stone-900 hover:bg-stone-50"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center gap-2.5">
          <button
            onClick={() => handleLinkClick("contact")}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-stone-100 text-xs font-semibold tracking-wide transition-all shadow-2xs active:scale-[0.98] cursor-pointer"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => handleLinkClick("contact")}
            className="px-3 py-1.5 rounded-lg bg-stone-900 text-stone-100 text-xs font-semibold flex items-center gap-1"
          >
            <span>Hubungi</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:bg-stone-50 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden mt-3 p-4 bg-white rounded-2xl border border-stone-200 shadow-xl space-y-2 text-left"
          >
            <div className="px-2 py-1 mb-2 border-b border-stone-100 pb-2">
              <span className="text-[11px] font-mono text-stone-400 uppercase tracking-wider block">
                Navigasi Portfolio
              </span>
              <p className="text-xs font-medium text-stone-600 mt-0.5">
                Tasbih — S1 Manajemen Pendidikan Islam
              </p>
            </div>
            
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`w-full text-left px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-stone-100 text-stone-900"
                      : "text-stone-600 hover:bg-stone-50 hover:text-stone-900"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />}
                </button>
              );
            })}

            <div className="pt-2 border-t border-stone-100">
              <button
                onClick={() => handleLinkClick("contact")}
                className="w-full py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold flex items-center justify-center gap-2"
              >
                <span>Mulai Percakapan</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
