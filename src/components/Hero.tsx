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
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const badgeFloatingVariants = (duration: number, yRange: number) => ({
    animate: {
      y: [0, yRange, 0],
      transition: {
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden grid-mesh bg-slate-50"
    >
      {/* Background visual graphics */}
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-indigo-100/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: main content */}
        <motion.div
          id="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col justify-center text-left"
        >
          {/* Tagline Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-indigo-50 border border-indigo-200 rounded-full text-xs font-bold tracking-wider uppercase text-indigo-800 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
              </span>
              TASBIH • REKAM JEJAK & PORTOFOLIO RESMI
            </span>
          </motion.div>

          {/* Big Name Tasbih */}
          <motion.h1
            variants={itemVariants}
            id="hero-main-title"
            className="mt-6 text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight text-slate-900 leading-[0.95] uppercase"
          >
            {bio.fullName}<span className="text-indigo-600">.</span>
          </motion.h1>

          {/* Roles Subheadlines */}
          <motion.div
            variants={itemVariants}
            id="hero-subheadlines"
            className="flex flex-wrap items-center gap-2 sm:gap-3 mt-6 text-slate-800 font-sans text-base sm:text-xl font-semibold tracking-wide"
          >
            <p className="leading-snug">
              <span className="text-indigo-700 font-bold">Full-Stack Web Developer</span>
              <span className="text-slate-400 font-bold mx-2.5">•</span>
              <span className="text-indigo-600 font-bold">AI & Automation Specialist</span>
              <span className="text-slate-400 font-bold mx-2.5">•</span>
              <span className="text-slate-700 font-semibold">Digital Operations Lead</span>
            </p>
          </motion.div>

          {/* Short Bio description */}
          <motion.p
            variants={itemVariants}
            id="hero-bio-para"
            className="mt-6 text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-sans font-normal"
          >
            {bio.professionalBio}
          </motion.p>

          {/* Actions: Button section */}
          <motion.div
            variants={itemVariants}
            id="hero-actions"
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              id="hero-action-portfolio"
              onClick={() => onNavigate("projects")}
              className="px-7 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-indigo-500/25 active:scale-95 transition-all duration-200 cursor-pointer rounded-full border-none flex items-center gap-2 group"
            >
              <span>LIHAT PORTOFOLIO</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>

            <button
              id="hero-action-contact"
              onClick={() => onNavigate("contact")}
              className="px-7 py-3.5 border border-slate-300 bg-white hover:bg-slate-100/80 text-slate-800 text-xs font-bold uppercase tracking-wider shadow-xs hover:shadow-sm active:scale-95 transition-all duration-200 cursor-pointer rounded-full flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-indigo-600" />
              <span>HUBUNGI SAYA</span>
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
          <div className="relative w-full max-w-[350px] aspect-[4/5] rounded-3xl p-6 bg-white/90 backdrop-blur-md border border-slate-200/80 flex flex-col justify-between overflow-hidden shadow-xl hover:shadow-2xl hover:border-indigo-300 transition-all duration-300">
            <div className="flex items-start justify-between">
              {/* Card Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-[11px] font-mono font-bold tracking-wider text-indigo-700 shadow-2xs">
                <Terminal className="w-3.5 h-3.5 text-indigo-600" />
                <span>AZBHY PROFILE</span>
              </div>
              <span className="font-mono text-[10px] text-slate-500 font-semibold bg-slate-100 px-2 py-0.5 rounded-full">VERIFIED 2026</span>
            </div>

            {/* Photo Display with Dual Persona Toggle */}
            <div className="my-auto flex flex-col items-center w-full">
              <div className="relative w-48 h-60 rounded-2xl bg-slate-100 border border-slate-200/80 overflow-hidden group shadow-md">
                <img
                  src={activePhoto === "almet" ? almetImage : jasImage}
                  alt={activePhoto === "almet" ? "Tasbih Almet Mahasiswa" : "Tasbih Jas Formal"}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Status badge */}
                <span className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 backdrop-blur-sm border text-[9px] font-mono font-bold uppercase tracking-wider text-white shadow-md`}>
                  <span className={`w-2 h-2 rounded-full ${activePhoto === "almet" ? "bg-emerald-400 animate-pulse" : "bg-indigo-400 animate-pulse"}`} />
                  {activePhoto === "almet" ? "Akademik (S1 MPI)" : "Formal / Professional"}
                </span>
              </div>

              {/* Identity labels */}
              <h3 className="mt-4 text-slate-900 font-sans text-xl font-extrabold tracking-tight">
                Tasbih <span className="text-slate-500 text-xs font-mono font-medium">({activePhoto === "almet" ? "S1 MPI" : "Azbhy"})</span>
              </h3>
              <p className="text-[11px] font-mono font-bold text-indigo-600 mt-0.5 uppercase tracking-wider text-center">
                {activePhoto === "almet" ? "MAHASISWA & DIGITAL BUILDER" : "OPERATIONS & AUTOMATION SPECIALIST"}
              </p>

              {/* Selector Tabs */}
              <div className="flex gap-1.5 mt-3.5 p-1 rounded-full bg-slate-100 border border-slate-200/80 w-full max-w-[230px]">
                <button
                  id="tab-almet"
                  onClick={() => setActivePhoto("almet")}
                  className={`flex-1 py-1.5 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-1 cursor-pointer ${
                    activePhoto === "almet"
                      ? "bg-white text-emerald-800 border border-slate-200 shadow-xs font-extrabold"
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
                      ? "bg-white text-indigo-800 border border-slate-200 shadow-xs font-extrabold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  💼 FORMAL
                </button>
              </div>
            </div>

            {/* Bottom summary */}
            <div className="flex flex-col gap-1.5 pt-3 border-t border-slate-200/80">
              <div className="flex justify-between items-center text-[10px] text-slate-600 font-mono font-bold tracking-wider">
                <span>LOKASI</span>
                <span className="text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full">PAREPARE, SULAWESI SELATAN</span>
              </div>
            </div>
          </div>

          {/* FLOATING IN-AIR BADGES */}
          <motion.div
            variants={badgeFloatingVariants(6, -6)}
            animate="animate"
            id="hero-floating-leader"
            className="absolute -top-5 -left-6 hidden sm:flex items-center gap-2.5 p-3.5 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl pointer-events-none"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-2xs">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">ORGANISASI</span>
              <span className="text-xs font-extrabold text-slate-900">Ketua IKA Alumni</span>
            </div>
          </motion.div>

          <motion.div
            variants={badgeFloatingVariants(7, 6)}
            animate="animate"
            id="hero-floating-retail"
            className="absolute bottom-8 -right-6 hidden sm:flex items-center gap-2.5 p-3.5 bg-white/95 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-xl pointer-events-none"
          >
            <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shadow-2xs">
              <Flame className="w-4 h-4 text-indigo-600" />
            </div>
            <div className="text-left leading-tight">
              <span className="block text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider">PENGALAMAN</span>
              <span className="text-xs font-extrabold text-slate-900">Enumerator & Admin Usaha</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
