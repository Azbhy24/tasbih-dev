import { useState } from "react";
import { ArrowDown, Mail, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { motion } from "motion/react";
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
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#08080a]"
    >
      {/* Subtle Editorial Rule and Background Grid */}
      <div className="absolute inset-0 editorial-grid opacity-30 pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Top Minimal Editorial Tag */}
        <div className="flex items-center justify-between border-b border-neutral-800/80 pb-4 mb-10 sm:mb-14">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
              00 / PERSONAL IDENTITY
            </span>
            <span className="text-neutral-700 font-mono">/</span>
            <span className="font-mono text-[11px] uppercase tracking-widest text-emerald-400">
              TASBIH (AZBHY)
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-neutral-400 font-mono text-[11px] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-neutral-500" />
            <span>Parepare, Sulawesi Selatan</span>
          </div>
        </div>

        {/* Main Grid: Asymmetric Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Typographic Identity */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
                S1 MANAJEMEN PENDIDIKAN ISLAM • PRAKTISI DIGITAL
              </span>
            </div>

            {/* Massive Typographic Anchor: TASBIH */}
            <h1
              id="hero-main-title"
              className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.25rem] font-black tracking-tighter text-white leading-[0.88] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              TASBIH<span className="text-neutral-500 font-sans">.</span>
            </h1>

            {/* Lead Subtitle in refined high-contrast weight */}
            <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-semibold text-neutral-200 tracking-tight leading-snug">
              Praktisi Manajemen, Administrasi Terstruktur, & Solusi Digital.
            </p>

            {/* Editorial Bio Statement */}
            <p
              id="hero-bio-para"
              className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed font-normal"
            >
              Berbekal latar belakang S1 Manajemen Pendidikan Islam (IAIN Parepare), saya menggabungkan disiplin tata kelola organisasi, pembukuan ritel, validasi riset lapangan, serta perancangan aplikasi web yang nyata dan fungsional.
            </p>

            {/* Micro Highlights / Quick Facts */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 my-8 pt-6 border-t border-neutral-800/80">
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                  AKADEMIK
                </span>
                <span className="font-mono text-xs font-semibold text-neutral-200 mt-1 block">
                  S1 MPI IAIN Parepare
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                  KEPEMIMPINAN
                </span>
                <span className="font-mono text-xs font-semibold text-neutral-200 mt-1 block">
                  Ketua IKA Alumni
                </span>
              </div>
              <div>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                  DEVELOPMENT
                </span>
                <span className="font-mono text-xs font-semibold text-neutral-200 mt-1 block">
                  React • TS • Firebase
                </span>
              </div>
            </div>

            {/* Direct Action CTAs */}
            <div
              id="hero-actions"
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                id="hero-action-portfolio"
                onClick={() => onNavigate("projects")}
                className="px-6 py-3.5 bg-white hover:bg-neutral-200 text-neutral-950 font-mono text-xs font-bold uppercase tracking-wider rounded transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-lg active:scale-95"
              >
                <span>Lihat Produk & Solusi</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                id="hero-action-contact"
                onClick={() => onNavigate("contact")}
                className="px-6 py-3.5 border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800 text-neutral-200 hover:text-white font-mono text-xs font-semibold uppercase tracking-wider rounded transition-all duration-200 flex items-center gap-2 cursor-pointer active:scale-95"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Hubungi Langsung</span>
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="w-full max-w-[380px] bg-neutral-900/60 border border-neutral-800 rounded-xl p-4 sm:p-5 relative">
              
              {/* Top Selector: Dual Perspective */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800/80">
                <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  PORTRAIT SELECTION
                </span>
                <div className="flex gap-1 bg-neutral-950 p-1 rounded border border-neutral-800">
                  <button
                    id="hero-toggle-almet"
                    onClick={() => setActivePhoto("almet")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      activePhoto === "almet"
                        ? "bg-neutral-800 text-white font-bold"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    Akademik
                  </button>
                  <button
                    id="hero-toggle-jas"
                    onClick={() => setActivePhoto("jas")}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                      activePhoto === "jas"
                        ? "bg-neutral-800 text-white font-bold"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    Profesional
                  </button>
                </div>
              </div>

              {/* Portrait Frame */}
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden bg-neutral-950 border border-neutral-800 group">
                <img
                  src={activePhoto === "almet" ? almetImage : jasImage}
                  alt={activePhoto === "almet" ? "Tasbih - Akademik S1 MPI" : "Tasbih - Profesional & Digital"}
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Clean Editorial Caption Overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-transparent p-4 flex flex-col justify-end">
                  <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400 font-semibold">
                    {activePhoto === "almet" ? "S1 MANAJEMEN PENDIDIKAN ISLAM" : "PRAKTISI OPERASIONAL & DIGITAL"}
                  </span>
                  <p className="text-sm font-bold text-white mt-0.5">
                    {activePhoto === "almet" ? "IAIN Parepare • Rekam Akademik" : "Digital Builder • Solusi Nyata"}
                  </p>
                </div>
              </div>

              {/* Bottom Metadata */}
              <div className="mt-3.5 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                <span className="text-neutral-500">KOTA ASAL</span>
                <span className="text-neutral-200">Parepare / Pinrang, Sulsel</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
