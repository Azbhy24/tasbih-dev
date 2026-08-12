import { ArrowDown, Mail, ArrowUpRight, Award, Flame, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import almetImage from "../assets/images/almet_mahasiswa_1781399345497.jpg";
import jasImage from "../assets/images/jas_formal_1781399324196.jpg";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { bio } = portfolioData;
  const [activePhoto, setActivePhoto] = useState<"almet" | "jas">("almet");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 },
    },
  };

  const badgeFloatingVariants = (duration: number, yRange: number) => ({
    animate: {
      y: [0, yRange, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50"
    >
      {/* Background multi-color ambient glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-200/40 via-purple-200/30 to-pink-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-gradient-to-br from-emerald-200/30 via-teal-200/20 to-sky-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-amber-200/25 rounded-full blur-2xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: main content */}
        <motion.div
          id="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col justify-center text-left"
        >
          {/* Tagline Badge with vibrant multi-gradient border */}
          <motion.div variants={itemVariants} className="inline-flex max-w-full">
            <span className="inline-flex flex-wrap items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 bg-white/90 backdrop-blur-md border border-indigo-200/80 rounded-2xl sm:rounded-full text-[11px] sm:text-xs font-black tracking-wider uppercase text-indigo-900 shadow-sm">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>TASBIH</span>
              <span className="text-slate-300">•</span>
              <span className="text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200">BRAND: AZBHY</span>
            </span>
          </motion.div>

          {/* Big Name Tasbih */}
          <motion.h1
            variants={itemVariants}
            id="hero-main-title"
            className="mt-4 sm:mt-5 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-slate-900 leading-[0.95] uppercase break-words"
          >
            Tasbih<span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">.</span>
          </motion.h1>

          {/* Headline / Positioning */}
          <motion.h2
            variants={itemVariants}
            id="hero-positioning-title"
            className="mt-2 sm:mt-3 text-xl sm:text-3xl md:text-4xl font-extrabold text-indigo-700 tracking-tight"
          >
            Praktisi Manajemen & Solusi Digital
          </motion.h2>

          {/* Main Message */}
          <motion.p
            variants={itemVariants}
            id="hero-main-message"
            className="mt-3 text-base sm:text-lg md:text-xl font-bold text-slate-900 max-w-2xl leading-snug"
          >
            Menggabungkan tata kelola organisasi, manajemen administrasi, dan pengembangan solusi digital terstruktur.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            id="hero-bio-para"
            className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-700 max-w-2xl leading-relaxed font-sans font-medium"
          >
            Latar belakang S1 Manajemen Pendidikan Islam dengan pengalaman di bidang administrasi, pengelolaan data, bisnis ritel, serta pengembangan aplikasi web.
          </motion.p>

          {/* Actions: Button section */}
          <motion.div
            variants={itemVariants}
            id="hero-actions"
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <button
              id="hero-action-portfolio"
              onClick={() => onNavigate("projects")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-extrabold uppercase tracking-wider shadow-lg hover:shadow-indigo-500/30 active:scale-95 transition-all duration-300 cursor-pointer rounded-full border-none flex items-center justify-center gap-2 group"
            >
              <span>LIHAT PORTOFOLIO</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              id="hero-action-contact"
              onClick={() => onNavigate("contact")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-indigo-200 bg-white hover:bg-indigo-50/50 text-slate-800 text-xs font-extrabold uppercase tracking-wider shadow-sm hover:shadow-md active:scale-95 transition-all duration-200 cursor-pointer rounded-full flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-indigo-600" />
              <span>KONTAK & HUBUGI</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Right column: Interactive Photo Card */}
        <motion.div
          id="hero-graphic"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
          className="lg:col-span-4 relative flex items-center justify-center"
        >
          {/* Custom Bento Card */}
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl p-6 bg-white/95 backdrop-blur-xl border-2 border-indigo-100 flex flex-col justify-between overflow-hidden shadow-2xl hover:border-purple-300 transition-all duration-300">
            {/* Top gradient ribbon accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500" />

            <div className="flex items-start justify-between pt-1">
              {/* Card Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-[11px] font-mono font-bold tracking-wider text-indigo-800 shadow-2xs">
                <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                <span>AZBHY PROFILE</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-800 font-bold bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">VERIFIED 2026</span>
            </div>

            {/* Photo Display with Dual Persona Toggle */}
            <div className="my-auto flex flex-col items-center w-full">
              <div className="relative w-48 h-60 rounded-2xl bg-gradient-to-b from-indigo-50 to-purple-50 border-2 border-slate-200 overflow-hidden group shadow-lg">
                <img
                  src={activePhoto === "almet" ? almetImage : jasImage}
                  alt={activePhoto === "almet" ? "Tasbih Almet Mahasiswa" : "Tasbih Jas Formal"}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status badge */}
                <span className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-md border text-[9px] font-mono font-bold uppercase tracking-wider text-white shadow-md`}>
                  <span className={`w-2 h-2 rounded-full ${activePhoto === "almet" ? "bg-emerald-400 animate-pulse" : "bg-purple-400 animate-pulse"}`} />
                  {activePhoto === "almet" ? "Akademik (S1 MPI)" : "Formal / Professional"}
                </span>
              </div>

              {/* Identity labels */}
              <h3 className="mt-4 text-slate-900 font-sans text-xl font-black tracking-tight">
                Tasbih
              </h3>
              <p className="text-[11px] font-mono font-bold text-indigo-700 mt-0.5 uppercase tracking-wider text-center">
                BRAND: AZBHY • MANAJEMEN & DIGITAL
              </p>

              {/* Selector Tabs */}
              <div className="flex gap-1.5 mt-3.5 p-1 rounded-full bg-slate-100 border border-slate-200/80 w-full max-w-[240px]">
                <button
                  id="tab-almet"
                  onClick={() => setActivePhoto("almet")}
                  className={`flex-1 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                    activePhoto === "almet"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-xs font-extrabold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  🎓 AKADEMIK
                </button>
                <button
                  id="tab-jas"
                  onClick={() => setActivePhoto("jas")}
                  className={`flex-1 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                    activePhoto === "jas"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs font-extrabold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  💼 FORMAL
                </button>
              </div>
            </div>

            {/* Bottom summary */}
            <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-200">
              <div className="flex justify-between items-center text-[10px] text-slate-600 font-mono font-bold tracking-wider">
                <span>LOKASI</span>
                <span className="text-indigo-900 font-extrabold bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full">PAREPARE, SULAWESI SELATAN</span>
              </div>
            </div>
          </div>

          {/* FLOATING IN-AIR BADGES */}
          <motion.div
            variants={badgeFloatingVariants(6, -6)}
            animate="animate"
            id="hero-floating-leader"
            className="absolute -top-5 -left-6 hidden sm:flex items-center gap-2.5 p-3.5 bg-white/95 backdrop-blur-md border border-amber-200 rounded-2xl shadow-xl pointer-events-none"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 shadow-2xs">
              <Award className="w-5 h-5 text-amber-600" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[9px] font-mono font-bold text-amber-800 uppercase tracking-wider">ORGANISASI</span>
              <span className="text-xs font-extrabold text-slate-900">Ketua IKA Alumni</span>
            </div>
          </motion.div>

          <motion.div
            variants={badgeFloatingVariants(7, 6)}
            animate="animate"
            id="hero-floating-retail"
            className="absolute bottom-8 -right-6 hidden sm:flex items-center gap-2.5 p-3.5 bg-white/95 backdrop-blur-md border border-emerald-200 rounded-2xl shadow-xl pointer-events-none"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shadow-2xs">
              <Flame className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[9px] font-mono font-bold text-emerald-800 uppercase tracking-wider">PENGALAMAN</span>
              <span className="text-xs font-extrabold text-slate-900">Enumerator & Admin Usaha</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
