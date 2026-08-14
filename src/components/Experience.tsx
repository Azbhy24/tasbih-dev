import { useState } from "react";
import { MapPin } from "lucide-react";
import { portfolioData } from "../data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;
  const [selectedType, setSelectedType] = useState<"all" | "organization" | "business" | "technology">("all");

  const types = [
    { id: "all", label: "Semua Track" },
    { id: "business", label: "Bisnis & Ritel" },
    { id: "organization", label: "Kepemimpinan" },
    { id: "technology", label: "Teknologi & Web" },
  ];

  const filteredExperience = selectedType === "all" 
    ? experience 
    : experience.filter(item => item.type === selectedType);

  return (
    <section id="experience" className="relative py-16 sm:py-24 md:py-32 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Header with Track Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 border-b border-neutral-800 pb-6 sm:pb-8 mb-10 sm:mb-16">
          <div className="text-left">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
              <span className="font-mono text-[11px] sm:text-xs uppercase tracking-widest text-emerald-400 font-bold">
                03 / REKAM JEJAK & PENGALAMAN
              </span>
              <span className="h-px w-6 sm:w-8 bg-neutral-800" />
            </div>
            <h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-snug"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Timeline Pengalaman & Kepemimpinan
            </h2>
          </div>

          {/* Minimalist Touch-Friendly Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-neutral-900/90 p-1 rounded-lg border border-neutral-800 self-start md:self-auto max-w-full">
            {types.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  id={`exp-tab-${type.id}`}
                  onClick={() => setSelectedType(type.id as any)}
                  className={`min-h-[38px] px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer select-none ${
                    isSelected 
                      ? "bg-neutral-800 text-white font-bold border border-neutral-700 shadow-sm" 
                      : "text-neutral-400 hover:text-neutral-200 active:bg-neutral-800"
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Career Timeline */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {filteredExperience.map((exp) => (
            <div
              key={exp.id}
              id={`experience-entry-${exp.id}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 md:gap-10 pt-6 sm:pt-8 border-t border-neutral-800/80 first:border-t-0 first:pt-0 text-left"
            >
              {/* Left: Period & Location Anchor */}
              <div className="md:col-span-4 flex flex-col justify-start">
                <span className="font-mono text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  {exp.period}
                </span>
                <span className="font-mono text-[11px] sm:text-xs text-neutral-500 uppercase mt-0.5 sm:mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-neutral-600 shrink-0" />
                  {exp.location}
                </span>
                
                {/* Metrics pill if present */}
                {exp.metrics && (
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
                    {exp.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded text-left">
                        <span className="font-mono text-xs font-bold text-white block">
                          {m.value}
                        </span>
                        <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-wider">
                          {m.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Role, Organization, & Responsibilities */}
              <div className="md:col-span-8 text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight leading-snug">
                  {exp.role}
                </h3>
                <h4 className="font-mono text-xs sm:text-sm text-neutral-400 font-medium uppercase tracking-wider mt-0.5 sm:mt-1">
                  {exp.organization}
                </h4>

                {/* Responsibilities list */}
                <ul className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5 text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <span className="text-emerald-400 font-mono text-xs shrink-0">—</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
