import { useState } from "react";
import { ArrowDown, Mail, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "../data/portfolio";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { bio } = portfolioData;
  const [activePhoto, setActivePhoto] = useState<"almet" | "jas">("almet");

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-[#08080a]"
    >
      {/* Chapter 01 Background: Dark Editorial Charcoal with Subtle Vignette */}
      <div className="absolute inset-0 editorial-grid opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#08080a]/50 to-[#08080a] pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 01 Header Anchor */}
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-3 sm:pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-emerald-400 font-bold bg-emerald-950/50 border border-emerald-500/30 px-2 py-0.5 rounded">
              CHAPTER 01
            </span>
            <span className="text-neutral-700 font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              IDENTITY & PERSONAL STORY
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-[10px] sm:text-[11px] uppercase tracking-wider">
            <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
            <span>Parepare / Pinrang, Sulsel</span>
          </div>
        </div>

        {/* Main Grid: Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typographic Anchor */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-1">
            
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-neutral-400">
                S1 MANAJEMEN PENDIDIKAN ISLAM • PRAKTISI DIGITAL
              </span>
            </div>

            {/* Massive Typographic Anchor: TASBIH */}
            <h1
              id="hero-main-title"
              className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] font-black tracking-tighter text-white leading-[0.92] sm:leading-[0.88] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              TASBIH<span className="text-emerald-400 font-sans">.</span>
            </h1>

            {/* Lead Subtitle */}
            <p className="mt-4 sm:mt-5 text-lg sm:text-2xl md:text-3xl font-semibold text-neutral-200 tracking-tight leading-snug">
              Manajemen Pendidikan Islam <span className="text-emerald-400 font-mono text-base sm:text-xl font-normal">&times;</span> Rekayasa Solusi Digital
            </p>

            {/* Editorial Compressed Bio Statement */}
            <p
              id="hero-bio-para"
              className="mt-3 text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl leading-relaxed font-normal"
            >
              Lulusan S1 MPI (IAIN Parepare) yang mengawinkan tata kelola organisasi, pembukuan ritel harian, dan pengembangan aplikasi web fungsional.
            </p>

            {/* Personal Metadata Strip - Level 2 Evidence */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-6 sm:my-8 pt-4 sm:pt-6 border-t border-neutral-800/80">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900/60 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                <span className="text-neutral-500 font-bold">AKADEMIK</span>
                <span className="text-emerald-400 font-bold">•</span>
                <span>S1 MPI IAIN Parepare</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900/60 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                <span className="text-neutral-500 font-bold">LEADERSHIP</span>
                <span className="text-emerald-400 font-bold">•</span>
                <span>Ketua IKA (178 Alumni)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-neutral-900/60 border border-neutral-800 text-[11px] font-mono text-neutral-300">
                <span className="text-neutral-500 font-bold">STACK</span>
                <span className="text-emerald-400 font-bold">•</span>
                <span>React • TS • Firebase</span>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div
              id="hero-actions"
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <button
                id="hero-action-portfolio"
                onClick={() => onNavigate("about")}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 bg-white hover:bg-neutral-200 active:bg-neutral-300 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-[0.98] select-none"
              >
                <span>Mulai Membaca Cerita</span>
                <ArrowDown className="w-4 h-4 text-neutral-950" />
              </button>

              <button
                id="hero-action-contact"
                onClick={() => onNavigate("contact")}
                className="w-full sm:w-auto min-h-[48px] px-6 py-3.5 border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 active:bg-neutral-700 text-neutral-200 hover:text-white font-mono text-xs font-semibold uppercase tracking-wider rounded transition-all duration-150 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] select-none"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Hubungi Langsung</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Showcase (Natural Color) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end order-2 mt-2 lg:mt-0">
            <div className="w-full max-w-[340px] sm:max-w-[380px] bg-neutral-900/60 border border-neutral-800 rounded-2xl p-3.5 sm:p-5 relative shadow-2xl">
              
              {/* Top Selector: Dual Perspective with Touch-Friendly Buttons */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/80">
                <span className="font-mono text-[9px] sm:text-[10px] font-bold text-neutral-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-emerald-400" />
                  PERSPEKTIF FOTO
                </span>
                <div className="flex gap-1 bg-neutral-950 p-1 rounded-md border border-neutral-800">
                  <button
                    id="hero-toggle-almet"
                    onClick={() => setActivePhoto("almet")}
                    className={`min-h-[36px] px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer select-none ${
                      activePhoto === "almet"
                        ? "bg-neutral-800 text-white font-bold shadow-sm"
                        : "text-neutral-400 hover:text-neutral-200 active:bg-neutral-900"
                    }`}
                  >
                    Akademik
                  </button>
                  <button
                    id="hero-toggle-jas"
                    onClick={() => setActivePhoto("jas")}
                    className={`min-h-[36px] px-3 py-1.5 rounded text-[11px] font-mono uppercase tracking-wider transition-colors cursor-pointer select-none ${
                      activePhoto === "jas"
                        ? "bg-neutral-800 text-white font-bold shadow-sm"
                        : "text-neutral-400 hover:text-neutral-200 active:bg-neutral-900"
                    }`}
                  >
                    Profesional
                  </button>
                </div>
              </div>

              {/* Portrait Frame in Crisp Natural Color */}
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-inner">
                <img
                  src={activePhoto === "almet" ? almetImage : jasImage}
                  alt={activePhoto === "almet" ? "Tasbih - Akademik S1 MPI IAIN Parepare" : "Tasbih - Praktisi Digital & Operasional"}
                  className="w-full h-full object-cover object-top transition-opacity duration-300"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Editorial Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/80 to-transparent p-3.5 sm:p-4 flex flex-col justify-end">
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-wider text-emerald-400 font-bold">
                    {activePhoto === "almet" ? "S1 MANAJEMEN PENDIDIKAN ISLAM" : "PRAKTISI OPERASIONAL & DIGITAL"}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-white mt-0.5 leading-snug">
                    {activePhoto === "almet" ? "IAIN Parepare • Rekam Akademis" : "Digital Builder • Solusi Nyata"}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="mt-3 pt-2.5 sm:pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-neutral-400">
                <span className="text-neutral-500">DOMISILI</span>
                <span className="text-neutral-200">Parepare / Pinrang, Sulsel</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
