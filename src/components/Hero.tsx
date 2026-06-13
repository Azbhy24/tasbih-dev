import { ArrowDown, Mail, ArrowUpRight, Award, Flame, Terminal } from "lucide-react";
import { motion } from "motion/react";
import { portfolioData } from "../data/portfolio";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const { bio } = portfolioData;

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
      <div className="absolute inset-0 bg-radial-[at_50%_40%] from-zinc-800/10 via-[#09090B]/0 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

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
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-[10px] font-bold tracking-widest uppercase text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              TASBIH • PORTFOLIO PRAGMATIS
            </span>
          </motion.div>

          {/* Big Name Tasbih */}
          <motion.h1
            variants={itemVariants}
            id="hero-main-title"
            className="mt-6 text-7xl sm:text-8xl md:text-9xl font-black tracking-tighter text-white leading-[0.85] uppercase selection:bg-zinc-800"
          >
            {bio.fullName}<span className="text-zinc-700">.</span>
          </motion.h1>

          {/* Leader • Entrepreneur • Digital Builder Roles with custom separator */}
          <motion.div
            variants={itemVariants}
            id="hero-subheadlines"
            className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6 text-zinc-400 font-serif text-lg sm:text-2xl font-light tracking-wide"
          >
            <p className="leading-tight">
              Leader • Entrepreneur • <span className="text-white font-medium">Digital Builder</span>
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
              className="px-6 py-3 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 active:scale-95 transition-all shadow-md cursor-pointer rounded-none"
            >
              LIHAT PORTOFOLIO
            </button>

            <button
              id="hero-action-contact"
              onClick={() => onNavigate("contact")}
              className="px-6 py-3 border border-zinc-800 bg-transparent text-white text-xs font-bold uppercase tracking-widest hover:bg-zinc-900 active:scale-95 transition-all cursor-pointer rounded-none"
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
            <div className="w-72 h-72 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Custom Bento Startup Card Representation for his personal identity Azbhy */}
          <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-xl p-6 glass-panel border-zinc-800 flex flex-col justify-between overflow-hidden shadow-2xl">
            {/* Background absolute graphic lines */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-zinc-850 to-transparent blur-md pointer-events-none" />

            <div className="flex items-start justify-between">
              {/* Card Badge */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold tracking-widest text-white">
                <Terminal className="w-3 h-3" />
                <span>BUILDING AZBHY</span>
              </div>
              <span className="font-mono text-[10px] text-zinc-500">v1.2.6</span>
            </div>

            {/* Profile Avatar Graphic Circle Placeholder Built beautifully on pure CSS/SVG */}
            <div className="my-auto flex flex-col items-center">
              <div className="relative w-28 h-28 flex items-center justify-center rounded-xl bg-zinc-950 border border-zinc-800 group overflow-hidden">
                {/* SVG avatar representing a modern tech profile */}
                <svg viewBox="0 0 100 100" className="w-full h-full text-zinc-400 p-2">
                  <defs>
                    <linearGradient id="gradient-avatar" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#27272a" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#09090b" stopOpacity="0.5" />
                    </linearGradient>
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="url(#gradient-avatar)" stroke="rgba(39, 39, 42, 0.5)" strokeWidth="1" />
                  {/* Digital Builder Abstract shape code grid */}
                  <g stroke="#ffffff" strokeWidth="1" strokeOpacity="0.1" fill="none">
                    <line x1="20" y1="50" x2="80" y2="50" />
                    <line x1="50" y1="20" x2="50" y2="80" />
                    <circle cx="50" cy="50" r="15" />
                    <circle cx="50" cy="50" r="28" />
                    <path d="M 28 28 L 72 72 M 28 72 L 72 28" />
                  </g>
                  {/* Clean schematic letter 'A' */}
                  <text x="50" y="58" textAnchor="middle" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">
                    A
                  </text>
                </svg>
                {/* Outer spin rings */}
                <div className="absolute inset-0 border border-zinc-800 border-dashed rounded-xl animate-[spin_60s_linear_infinite]" />
              </div>

              {/* Identifier names */}
              <h3 className="mt-4 text-white font-sans text-xl font-bold tracking-wide">
                Azbhy
              </h3>
              <p className="text-[10px] font-mono font-bold text-zinc-400 mt-1 uppercase tracking-widest">
                Digital Solution Architect
              </p>
            </div>

            {/* Bottom summary and status badges */}
            <div className="flex flex-col gap-2">
              <div className="h-[1px] bg-zinc-800 w-full" />
              <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono font-bold tracking-widest">
                <span>FOCUS</span>
                <span className="text-zinc-350">PENDIDIKAN • RITEL • AI</span>
              </div>
            </div>
          </div>

          {/* FLOATING IN-AIR BADGES */}
          {/* Badge 1: Leader */}
          <motion.div
            variants={badgeFloatingVariants(6, -8)}
            animate="animate"
            id="hero-floating-leader"
            className="absolute -top-6 -left-6 hidden sm:flex items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl pointer-events-none"
          >
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white">
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
            className="absolute bottom-10 -right-6 hidden sm:flex items-center gap-2 p-3 bg-zinc-900 border border-zinc-800 rounded-xl shadow-xl pointer-events-none"
          >
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-white">
              <Flame className="w-4 h-4" />
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
