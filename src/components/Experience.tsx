import { useState } from "react";
import { Briefcase, Building, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const [filter, setFilter] = useState<"all" | "organization" | "business" | "technology">("all");

  const filteredExp = filter === "all" ? experience : experience.filter(item => item.type === filter);

  return (
    <section 
      id="experience" 
      className="relative py-20 sm:py-28 md:py-36 border-t border-[#1a283e] bg-[#070d18] text-[#e2e8f0]"
    >
      {/* Chapter 04 Steel Navy Atmosphere Grid */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(56, 189, 248, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.05) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Chapter 04 Marker: Steel Navy Professional Archival */}
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
          <span className="font-mono text-[10px] sm:text-[11px] text-sky-400/80 uppercase tracking-wider hidden sm:inline">
            REKAM JEJAK & KEPEMIMPINAN
          </span>
        </div>

        {/* Section Headline */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 border-b border-[#1a283e] pb-6 sm:pb-8 mb-8 sm:mb-12 text-left">
          <div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Rekam Jejak, Operasional, & Kepemimpinan
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md font-normal">
            Pengalaman nyata dalam memimpin organisasi, mengelola bisnis ritel, survei lapangan institusional, serta riset publikasi ilmiah.
          </p>
        </div>

        {/* Filter Controls with Touch-Friendly Targets */}
        <div className="flex flex-wrap gap-2 mb-8 sm:mb-12">
          {[
            { id: "all", label: "Semua Jejak" },
            { id: "organization", label: "Kepemimpinan & Organisasi" },
            { id: "business", label: "Operasional Ritel & Bisnis" },
            { id: "technology", label: "Teknologi, Riset & Data" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`min-h-[40px] px-3.5 sm:px-4 py-2 rounded-lg font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer select-none ${
                filter === tab.id
                  ? "bg-white text-neutral-950 font-bold shadow-md"
                  : "bg-[#0c182a] border border-[#1a283e] text-slate-300 hover:text-white hover:border-slate-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Archival Timeline Layout */}
        <div className="space-y-6 sm:space-y-8 text-left">
          {filteredExp.map((item, index) => (
            <div
              key={item.id}
              id={`exp-card-${item.id}`}
              className="border border-[#1a283e] bg-[#0c182a]/60 rounded-2xl p-5 sm:p-7 md:p-8 hover:border-sky-500/40 transition-colors shadow-lg"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
                
                {/* Left meta */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[#1a283e] pb-4 lg:pb-0 lg:pr-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-sky-400">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400 bg-[#070d18] border border-[#1a283e] px-2 py-0.5 rounded">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {item.role}
                  </h3>

                  <div className="flex items-center gap-1.5 text-slate-300 text-xs sm:text-sm mt-1">
                    <Building className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span className="font-medium">{item.organization}</span>
                  </div>

                  <div className="flex flex-col gap-1 mt-3 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      <span>{item.period}</span>
                    </div>
                    {item.location && (
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Content: Responsibilities */}
                <div className="lg:col-span-8 space-y-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block mb-1">
                    TANGGUNG JAWAB & DAMPAK OPERASIONAL:
                  </span>
                  
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  {item.metrics && (
                    <div className="pt-3 mt-3 border-t border-[#1a283e] grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {item.metrics.map((m, idx) => (
                        <div key={idx} className="bg-[#070d18] border border-[#1a283e] p-2.5 rounded-lg">
                          <span className="font-mono text-base sm:text-lg font-bold text-sky-400 block">{m.value}</span>
                          <span className="text-[10px] text-slate-400 font-mono uppercase leading-tight block mt-0.5">{m.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
