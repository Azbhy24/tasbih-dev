import { useState } from "react";
import { Building, MapPin, Calendar, CheckCircle2, ChevronRight, Milestone } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const [filter, setFilter] = useState<"all" | "organization" | "business" | "technology">("all");

  const filteredExp = filter === "all" ? experience : experience.filter(item => item.type === filter);

  return (
    <section 
      id="experience" 
      className="relative py-20 sm:py-28 md:py-36 border-t border-[#1a283e] bg-[#070d18] text-[#e2e8f0] overflow-hidden"
    >
      {/* Visual Signature: Career Progression Grid & Coordinate Lines */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.06) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 04 Marker */}
        <div className="flex items-center justify-between border-b border-[#1a283e] pb-3 sm:pb-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-sky-400 font-bold bg-[#0c182a] border border-sky-500/30 px-2 py-0.5 rounded">
              CHAPTER 04
            </span>
            <span className="text-[#1a283e] font-mono">/</span>
            <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-widest text-neutral-300 font-semibold">
              EXPERIENCE & LEADERSHIP
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] text-sky-400/80 uppercase tracking-wider">
            <Milestone className="w-3.5 h-3.5 text-sky-400" />
            <span>PROGRESSION TIMELINE</span>
          </div>
        </div>

        {/* Section Headline & Compressed Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-10 sm:mb-14 text-left items-start">
          <div className="lg:col-span-8">
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Perjalanan Karier & Kepemimpinan Nyata.
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-[#1a283e] pl-4 sm:pl-6 text-slate-400 text-xs sm:text-sm leading-relaxed font-normal">
            Rekam jejak kepemimpinan alumni, pengelolaan operasional ritel, enumerasi riset lapangan, serta tata kelola berkas ilmiah.
          </div>
        </div>

        {/* Track Filter Navigation */}
        <div className="flex flex-wrap gap-2 mb-10 sm:mb-14">
          {[
            { id: "all", label: "Semua Jalur" },
            { id: "organization", label: "Organisasi & Leadership" },
            { id: "business", label: "Operasional Ritel" },
            { id: "technology", label: "Riset & Data Lapangan" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`min-h-[38px] px-3.5 py-1.5 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer select-none ${
                filter === tab.id
                  ? "bg-white text-neutral-950 font-bold shadow-md"
                  : "bg-[#0c182a] border border-[#1a283e] text-slate-300 hover:text-white hover:border-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Visual Signature: Dominant Vertical Progression Timeline (Not Generic Cards) */}
        <div className="relative pl-6 sm:pl-10 lg:pl-12 border-l-2 border-[#1a283e] space-y-10 sm:space-y-12 text-left">
          {filteredExp.map((item, index) => (
            <div
              key={item.id}
              id={`exp-timeline-node-${item.id}`}
              className="relative group"
            >
              {/* Timeline Connector Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] lg:-left-[55px] top-1 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#070d18] border-2 border-sky-400 flex items-center justify-center shadow-md">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
              </div>

              {/* Node Header: Year Stamp + Organization + Role */}
              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-2">
                <span className="font-mono text-xs font-bold text-sky-400 bg-[#0c182a] border border-sky-500/30 px-2 py-0.5 rounded">
                  {item.period}
                </span>
                <span className="text-slate-500 font-mono text-xs hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-300">
                  <Building className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="font-semibold text-white">{item.organization}</span>
                </div>
                {item.location && (
                  <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                    <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

              {/* Role Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                {item.role}
              </h3>

              {/* Compressed Responsibilities Points */}
              <div className="mt-3 space-y-2 max-w-3xl">
                {item.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <span className="text-sky-400 font-mono text-xs shrink-0 mt-0.5">—</span>
                    <span className="leading-relaxed">{resp}</span>
                  </div>
                ))}
              </div>

              {/* Verified Performance Metrics if Available */}
              {item.metrics && item.metrics.length > 0 && (
                <div className="mt-4 pt-3 border-t border-[#1a283e]/80 flex flex-wrap gap-4 font-mono text-xs text-slate-400">
                  {item.metrics.map((m, mIdx) => (
                    <div key={mIdx}>
                      <span className="text-slate-500 block text-[10px] uppercase">{m.label}</span>
                      <span className="text-sky-300 font-bold">{m.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
