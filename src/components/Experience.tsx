import { useState } from "react";
import { Users, ShoppingBag, Terminal, Award, MapPin, Calendar } from "lucide-react";
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
    <section id="experience" className="relative py-28 sm:py-36 border-t border-neutral-800/80 bg-[#08080a]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Header with Track Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-neutral-800 pb-8 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-emerald-400">
                03 / REKAM JEJAK & PENGALAMAN
              </span>
              <span className="h-px w-8 bg-neutral-800" />
            </div>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.15]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Timeline Pengalaman & Kepemimpinan
            </h2>
          </div>

          {/* Minimalist Editorial Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-neutral-900 p-1 rounded-md border border-neutral-800 self-start md:self-auto">
            {types.map((type) => {
              const isSelected = selectedType === type.id;
              return (
                <button
                  key={type.id}
                  id={`exp-tab-${type.id}`}
                  onClick={() => setSelectedType(type.id as any)}
                  className={`px-3 py-1.5 rounded text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    isSelected 
                      ? "bg-neutral-800 text-white font-bold border border-neutral-700" 
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  {type.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Career Timeline */}
        <div className="max-w-5xl mx-auto space-y-12">
          {filteredExperience.map((exp, idx) => (
            <div
              key={exp.id}
              id={`experience-entry-${exp.id}`}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 pt-8 border-t border-neutral-800/80 first:border-t-0 first:pt-0"
            >
              {/* Left: Period & Location Anchor */}
              <div className="md:col-span-4 flex flex-col justify-start">
                <span className="font-mono text-sm font-bold text-emerald-400 uppercase tracking-wider">
                  {exp.period}
                </span>
                <span className="font-mono text-xs text-neutral-500 uppercase mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-neutral-600" />
                  {exp.location}
                </span>
                
                {/* Metrics pill if present */}
                {exp.metrics && (
                  <div className="mt-4 flex flex-wrap gap-2">
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
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
                  {exp.role}
                </h3>
                <h4 className="font-mono text-xs sm:text-sm text-neutral-400 font-medium uppercase tracking-wider mt-1">
                  {exp.organization}
                </h4>

                {/* Responsibilities list */}
                <ul className="mt-5 space-y-2.5 text-neutral-300 text-sm leading-relaxed">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-3">
                      <span className="text-emerald-400 font-mono text-xs mt-1 shrink-0">—</span>
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
