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
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden grid-mesh"
    >
      {/* Background visual graphics - glow balls */}
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-indigo-950/10 via-[#030306]/0 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-zinc-950 border border-indigo-500/20 rounded-full text-[10px] font-bold tracking-widest uppercase text-zinc-350">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              TASBIH • PORTFOLIO PRAGMATIS
            </span>
          </motion.div>

          {/* Big Name Tasbih */}
          <motion.h1
            variants={itemVariants}
            id="hero-main-title"
            className="mt-6 text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-white via-zinc-100 to-indigo-300 bg-clip-text text-transparent leading-[0.9] uppercase selection:bg-zinc-800"
          >
            {bio.fullName}<span className="text-indigo-400">.</span>
          </motion.h1>

          {/* Leader • Entrepreneur • Digital Builder Roles with custom separator */}
          <motion.div
            variants={itemVariants}
            id="hero-subheadlines"
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 text-zinc-400 font-sans text-lg sm:text-2xl font-light tracking-wide"
          >
            <p className="leading-tight">
              Leader • Entrepreneur • <span className="text-indigo-400 font-semibold">Digital Builder</span>
            </p>
          </motion.div>

          {/* Short Bio description */}
          <motion.p
            variants={itemVariants}
            id="hero-bio-para"
            className="mt-6 text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed font-sans"
          >
            {bio.professionalBio}
          </motion.p>

          {/* Actions: Button section */}
          <motion.div
            variants={itemVariants}
            id="hero-actions"
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              id="hero-action-portfolio"
              onClick={() => onNavigate("projects")}
              className="px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-indigo-500/20 active:scale-95 transition-all cursor-pointer rounded-lg border-none"
            >
              LIHAT PORTOFOLIO
            </button>

            <button
              id="hero-action-contact"
              onClick={() => onNavigate("contact")}
              className="px-6 py-4 border border-indigo-500/20 bg-[#030306] hover:border-indigo-500/40 text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-950/40 active:scale-95 transition-all cursor-pointer rounded-lg"
            >
              HUBUNGI SAYA
            </button>
          </motion.div>
        </motion.div>

        {/* Right column: Interactive Premium Visual Mock / Graphic Card (Startup Frame) */}
        <motion.div
          id="hero-graphic"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
          className="lg:col-span-4 relative flex items-center justify-center"
        >
          {/* Glowing Backlight */}
          <div className="absolute inset-0 bg-transparent flex items-center justify-center">
            <div className="w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
          </div>

          {/* Custom Bento Startup Card Representation for his personal identity Azbhy */}
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-xl p-6 glass-panel border-indigo-500/20 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Background absolute graphic lines */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent blur-md pointer-events-none" />

            <div className="flex items-start justify-between">
              {/* Card Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#030306] border border-indigo-500/25 text-[10px] font-mono font-bold tracking-widest text-indigo-300">
                <Terminal className="w-3 h-3 text-indigo-400 animate-pulse" />
                <span>BUILDING AZBHY</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500">v1.2.6</span>
            </div>

            {/* Premium Interactive Photo Display with Dual Persona Toggle */}
            <div className="my-auto flex flex-col items-center w-full">
              <div className="relative w-44 h-56 rounded-xl bg-zinc-950 border border-indigo-500/20 overflow-hidden group shadow-lg">
                {/* Active Photo with hover zoom */}
                <img
                  src={activePhoto === "almet" ? almetImage : jasImage}
                  alt={activePhoto === "almet" ? "Tasbih Almet Mahasiswa" : "Tasbih Jas Formal"}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glow overlay depending on mode */}
                <div className={`absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90 transition-all duration-500`} />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none mix-blend-overlay ${
                  activePhoto === "almet" ? "bg-emerald-500" : "bg-red-500"
                }`} />

                {/* Cyber/Tech Crosshairs showing dynamic active states */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-300 pointer-events-none font-mono text-[8px] text-indigo-400">
                  <div className="absolute top-2 left-2">+</div>
                  <div className="absolute top-2 right-2">+</div>
                  <div className="absolute bottom-2 left-2">+</div>
                  <div className="absolute bottom-2 right-2">+</div>
                </div>

                {/* Absolute status label on the photo card */}
                <span className={`absolute bottom-3 left-3 inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-black/80 border text-[8px] font-mono font-bold uppercase tracking-wider text-white ${
                  activePhoto === "almet" ? "border-emerald-500/30" : "border-red-500/30"
                }`}>
                  <span className={`w-1 h-1 rounded-full ${activePhoto === "almet" ? "bg-emerald-400 animate-pulse" : "bg-red-500 animate-pulse"}`} />
                  {activePhoto === "almet" ? "Mahasiswa" : "Professional"}
                </span>
              </div>

              {/* Identity labels updated dynamically based on photo chosen */}
              <h3 className="mt-4 text-white font-sans text-xl font-bold tracking-wide">
                Tasbih <span className="text-zinc-500 text-xs font-mono font-light">({activePhoto === "almet" ? "Azbhy" : "Az"})</span>
              </h3>
              <p className="text-[10px] font-mono font-bold text-indigo-400 mt-1 uppercase tracking-widest min-h-[15px] text-center">
                {activePhoto === "almet" ? "STUDENT LEADER & DIGITAL BUILDER" : "EXECUTIVE PARTNER & RETAIL OPERATOR"}
              </p>

              {/* Selector Tabs to toggle visual elements */}
              <div className="flex gap-1.5 mt-4 p-1 rounded-lg bg-zinc-900/80 border border-indigo-500/10 w-full max-w-[220px] shadow-inner">
                <button
                  id="tab-almet"
                  onClick={() => setActivePhoto("almet")}
                  className={`flex-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${
                    activePhoto === "almet"
                      ? "bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 font-extrabold"
                      : "text-zinc-500 hover:text-zinc-350 border border-transparent"
                  }`}
                >
                  🎓 ALMET
                </button>
                <button
                  id="tab-jas"
                  onClick={() => setActivePhoto("jas")}
                  className={`flex-1 py-1.5 rounded text-[9px] font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-1 cursor-pointer ${
                    activePhoto === "jas"
                      ? "bg-red-950/40 text-rose-400 border border-red-500/30 font-extrabold"
                      : "text-zinc-500 hover:text-zinc-355 border border-transparent"
                  }`}
                >
                  💼 FORMAL
                </button>
              </div>
            </div>

            {/* Bottom summary and status badges */}
            <div className="flex flex-col gap-2">
              <div className="h-[1px] bg-indigo-500/15 w-full" />
              <div className="flex justify-between items-center text-[10px] text-zinc-400 font-mono font-bold tracking-widest">
                <span>FOCUS</span>
                <span className="text-white">PENDIDIKAN • RITEL • AI</span>
              </div>
            </div>
          </div>

          {/* FLOATING IN-AIR BADGES */}
          {/* Badge 1: Leader */}
          <motion.div
            variants={badgeFloatingVariants(6, -8)}
            animate="animate"
            id="hero-floating-leader"
            className="absolute -top-6 -left-6 hidden sm:flex items-center gap-2 p-3 bg-[#030306]/90 border border-indigo-500/15 rounded-xl shadow-xl pointer-events-none"
          >
            <div className="w-8 h-8 rounded bg-indigo-950 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Award className="w-4 h-4" />
            </div>
            <div className="text-left leading-none">
              <span className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">TITLE ROLE</span>
              <span className="text-xs font-bold text-white">Ketua IKA Regional</span>
            </div>
          </motion.div>

          {/* Badge 2: Business Builder */}
          <motion.div
            variants={badgeFloatingVariants(7, 8)}
            animate="animate"
            id="hero-floating-retail"
            className="absolute bottom-10 -right-6 hidden sm:flex items-center gap-2 p-3 bg-[#030306]/90 border border-indigo-500/15 rounded-xl shadow-xl pointer-events-none"
          >
            <div className="w-8 h-8 rounded bg-indigo-950/40 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Flame className="w-4 h-4 animate-bounce" />
            </div>
            <div className="text-left leading-none">
              <span className="block text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">EXPERTISE</span>
              <span className="text-xs font-bold text-white">Ritel & Otomatisasi</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
