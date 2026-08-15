import React, { useState } from "react";
import { Building, MapPin, Milestone, ChevronLeft, ChevronRight, CheckCircle2, Award, Users, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const [activeIdx, setActiveIdx] = useState(0);

  const activeItem = experience[activeIdx] || experience[0];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev > 0 ? prev - 1 : experience.length - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev < experience.length - 1 ? prev + 1 : 0));
  };

  return (
    <section 
      id="experience" 
      className="relative py-16 sm:py-24 md:py-28 border-t border-[#1a283e] bg-[#070d18] text-[#e2e8f0] overflow-hidden"
    >
      {/* Visual Signature: Career Progression Coordinate Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 04 Marker */}
        <div className="flex items-center justify-between border-b border-[#1a283e] pb-3 mb-6 sm:mb-8">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-sky-400 font-bold bg-[#0c182a] border border-sky-500/30 px-2 py-0.5 rounded">
              CHAPTER 04
            </span>
            <span className="text-[#1a283e] font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              REKAM JEJAK & KEPEMIMPINAN
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-sky-400/80 uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5 text-sky-400" />
            <span>PROGRESSION STAGE</span>
          </div>
        </div>

        {/* Headline + 1-Liner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 mb-6 sm:mb-8 text-left items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Perjalanan Karier & Kepemimpinan Nyata.
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-[#1a283e] pl-4 text-slate-400 text-xs leading-relaxed font-normal">
            Rekam jejak kepemimpinan alumni, tata kelola operasional ritel harian, survei riset sosial-ekonomi lapangan, dan pengelolaan arsip naskah ilmiah.
          </div>
        </div>

        {/* Interactive Timeline Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#1a283e] pb-4 mb-6">
          <div className="flex flex-wrap gap-2">
            {experience.map((exp, idx) => (
              <button
                key={exp.id}
                id={`exp-tab-${exp.id}`}
                onClick={() => setActiveIdx(idx)}
                className={`min-h-[40px] px-3.5 py-1.5 rounded font-mono text-xs uppercase tracking-wider transition-all cursor-pointer select-none flex items-center gap-2 ${
                  activeIdx === idx
                    ? "bg-sky-400 text-neutral-950 font-bold shadow-md"
                    : "bg-[#0c182a] text-slate-300 border border-[#1a283e] hover:border-sky-400 hover:text-white"
                }`}
              >
                <span className="text-[10px] opacity-75">{exp.period.split(" ")[0]}</span>
                <span className="truncate max-w-[140px] sm:max-w-none">{exp.organization.split("(")[0]}</span>
              </button>
            ))}
          </div>

          {/* Stepper Navigation */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-slate-400">
              0{activeIdx + 1} / 0{experience.length}
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={handlePrev}
                className="p-2 min-h-[38px] min-w-[38px] rounded bg-[#0c182a] border border-[#1a283e] text-slate-300 hover:text-white hover:border-sky-400 transition-colors cursor-pointer flex items-center justify-center"
                title="Sebelumnya"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 min-h-[38px] min-w-[38px] rounded bg-[#0c182a] border border-[#1a283e] text-slate-300 hover:text-white hover:border-sky-400 transition-colors cursor-pointer flex items-center justify-center"
                title="Selanjutnya"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* In-Place Interactive Progression Stage */}
        <div className="min-h-[340px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="p-5 sm:p-7 rounded-2xl bg-[#0a1322] border border-[#1a283e] text-left shadow-lg space-y-5"
            >
              {/* Header: Period Stamp + Organization + Location */}
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-[#1a283e] pb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono text-xs font-bold text-sky-400 bg-[#0c182a] border border-sky-500/30 px-2 py-0.5 rounded">
                      {activeItem.period}
                    </span>
                    <span className="text-slate-500 font-mono text-xs">•</span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                      <Building className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span className="font-semibold text-white">{activeItem.organization}</span>
                    </div>
                  </div>

                  <h3 
                    className="text-xl sm:text-2xl font-bold text-white tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {activeItem.role}
                  </h3>
                </div>

                {activeItem.location && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-[#070d18] px-2.5 py-1 rounded border border-[#1a283e]">
                    <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>{activeItem.location}</span>
                  </div>
                )}
              </div>

              {/* Responsibilities & Achievements */}
              <div className="space-y-2.5 max-w-4xl">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 block">
                  TANGGUNG JAWAB & REKAM JEJAK UTAMA:
                </span>
                <div className="space-y-2">
                  {activeItem.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                      <span className="text-sky-400 font-mono text-xs shrink-0 mt-0.5">—</span>
                      <span className="leading-relaxed">{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Metrics Block */}
              {activeItem.metrics && activeItem.metrics.length > 0 && (
                <div className="pt-4 border-t border-[#1a283e] flex flex-wrap items-center gap-4 sm:gap-8 font-mono text-xs">
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider">
                    VERIFIKASI DATA:
                  </span>
                  {activeItem.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 bg-[#070d18] px-3 py-1.5 rounded border border-[#1a283e]">
                      <span className="text-slate-400 text-[10px] uppercase">{m.label}:</span>
                      <span className="text-sky-300 font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
