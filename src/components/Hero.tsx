import { useState } from "react";
import { 
  ArrowDown, 
  ArrowUpRight, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Sparkles,
  Layers,
  FileText
} from "lucide-react";
import { motion } from "motion/react";
import Magnetic from "./Magnetic";
import almetPhoto from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import formalPhoto from "../assets/images/jas_formal_1781399324196.jpg";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [activePhoto, setActivePhoto] = useState<"almet" | "formal">("formal");

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col justify-between pt-6 sm:pt-10 pb-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Top Editorial Status Row */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200/80 pb-4 text-xs text-stone-600 font-mono"
      >
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
          </span>
          <span className="font-semibold text-stone-900 tracking-tight">OPEN TO OPPORTUNITIES</span>
          <span className="text-stone-300 hidden sm:inline">•</span>
          <span className="hidden sm:inline text-stone-500">Education · Administration · Digital Operations</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-stone-500">
            <MapPin className="w-3.5 h-3.5 text-stone-400" />
            Parepare / Pinrang, Sulsel
          </span>
          <span className="text-stone-300">•</span>
          <span className="text-stone-700 font-medium">Vol. 2026</span>
        </div>
      </motion.div>

      {/* Main Editorial Hero Canvas */}
      <div className="my-auto py-8 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
        
        {/* Left / Typographic Column (7 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="lg:col-span-7 flex flex-col justify-center text-left space-y-6"
        >
          {/* Subtitle tag */}
          <div className="inline-flex items-center gap-2">
            <span className="text-xs font-mono font-bold tracking-widest text-blue-600 uppercase">
              S1 MANAJEMEN PENDIDIKAN ISLAM
            </span>
            <span className="text-stone-300">/</span>
            <span className="text-xs font-mono text-stone-500">FRESH GRADUATE · 2026</span>
          </div>

          {/* Monumental Headline */}
          <div className="space-y-1">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-stone-900 leading-[0.88] select-none font-display">
              TASBIH<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-stone-700 font-serif italic pt-2 tracking-tight">
              Menghubungkan Tata Kelola Pendidikan & Teknologi Terapan.
            </p>
          </div>

          {/* Editorial Concise Bio */}
          <p className="text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed font-normal">
            Lulusan S1 Manajemen Pendidikan Islam IAIN Parepare. Fokus pada administrasi institusi, tata kelola madrasah, pengarsipan terstruktur, dan pemanfaatan sistem digital untuk efisiensi kerja nyata.
          </p>

          {/* Personal Motto & Micro Metadata */}
          <div className="pt-1 flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-stone-500 font-mono">
            <div className="flex items-center gap-1.5 bg-stone-100 px-3 py-1.5 rounded-md border border-stone-200/60 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Motto: <strong className="text-stone-800 font-sans font-medium">"Small Steps. Consistent Progress."</strong></span>
            </div>
            <span className="hidden sm:inline text-stone-300">•</span>
            <span className="text-stone-500">IAIN Parepare (2022–2026)</span>
          </div>

          {/* Action CTAs with Dennis Snellenberg Magnetic Effect */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <Magnetic strength={0.35}>
              <button
                onClick={() => onNavigate("projects")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-stone-900 hover:bg-stone-800 text-stone-50 text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer group"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 text-blue-400 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </Magnetic>

            <Magnetic strength={0.35}>
              <button
                onClick={() => onNavigate("contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 text-sm font-semibold transition-all shadow-2xs hover:shadow-xs active:scale-[0.98] cursor-pointer group"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-stone-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </button>
            </Magnetic>
          </div>
        </motion.div>

        {/* Right / Visual Composition Frame (5 cols) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative flex flex-col items-center lg:items-end"
        >
          {/* Main Photo Frame */}
          <div className="relative w-full max-w-sm sm:max-w-md">
            
            {/* Background geometric accent plate */}
            <div className="absolute -inset-3 bg-stone-200/60 rounded-3xl -rotate-2 transform transition-transform" />
            <div className="absolute inset-0 bg-blue-600/10 rounded-2xl rotate-1 transform" />

            {/* Photo container */}
            <div className="relative z-10 bg-white p-3 rounded-2xl border border-stone-300/80 shadow-lg overflow-hidden">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-stone-100">
                <img 
                  src={activePhoto === "formal" ? formalPhoto : almetPhoto} 
                  alt="Tasbih - S1 Manajemen Pendidikan Islam"
                  className="w-full h-full object-cover object-top transition-all duration-500 filter contrast-[1.02]"
                />

                {/* Overlaid minimal tag */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2 rounded-lg bg-stone-900/80 backdrop-blur-md text-stone-100 text-xs font-mono">
                  <span className="truncate">
                    {activePhoto === "formal" ? "Foto Formal · 2026" : "Almamater IAIN Parepare"}
                  </span>
                  <span className="text-[10px] text-blue-400 font-bold uppercase">Verified</span>
                </div>
              </div>

              {/* Photo toggle chips underneath */}
              <div className="mt-3 flex items-center justify-between gap-2 px-1">
                <span className="text-[11px] font-mono text-stone-500">Tampilan Foto:</span>
                <div className="flex gap-1.5">
                  <button
                    onClick={() => setActivePhoto("formal")}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
                      activePhoto === "formal"
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    Jas Formal
                  </button>
                  <button
                    onClick={() => setActivePhoto("almet")}
                    className={`px-2.5 py-1 rounded text-xs font-mono font-medium transition-colors cursor-pointer ${
                      activePhoto === "almet"
                        ? "bg-blue-600 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    Almamater
                  </button>
                </div>
              </div>
            </div>

            {/* Floating Overlapping Badge 1: Academic Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -top-4 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-stone-300 shadow-md flex items-center gap-3 text-left max-w-[200px]"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] font-mono text-stone-400 uppercase font-semibold">Gelar Akademik</p>
                <p className="text-xs font-bold text-stone-900">S.Pd (Manajemen Pendidikan Islam)</p>
              </div>
            </motion.div>

            {/* Floating Overlapping Badge 2: Readiness Badge */}
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -left-4 sm:-left-6 z-20 bg-white/95 backdrop-blur-sm p-3 rounded-xl border border-stone-300 shadow-md flex items-center gap-3 text-left max-w-[220px]"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="leading-tight">
                <p className="text-[10px] font-mono text-stone-400 uppercase font-semibold">Kesiapan Kerja</p>
                <p className="text-xs font-bold text-stone-900">Administrasi & Operator Madrasah</p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Bottom Editorial Ticker / Scroll Prompt */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-stone-500"
      >
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-stone-700 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            PORTFOLIO HIGHLIGHTS
          </span>
          <span className="text-stone-300">•</span>
          <span>4 Aplikasi Terapan</span>
          <span className="text-stone-300">•</span>
          <span>3 Pengalaman Organisasi & Riset</span>
        </div>

        <button
          onClick={() => onNavigate("about")}
          className="flex items-center gap-1.5 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-blue-600" />
        </button>
      </motion.div>
    </section>
  );
}
