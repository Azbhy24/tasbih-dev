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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background multi-color subtle ambient glows */}
      <div className="absolute top-10 left-1/4 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-pink-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-600/15 via-teal-600/10 to-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: main content */}
        <motion.div
          id="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col justify-center items-center text-center"
        >
          {/* Tagline Badge with vibrant multi-gradient border */}
          <motion.div variants={itemVariants} className="inline-flex max-w-full justify-center">
            <span className="inline-flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 bg-slate-900/90 backdrop-blur-md border border-indigo-500/40 rounded-2xl sm:rounded-full text-[11px] sm:text-xs font-black tracking-wider uppercase text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.25)]">
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
              </span>
              <span>TASBIH</span>
              <span className="text-slate-600">•</span>
              <span className="text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded-full border border-indigo-500/30 font-extrabold">BRAND: AZBHY</span>
            </span>
          </motion.div>

          {/* Big Name Tasbih */}
          <motion.h1
            variants={itemVariants}
            id="hero-main-title"
            className="mt-4 sm:mt-5 text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight text-white leading-[0.95] uppercase break-words text-center drop-shadow-[0_0_35px_rgba(255,255,255,0.1)]"
          >
            Tasbih<span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">.</span>
          </motion.h1>

          {/* Headline / Positioning */}
          <motion.h2
            variants={itemVariants}
            id="hero-positioning-title"
            className="mt-2 sm:mt-3 text-xl sm:text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-indigo-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent tracking-tight text-center"
          >
            Praktisi Manajemen & Solusi Digital
          </motion.h2>

          {/* Main Message */}
          <motion.p
            variants={itemVariants}
            id="hero-main-message"
            className="mt-3 text-base sm:text-lg md:text-xl font-bold text-slate-200 max-w-2xl leading-snug mx-auto text-center"
          >
            Menggabungkan tata kelola organisasi, manajemen administrasi, dan pengembangan solusi digital terstruktur.
          </motion.p>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            id="hero-bio-para"
            className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed font-sans font-medium mx-auto text-center"
          >
            Latar belakang S1 Manajemen Pendidikan Islam dengan pengalaman di bidang administrasi, pengelolaan data, bisnis ritel, serta pengembangan aplikasi web.
          </motion.p>

          {/* Actions: Button section */}
          <motion.div
            variants={itemVariants}
            id="hero-actions"
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full"
          >
            <button
              id="hero-action-portfolio"
              onClick={() => onNavigate("projects")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 text-white text-xs font-extrabold uppercase tracking-wider shadow-[0_0_25px_rgba(99,102,241,0.4)] hover:shadow-[0_0_35px_rgba(99,102,241,0.6)] active:scale-95 transition-all duration-300 cursor-pointer rounded-full border border-indigo-400/40 flex items-center justify-center gap-2 group"
            >
              <span>LIHAT PORTOFOLIO</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              id="hero-action-contact"
              onClick={() => onNavigate("contact")}
              className="px-6 sm:px-8 py-3.5 sm:py-4 border border-slate-700/80 bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white hover:border-indigo-500/50 text-xs font-extrabold uppercase tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] active:scale-95 transition-all duration-200 cursor-pointer rounded-full flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
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
          <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-3xl p-6 bg-slate-900/80 backdrop-blur-xl border border-slate-800 hover:border-indigo-500/50 flex flex-col justify-between overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-300 group/card">
            {/* Top gradient ribbon accent */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

            <div className="flex items-start justify-between pt-1">
              {/* Card Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-indigo-500/30 text-[11px] font-mono font-bold tracking-wider text-indigo-300 shadow-2xs">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                <span>AZBHY PROFILE</span>
              </div>
              <span className="font-mono text-[10px] text-emerald-300 font-bold bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">VERIFIED 2026</span>
            </div>

            {/* Photo Display with Dual Persona Toggle */}
            <div className="my-auto flex flex-col items-center w-full">
              <div className="relative w-48 h-60 rounded-2xl bg-slate-950 border border-slate-700/80 overflow-hidden group/img shadow-xl">
                <img
                  src={activePhoto === "almet" ? almetImage : jasImage}
                  alt={activePhoto === "almet" ? "Tasbih Almet Mahasiswa" : "Tasbih Jas Formal"}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status badge */}
                <span className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 backdrop-blur-md border border-slate-700/80 text-[9px] font-mono font-bold uppercase tracking-wider text-white shadow-md`}>
                  <span className={`w-2 h-2 rounded-full ${activePhoto === "almet" ? "bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" : "bg-purple-400 animate-pulse shadow-[0_0_8px_rgba(192,132,252,0.8)]"}`} />
                  {activePhoto === "almet" ? "Akademik (S1 MPI)" : "Formal / Professional"}
                </span>
              </div>

              {/* Identity labels */}
              <h3 className="mt-4 text-white font-sans text-xl font-black tracking-tight">
                Tasbih
              </h3>
              <p className="text-[11px] font-mono font-bold text-indigo-400 mt-0.5 uppercase tracking-wider text-center">
                BRAND: AZBHY • MANAJEMEN & DIGITAL
              </p>

              {/* Selector Tabs */}
              <div className="flex gap-1.5 mt-3.5 p-1 rounded-full bg-slate-950 border border-slate-800 w-full max-w-[240px]">
                <button
                  id="tab-almet"
                  onClick={() => setActivePhoto("almet")}
                  className={`flex-1 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                    activePhoto === "almet"
                      ? "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_12px_rgba(16,185,129,0.3)] font-extrabold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  🎓 AKADEMIK
                </button>
                <button
                  id="tab-jas"
                  onClick={() => setActivePhoto("jas")}
                  className={`flex-1 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                    activePhoto === "jas"
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.3)] font-extrabold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  💼 FORMAL
                </button>
              </div>
            </div>

            {/* Bottom summary */}
            <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-800">
              <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono font-bold tracking-wider">
                <span>LOKASI</span>
                <span className="text-indigo-300 font-extrabold bg-indigo-950/80 border border-indigo-500/30 px-2.5 py-0.5 rounded-full">PAREPARE, SULAWESI SELATAN</span>
              </div>
            </div>
          </div>

          {/* FLOATING IN-AIR BADGES */}
          <motion.div
            variants={badgeFloatingVariants(6, -6)}
            animate="animate"
            id="hero-floating-leader"
            className="absolute -top-5 -left-6 hidden sm:flex items-center gap-2.5 p-3.5 bg-slate-900/90 backdrop-blur-md border border-amber-500/30 rounded-2xl shadow-xl shadow-black/50 pointer-events-none"
          >
            <div className="w-9 h-9 rounded-xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400 shadow-2xs">
              <Award className="w-5 h-5 text-amber-400" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[9px] font-mono font-bold text-amber-400 uppercase tracking-wider">ORGANISASI</span>
              <span className="text-xs font-extrabold text-white">Ketua IKA Alumni</span>
            </div>
          </motion.div>

          <motion.div
            variants={badgeFloatingVariants(7, 6)}
            animate="animate"
            id="hero-floating-retail"
            className="absolute bottom-8 -right-6 hidden sm:flex items-center gap-2.5 p-3.5 bg-slate-900/90 backdrop-blur-md border border-emerald-500/30 rounded-2xl shadow-xl shadow-black/50 pointer-events-none"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-2xs">
              <Flame className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-wider">PENGALAMAN</span>
              <span className="text-xs font-extrabold text-white">Enumerator & Admin Usaha</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
